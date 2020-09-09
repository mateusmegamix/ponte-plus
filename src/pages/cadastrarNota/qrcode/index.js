import React, {Component} from 'react';

import {
  View,
  Text,
  Modal,
  Linking,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from '../styles';
import colors from '../../../styles/colors';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Alerts from '../../../components/Alert';
// import {SafeAreaView} from 'react-navigation';

import metrics from '../../../styles/metrics';
import Permissions from 'react-native-permissions';
import AsyncStorage from '@react-native-community/async-storage';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CadastrarNotaActions} from '../../../store/ducks/cadastrarNota';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class QRCode extends Component {
  state = {
    idleActive: false,
    sucess: false,
    error: false,
    takingQrCode: false,
    error_message: '',
    modalSucess: false,
    modalSucess_mensagem: '',
    modalVisible: false,
    token: '',
    resultQrcode: '',
  };

  requestGaleriaPermission = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title:
            'O Ponte Preta precisa da sua permissão para armazenamento externo.',
          message:
            'O Ponte Preta precisa da sua permissão para acessar o seu armazenamento externo.',
        },
      );
    } catch (err) {
      console.warn(err);
    }
  };

  permissaoDaCamera = async () => {
    Permissions.checkMultiple(['camera', 'photo']).then((response) => {
      //response is an object mapping type to permission
      this.setState({
        cameraPermission: response.camera,
        photoPermission: response.photo,
      });
    });
  };

  onSuccess(e) {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  }

  componentDidMount = async () => {
    await this.permissaoDaCamera();

    this.navigationDidFocus = this.props.navigation.addListener(
      'didFocus',
      () => {
        this.iniciaContagemRegressiva();
      },
    );

    this.navigationDidBlur = this.props.navigation.addListener(
      'didBlur',
      () => {
        this.limpaContagemRegressiva();
      },
    );

    this.setState({
      token: await AsyncStorage.getItem('UserData'),
    });
  };

  iniciaContagemRegressiva() {
    if (!this.idle) this.limpaContagemRegressiva();
    this.idle = setTimeout(() => {
      this.setState({idleActive: true});
    }, 40000);
  }

  limpaContagemRegressiva() {
    clearTimeout(this.idle);
    this.idle = null;
  }

  onBarCodeRead(scanResult) {
    this.limpaContagemRegressiva();

    //console.log(scanResult,'RESULTADO')
    this.setState({
      resultQrcode: scanResult,
      takingQrCode: true,
    });

    var data = {
      token: this.state.token,
      resultQrcode: scanResult.data,
      onSuccess: ({data}) => {
        //console.log(data,"API nota fiscal - sucesso")
        let mensagem = data.message;
        this.setState({
          modalSucess: true,
          modalSucess_mensagem: mensagem,
          takingQrCode: false,
        });
      },
      onFailed: ({data}) => {
        //console.log(data,"API nota fiscal - falha")
        let erro = data.Message;
        this.setState({error: true, error_message: erro, takingQrCode: false});
      },
    };

    this.props.getQrCodeRequest(data);
  }

  onSuccess(e) {
    alert(e);
  }

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  }

  render() {
    //console.log(this.props)
    return (
      <SafeAreaView
        style={{backgroundColor: colors.black}}
        forceInset={{bottom: 'never'}}>
        <View>
          <Alerts
            visible={this.state.idleActive}
            descricao="O leitor não conseguiu reconhecer o QR Code."
            mensagem="DIFICULDADE PARA LER"
            closeAction={() => {
              this.scanner.reactivate();
              this.setState({idleActive: false});
              this.iniciaContagemRegressiva();
            }}
            buttons={[
              {
                btnLabel: 'TENTAR NOVAMENTE',
                acao: () => {
                  this.scanner.reactivate();
                  this.setState({idleActive: false});
                  this.iniciaContagemRegressiva();
                },
              },
              {
                btnLabel: 'FOTOGRAFAR A NOTA',
                disableButtonStyle: true,
                styleBtn: {
                  textDecorationLine: 'underline',
                  padding: 12,
                  color: '#2F2F2F',
                },
                acao: () => {
                  this.setState({idleActive: false});
                  this.props.navigation.navigate('FotoNota');
                },
              },
            ]}
          />

          <Alerts
            visible={this.state.error}
            mensagem={this.state.error_message.toUpperCase()}
            closeAction={() => {
              this.props.navigation.goBack();
              // this.props.navigation.navigate('MeusPontos',{pageSelected:'meu_extrato'})
              this.iniciaContagemRegressiva();
              this.setState({error: false, error_message: ''});
            }}
          />

          <Alerts
            icon="check"
            visible={this.state.modalSucess}
            mensagemStyle={{fontSize: 16, fontWeight: 'bold'}}
            mensagem={`OBRIGADO POR ENVIAR SUA\nNOTA!`}
            descricaoStyle={{
              marginBottom: 10,
              fontSize: metrics.defaultFontSizeTitle,
            }}
            descricao={this.state.modalSucess_mensagem}
            buttons={[
              {
                btnLabel: 'ENVIAR OUTRA NOTA',
                acao: () => {
                  this.scanner.reactivate();
                  this.iniciaContagemRegressiva();
                  this.setState({modalSucess: false});
                },
              },
              {
                btnLabel: 'Agora não',
                disableButtonStyle: true,
                styleBtn: {padding: 12, color: '#2F2F2F'},
                acao: () => {
                  this.setState({
                    modalSucess: false,
                    foto: null,
                    modalVisible: false,
                  });
                  this.props.navigation.navigate('Home');
                  //this.props.navigation.navigate('MeusPontos',{pageSelected:'meu_extrato'})
                },
              },
            ]}
            closeAction={() => {
              this.scanner.reactivate();
              this.iniciaContagemRegressiva();
              this.setState({modalSucess: false});
            }}
          />

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({
                modalVisible: false,
              });
            }}>
            <View style={styles.imgBackground}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnIconClose}
                onPress={() => {
                  this.setState({
                    modalVisible: false,
                  });
                }}>
                <Icon name="times" style={[styles.iconClose, styles.pdRigth]} />
              </TouchableOpacity>
              <View style={styles.modalContentTd}>
                <Text style={styles.h1Modal}>Cadastro de nota com QR Code</Text>
                <View style={styles.ListDuvidas}>
                  <View style={styles.row}>
                    <View style={styles.boolNumber}>
                      <Text style={styles.txtNumber}>1</Text>
                    </View>
                    <View>
                      <Text style={styles.txtRow}>
                        Confira se a nota contém o seu CPF. Ele precisa ser o
                        mesmo CPF que você cadastrou no programa;
                      </Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.boolNumber}>
                      <Text style={styles.txtNumber}>2</Text>
                    </View>
                    <View>
                      <Text style={styles.txtRow}>
                        Fique atento a data da compra: você precisa cadastrar a
                        nota até um mês após a compra;
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.boolNumber}>
                    <Text style={styles.txtNumber}>3</Text>
                  </View>
                  <View>
                    <Text style={styles.txtRow}>
                      Verifique se o cupom não está amassado ou rasurado, pois
                      isso pode impedir a leitura do cupom;
                    </Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.boolNumber}>
                    <Text style={styles.txtNumber}>4</Text>
                  </View>
                  <View>
                    <Text style={styles.txtRow}>
                      Caso não consiga cadastrar o cupom por aqui, utilize o
                      modo Fotografia.
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonOkEntendi}
                onPress={() => {
                  this.setState({
                    modalVisible: false,
                  });
                  this.iniciaContagemRegressiva();
                }}>
                <Text style={styles.txtButton}>OK, ENTENDI</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <View style={styles.headerCamera}>
            <View style={styles.containerTop}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalVisible: true,
                  });
                  this.limpaContagemRegressiva();
                }}
                style={styles.duvidas}>
                <View style={styles.boolquestion}>
                  <Icon name="question" style={styles.iconequestion} />
                </View>
                <Text style={styles.colortxt}>Dúvidas, toque aqui</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnIconClose}
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Icon name="times" color="#000000" style={styles.iconClose} />
              </TouchableOpacity>
            </View>
          </View>

          {this.state.sucess ? (
            <View style={styles.containerPreview}>
              <View></View>

              <View></View>
            </View>
          ) : (
            <QRCodeScanner
              ref={(node) => {
                this.scanner = node;
              }}
              showMarker
              onRead={this.onBarCodeRead.bind(this)}
              cameraStyle={{height: SCREEN_HEIGHT}}
              customMarker={
                <View style={styles2.rectangleContainer}>
                  <View style={styles2.topOverlay}>
                    {/* <Text style={{ fontSize: 30, color: "white" }}>
                                QR CODE SCANNER
                            </Text> */}
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <View style={styles2.leftAndRightOverlay} />

                    <View style={styles2.rectangle}>
                      <Animatable.View
                        style={styles2.scanBar}
                        direction="alternate-reverse"
                        iterationCount="infinite"
                        duration={1700}
                        easing="linear"
                        animation={this.makeSlideOutTranslation(
                          'translateY',
                          SCREEN_WIDTH * 0.2,
                        )}
                      />
                    </View>

                    <View style={styles2.leftAndRightOverlay} />
                  </View>

                  <View style={styles2.bottomOverlay} />
                </View>
              }
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const {width, height} = Dimensions.get('window');
const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = 'red';

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = '#22ff00';

const iconScanColor = 'blue';

const styles2 = {
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
};

function mapStateToProps(state) {
  return {
    cadastrarNota: state.cadastrarNota,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CadastrarNotaActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QRCode);
