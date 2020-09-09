import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Alerts from '../../../components/Alert';
// import {SafeAreaView} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Loading from '../../../components/loading';
import metrics from '../../../styles/metrics';
import colors from '../../../styles/colors';

import {RNCamera} from 'react-native-camera';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CadastrarNotaActions} from '../../../store/ducks/cadastrarNota';

class FotoNota extends Component {
  state = {
    sucess: false,
    modalPrefoto: true,
    takingPhoto: false,
    modalVisible: false,
    camera: {
      type: RNCamera.Constants.Type.back,
      barcodeFinderVisible: true,
    },
    foto: null,
    modalSucess: false,
  };

  componentDidMount = async () => {
    this.setState({
      token: await AsyncStorage.getItem('UserData'),
    });
  };

  takePicture = async function () {
    if (this.camera) {
      await this.setState({takingPhoto: true});
      const options = {
        quality: 0.9,
        width: 1024,
        height: 1024,
        base64: false,
        fixOrientation: true,
      };
      const data = await this.camera.takePictureAsync(options);
      await this.setState({takingPhoto: false});
      this.setState({
        foto: data.uri,
      });
    }
  };

  EnviarFoto = async () => {
    const data = new FormData();
    data.append('name', 'testName'); // you can append anyone.
    data.append('photo', {
      uri: this.state.foto,
      type: 'image/jpeg', // or photo.type
      name: 'testPhotoName',
    });
    let params = {
      token: await AsyncStorage.getItem('UserData'),
      data: this.state.foto,
    };
    this.props.getFotoRequest(params);
    this.setState({
      modalVisible: false,
      modalSucess: true,
    });
  };

  renderPosFoto() {
    return (
      <View style={[{flex: 1}, styles.modalContentFoto]}>
        <View style={{flex: 1}}>
          <Image source={{uri: this.state.foto}} style={styles.fotoNota} />
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          <View style={[styles.buttons, {alignContent: 'center'}]}>
            <View style={styles.buttonSpecific}>
              <Text style={styles.txtFoto}>{`Fotografar\nnovamente`}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  this.setState({foto: null});
                }}
                style={styles.capture}>
                <Icon name="refresh" color="#fff" style={styles.iconeCamera} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpecific}>
              <Text style={styles.txtFoto}>{`Aceitar\nnota`}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  this.EnviarFoto();
                }}
                style={styles.capture}>
                <Icon name="check" color="#fff" style={styles.iconeCamera} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    this.camera = null;
    this.barcodeCodes = [];
    console.log(this.props, 'propsmesnagem');
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{bottom: 'never'}}>
        <View style={{flex: 1}}>
          <Loading
            loading={this.state.takingPhoto || this.props.cadastrarNota.loading}
          />

          <Alerts
            visible={this.state.modalPrefoto}
            mensagem="DADOS NECESSÁRIOS"
            descricao={
              'Certifique-se que a imagem contenha:\nCNPJ, CPF, data e valor da compra.'
            }
            buttons={[
              {
                btnLabel: 'OK, ENTENDI.',
                acao: () => {
                  this.setState({modalPrefoto: false, modalVisible: false});
                },
              },
            ]}
            closeAction={() => {
              this.setState({modalPrefoto: false, modalVisible: false});
            }}
          />

          <Alerts
            visible={
              this.props.cadastrarNota.alert && this.props.cadastrarNota.error
            }
            mensagemStyle={{fontSize: 16, fontWeight: 'bold'}}
            mensagem="Houve um Erro"
            descricaoStyle={{
              marginBottom: 10,
              fontSize: metrics.defaultFontSizeTitle,
            }}
            descricao={this.props.cadastrarNota.message}
            buttons={[
              {
                btnLabel: 'Tentar Novamente',
                acao: () => {
                  this.props.doCadastrarNotaCloseModal();
                  this.setState({
                    modalSucess: false,
                    foto: null,
                    modalVisible: false,
                  });
                },
              },
              {
                btnLabel: 'Agora não',
                style: {},
                styleBtn: {padding: 12, color: '#2F2F2F'},
                acao: () => {
                  this.props.doCadastrarNotaCloseModal();
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
              this.props.doCadastrarNotaCloseModal();
              this.setState({
                modalSucess: false,
                foto: null,
                modalVisible: false,
              });
            }}
          />

          <Alerts
            icon="check"
            visible={
              this.props.cadastrarNota.alert && !this.props.cadastrarNota.error
            }
            mensagemStyle={{fontSize: 16, fontWeight: 'bold'}}
            mensagem={`OBRIGADO POR ENVIAR SUA\nNOTA!`}
            descricaoStyle={{
              marginBottom: 10,
              fontSize: metrics.defaultFontSizeTitle,
            }}
            descricao={this.props.cadastrarNota.message}
            buttons={[
              {
                btnLabel: 'ENVIAR OUTRA NOTA',
                acao: () => {
                  this.props.doCadastrarNotaCloseModal();
                  this.setState({
                    modalSucess: false,
                    foto: null,
                    modalVisible: false,
                  });
                },
              },
              {
                btnLabel: 'AGORA NÃO',
                style: {backgroundColor: 'transparent', elevation: 0},
                styleBtn: {padding: 12, color: '#2F2F2F'},
                acao: () => {
                  this.props.doCadastrarNotaCloseModal();

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
              this.props.doCadastrarNotaCloseModal();
              this.setState({
                modalSucess: false,
                foto: null,
                modalVisible: false,
              });
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
                <Icon
                  name="times"
                  style={[styles.iconClose, styles.btnIconCloseModal]}
                />
              </TouchableOpacity>
              <View style={styles.modalContentTd}>
                <Text style={styles.h1Modal}>Cadastro de nota por foto</Text>
                <View style={styles.ListDuvidas}>
                  <View style={styles.row}>
                    <View style={styles.boolNumber}>
                      <Text style={styles.txtNumber}>1</Text>
                    </View>
                    <View>
                      <Text style={styles.txtRow}>
                        Coloque a nota fiscal em uma superfície plana;
                      </Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.boolNumber}>
                      <Text style={styles.txtNumber}>2</Text>
                    </View>
                    <View>
                      <Text style={styles.txtRow}>
                        Capture a imagem contendo o CNPJ da loja, o seu CPF, a
                        data e o valor da compra. Certifique-se de que a imagem
                        está legível;
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
                      Fique atento à data da nota: você precisa cadastrá-la até
                      30 dias após a compra.
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
                <Icon name="times" style={styles.iconClose} />
              </TouchableOpacity>
            </View>
          </View>
          {this.state.foto ? (
            this.renderPosFoto()
          ) : (
            <View style={styles.containerCamera}>
              <RNCamera
                ref={(ref) => {
                  this.camera = ref;
                }}
                defaultTouchToFocus
                flashMode={this.state.camera.flashMode}
                // mirrorImage={false}

                onFocusChanged={() => {}}
                onZoomChanged={() => {}}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={
                  'We need your permission to use your camera phone'
                }
                style={styles.preview}
                type={this.state.camera.type}>
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    height: '100%',
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      this.takePicture();
                    }}
                    style={styles.capture}>
                    <Icon
                      name="camera"
                      color="#fff"
                      style={styles.iconeCamera}
                    />
                  </TouchableOpacity>
                </View>
              </RNCamera>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
FotoNota.navigationOptions = {
  tabBarLabel: 'NOTAS',
  tabBarIcon: ({tintColor}) => (
    <FontAwesome style={[styles.iconeHome, {color: tintColor}]}>
      {Icons.plus}
    </FontAwesome>
  ),
};
function mapStateToProps(state) {
  return {
    cadastrarNota: state.cadastrarNota,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CadastrarNotaActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FotoNota);
