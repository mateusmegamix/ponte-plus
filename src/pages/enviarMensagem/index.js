import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
  ActionSheetIOS,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import faleConosco from '../../services/faleConosco';
import Loader from '../../components/loading';
import Alerts from '../../components/Alert';
import HeaderTitulo from '../../components/HeaderTitulo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';

// import {SafeAreaView} from 'react-navigation';
import colors from '../../styles/colors';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as MensagensActions} from '../../store/ducks/mensagens';
import ButtonDefault from '../../components/ButtonDefault';

var ASSUNTO_BTN = ['Dúvidas', 'Sugestões', 'Reclamações', 'Fechar'];

class enviarMensagem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtro: 0,
      loading: false,
      error: false,
      sucesso: false,
      error_msg: '',
      modalVisible: false,
      msg_assunto: '',
      msg_mensagem: '',
      msg_foto: null,
    };
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ASSUNTO_BTN,
        cancelButtonIndex: 3,
      },
      (buttonIndex) => {
        if (buttonIndex != 3) {
          this.setState({
            filtro: buttonIndex,
            msg_assunto: ASSUNTO_BTN[buttonIndex],
          });
        }
      },
    );
  }

  async backAfterSuccess() {
    const {navigation} = this.props;
    let user = await AsyncStorage.getItem('UserData');
    let token = user.replace('"', '').replace('"', '');
    try {
      this.props.getMensagensRequest(token);
    } catch (error) {
      Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
    }
    this.setState({sucesso: false});
    navigation.goBack();
  }

  async salvar() {
    if (this.state.msg_assunto == '') {
      this.setState({error: true, error_msg: 'SELECIONE UM ASSUNTO.'});
      return false;
    }
    if (this.state.msg_mensagem == '') {
      this.setState({error: true, error_msg: 'DIGITE UMA MENSAGEM.'});
      return false;
    }

    let user = await AsyncStorage.getItem('UserData');
    let token = user.replace('"', '').replace('"', '');
    let file = this.state.msg_foto;

    let dados = {
      Origem: 0,
      Mensagem: this.state.msg_mensagem,
      Assunto: this.state.msg_assunto,
      Nome: this.props.associado.data.Nome,
      Telefone: this.props.associado.data.Celular,
      Email: this.props.associado.data.Email,
      AssociadoId: this.props.associado.data.Id,
    };
    //console.log(this.props.associado.data)

    this.setState({loading: true});
    faleConosco.saveFaleconosco(dados, token).then((response) => {
      var id = response.data;
      if (file)
        faleConosco
          .saveImage(id, file, token)
          .then((response) => {
            //console.log(response)
            this.setState({loading: false});
            this.setState({sucesso: true});
          })
          .catch((err) => {
            Alert.alert(
              'Houve um erro no envio da sua foto. Verifique a sua conexão com a internet e tente novamente.',
            );
          });
      else {
        this.setState({loading: false});
        this.setState({sucesso: true});
      }
    });
  }

  scrolldown(force = false) {
    Dimensions.get('window').height;
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
      //console.log('Response = ', photo);

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

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black, marginBottom: 1}}>
        <View style={{flex: 1, backgroundColor: colors.bgPag}}>
          <HeaderTitulo titulo="MENSAGENS" navigation={this.props.navigation} />

          <KeyboardAwareScrollView>
            <ScrollView style={styles.bgPag}>
              <Loader
                loading={this.state.loading}
                actionCancelar={() => this.setState({loading: false})}
              />
              <Alerts
                visible={this.state.error}
                mensagem={this.state.error_msg.toUpperCase()}
                closeAction={() => this.setState({error: false})}
              />

              <Alerts
                visible={this.state.sucesso}
                icon="check"
                mensagem="SUA MENSAGEM FOI CADASTRADA COM SUCESSO!"
                closeAction={() => this.backAfterSuccess()}
              />

              <View style={styles.container}>
                <Text style={styles.txtForm}>
                  Tem dúvidas ou sugestões? Utilize o formulário abaixo,
                  preenchendo os campos obrigatórios.
                </Text>
                {Platform.OS == 'ios' ? (
                  <TouchableWithoutFeedback
                    onPress={() => this.showActionSheet()}>
                    <View style={styles.camposSelectIOS}>
                      <Text style={{paddingBottom: 15}}>
                        {typeof ASSUNTO_BTN[this.state.filtro] !==
                          'undefined' && this.state.msg_assunto != ''
                          ? ASSUNTO_BTN[this.state.filtro]
                          : 'Selecione o assunto..'}
                      </Text>
                      <Icon
                        name="sort-down"
                        size={20}
                        color="black"
                        style={[{right: 18, top: 5, position: 'absolute'}]}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                ) : (
                  <View style={{width: '100%'}}>
                    <Picker
                      mode="dropdown"
                      selectedValue={this.state.msg_assunto}
                      placeholder="Selecione o Assunto"
                      style={styles.camposSelect}
                      textStyle={{fontSize: 1}}
                      itemTextStyle={{fontSize: 1}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({msg_assunto: itemValue})
                      }>
                      <Picker.Item label="Selecione o Assunto" value="" />
                      <Picker.Item label="Dúvidas" value="Dúvidas" />
                      <Picker.Item label="Sugestões" value="Sugestões" />
                      <Picker.Item label="Reclamações" value="Reclamações" />
                    </Picker>
                    <Icon
                      name="sort-down"
                      size={20}
                      color="black"
                      style={[{right: 18, top: 30, position: 'absolute'}]}
                    />
                  </View>
                )}
                <TextInput
                  placeholder="Escreva sua mensagem"
                  placeholderTextColor="#000000"
                  onChangeText={(mensagem) =>
                    this.setState({msg_mensagem: mensagem})
                  }
                  multiline={true}
                  numberOfLines={4}
                  style={styles.textArea}
                />
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
                      <Text style={styles.buttonRemoveFile_text}>Remover</Text>
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
                  activeOpacity={0.8}
                  style={styles.buttonVoltar}
                  onPress={() => navigation.goBack()}>
                  <Text style={styles.txtButtonVoltar}> VOLTAR </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  mensagens: state.mensagens,
  associado: state.associado,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...MensagensActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(enviarMensagem);
