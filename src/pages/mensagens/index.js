import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  Alert,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import momentptBR from 'moment/locale/pt-br';
import general from '../../config/general';
import ImagePicker from 'react-native-image-picker';
import faleConosco from '../../services/faleConosco';
import Loader from '../../components/loading';
import metrics from '../../styles/metrics';
import HeaderTitulo from '../../components/HeaderTitulo';
// import {SafeAreaView} from 'react-navigation';
import colors from '../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';

import Alerts from '../../components/Alert';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as MensagensActions} from '../../store/ducks/mensagens';
import ButtonDefault from '../../components/ButtonDefault';
import images from '../../styles/images';

class Mensagens extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      behavior: 'padding',
      error_msg: '',
      modalVisible: false,
      msg_assunto: '',
      msg_mensagem: '',
      msg_foto: null,
    };
  }

  resetForm() {
    this.setState({
      loading: false,
      modalVisible: false,
      error: false,
      msg_assunto: '',
      msg_mensagem: '',
      msg_foto: null,
    });
  }

  async salvar() {
    const {navigation} = this.props;
    if (this.state.loading) return false;

    if (this.state.msg_mensagem == '') {
      this.setState({error: true, error_msg: 'Digite a mensagem por favor'});
      return false;
    }

    let user = await AsyncStorage.getItem('UserData');
    let token = user.replace('"', '').replace('"', '');
    let file = this.state.msg_foto;

    let dados = {
      Origem: 0,
      IdMensagem: this.historico.Id,
      Mensagem: this.state.msg_mensagem,
    };

    this.setState({loading: true});
    faleConosco.saveInteracao(dados, token).then((response) => {
      var id = response.data;

      if (id) faleConosco.saveInteracaoLido(id, token);

      if (file)
        faleConosco
          .saveImageInteracao(id, file, token)
          .then((response) => {
            this.resetForm();
            if (this.state.loading == true) {
              this.setState({loading: false});
              //Alert.alert("Resposta cadastrada com sucesso!");
              this.setModalVisible(false);
              setTimeout(() => {
                this.scrollView.scrollToEnd({animated: true});
              }, 1);
            }
            try {
              faleConosco.saveInteracaoLido(id, token);
              this.props.getMensagensRequest(token);
            } catch (error) {
              Alert.alert(
                'Erro ao carregar a tela. Tente novamente mais tarde.',
              );
            }
          })
          .catch((err) => {
            Alert.alert(
              'Houve um erro no envio da sua foto. Verifique a sua conexão com a internet e tente novamente.',
            );
          });
      else {
        if (this.state.loading == true) {
          this.setState({loading: false});
          this.resetForm();
          //Alert.alert("Resposta cadastrada com sucesso!");
          this.setModalVisible(false);
          setTimeout(() => {
            this.scrollView.scrollToEnd({animated: true});
          }, 1);
        }
        try {
          this.props.getMensagensRequest(token);
        } catch (error) {
          Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
        }
      }
    });
  }
  removerFoto() {
    this.setState({msg_foto: null});
  }

  abrirFotoModal() {
    const options = {
      title: 'Selecione a foto',
      takePhotoButtonTitle: 'Tirar Foto',
      cancelButtonTitle: 'Cancelar',
      chooseFromLibraryButtonTitle: 'Escolher da Galeria',
      cameraType: 'back',
      mediaType: 'photo',
      quality: 0.6,
      width: 1024,
      height: 1024,
      fixOrientation: true,
    };
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (photo) => {
      if (photo.didCancel) {
        //console.log('User cancelled image picker');
      } else if (photo.error) {
        //console.log('ImagePicker Error: ', photo.error);
      } else if (photo.customButton) {
        //console.log('User tapped custom button: ', photo.customButton);
      } else {
        let file = {
          uri: photo.uri,
          type: photo.type,
          name: photo.fileName,
        };
        this.setState({msg_foto: file});
      }
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  async componentDidMount() {
    const {navigation} = this.props;
    const not = navigation.getParam('id_historico', {});
    let token = await AsyncStorage.getItem('UserData');
    this.props.getMensagensRequest(token, not.Id);
    this.scrollView.scrollToEnd({animated: false});
  }

  renderInteracoes = (interacoes) => {
    const {navigation} = this.props;

    return (
      <FlatList
        style={styles.listMsg}
        data={interacoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          moment.locale('pt-br');
          var Data = moment(item.Data).format('D [de] MMMM [de] YYYY - LT');

          let anexos = item.MensagemInteracaoAnexo;

          //console.log(anexos)
          return item.OrigemAdm == false ? (
            <View style={styles.overVisible}>
              <Text style={styles.data}>{Data}</Text>
              <View style={styles.question}>
                <Image
                  source={require('../../assets/arrowWhite.png')}
                  style={styles.arrowWhite}
                />

                <Text style={styles.titleQuestion}>{item.Mensagem}</Text>

                {anexos.map((img, i) => {
                  return (
                    <Image
                      style={styles.imgQuestion}
                      source={{uri: img.ArquivoUrl}}
                    />
                  );
                })}
              </View>
            </View>
          ) : (
            <View style={styles.overVisible}>
              <Text style={styles.data}>{Data}</Text>
              <View style={styles.answer}>
                <Image
                  source={require('../../assets/arrow.png')}
                  style={styles.arrow}
                />
                <Text style={styles.nameAnswer}>
                  RESPOSTA DE {general.nomeClienteFaleConosco.toUpperCase()}
                </Text>
                <Text style={styles.titleAnswer}>{item.Mensagem}</Text>
                {anexos.map((img, i) => {
                  return (
                    <Image
                      style={{height: 300, width: '100%'}}
                      source={{uri: img.ArquivoUrl}}
                    />
                  );
                })}
              </View>
            </View>
          );
        }}
      />
    );
  };

  setMensagensLidas = async () => {
    if (this.historico.MensagemInteracoes.length > 0) {
      let user = await AsyncStorage.getItem('UserData');
      let token = user.replace('"', '').replace('"', '');

      this.historico.MensagemInteracoes.forEach((e) => {
        if (!e.Lido) faleConosco.saveInteracaoLido(e.Id, token);
      });
    }
  };

  render() {
    const {navigation} = this.props;
    const {historico, Id} = navigation.state.params;
    if (historico) this.historico = historico;

    if (Id) {
      found = this.props.mensagens.data.find((b) => b.Id == Id);
      if (found !== undefined) {
        this.historico = found;
      }
    }

    moment.locale('pt-br');

    let MensagemInteracaoAnexo = [];
    if (this.historico.Foto)
      MensagemInteracaoAnexo.push({
        ArquivoUrl: general.imagemNotificacoes + this.historico.Foto,
      });

    let Finalizado = this.historico.Finalizado;

    this.MensagemInteracoes = [
      {
        Mensagem: this.historico.MensagemEnviada,
        Data: this.historico.DataCadastro,
        OrigemAdm: false,
        MensagemInteracaoAnexo: MensagemInteracaoAnexo,
      },
    ];

    this.MensagemInteracoes = this.MensagemInteracoes.concat(
      this.historico.MensagemInteracoes,
    );

    this.setMensagensLidas();

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black, marginBottom: 1}}>
        <View style={{flex: 1, backgroundColor: colors.grayrow}}>
          <HeaderTitulo titulo="MENSAGENS" navigation={this.props.navigation} />

          <ScrollView
            style={styles.bgPag}
            ref={(view) => {
              this.scrollView = view;
            }}>
            <Alerts
              visible={this.state.error}
              mensagem={this.state.error_msg.toUpperCase()}
              closeAction={() => this.setState({error: false})}
            />

            <View style={styles.container}>
              <Text style={styles.assunto}>
                ASSUNTO:{' '}
                <Text style={styles.bolder}>
                  {this.historico.Assunto.toUpperCase()}
                </Text>{' '}
              </Text>
            </View>

            <View>{this.renderInteracoes(this.MensagemInteracoes)}</View>
            {!Finalizado ? (
              <View style={[styles.container, styles.buttonNovaMsg]}>
                <ButtonDefault
                  label={`RESPONDER`}
                  style={styles.buttonContainer}
                  txtStyle={styles.txtButton}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                />
              </View>
            ) : (
              <View
                style={[
                  styles.container,
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                  },
                ]}>
                <Text>Chamado finalizado.</Text>
              </View>
            )}
          </ScrollView>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(false);
            }}>
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.modalTopoTransparent}
                onPress={() => {
                  this.setModalVisible(false);
                }}></TouchableOpacity>
              <View style={styles.modalContent}>
                <Loader
                  loading={this.state.loading}
                  actionCancelar={() => this.setState({loading: false})}
                />

                <View style={styles.container}>
                  <TextInput
                    placeholder="Escreva sua mensagem"
                    onChangeText={(mensagem) =>
                      this.setState({msg_mensagem: mensagem})
                    }
                    placeholderTextColor="#000000"
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textArea}
                  />
                  <Text style={styles.txtForm}>
                    Caso possua alguma imagem, utilize o campo abaixo para
                    anexar.
                  </Text>
                  <View style={styles.vFile}>
                    <TextInput
                      editable={false}
                      placeholder={
                        this.state.msg_foto ? 'Foto.jpg' : 'Foto (opcional)'
                      }
                      placeholderTextColor="#000000"
                      style={styles.inputFile}
                    />
                    {this.state.msg_foto ? (
                      <TouchableOpacity
                        style={styles.buttonRemoveFile}
                        onPress={() => this.removerFoto()}>
                        <Text style={styles.buttonRemoveFile_text}>
                          Remover
                        </Text>
                      </TouchableOpacity>
                    ) : null}

                    <ButtonDefault
                      label={`CARREGAR`}
                      style={styles.buttonFile}
                      txtStyle={styles.txtBtnFile}
                      onPress={() => this.abrirFotoModal()}
                    />
                  </View>

                  <ButtonDefault
                    label={`ENVIAR`}
                    style={styles.buttonEnviar}
                    txtStyle={styles.txtButton}
                    onPress={() => this.salvar()}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(false);
                    }}
                    style={styles.buttonVoltar}>
                    <Text>VOLTAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  mensagens: state.mensagens,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...MensagensActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Mensagens);
