import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Text,
  Image,
  TextInput,
  ActionSheetIOS,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import general from '../../config/general';
import stylesEndereco from './stylesEndereco';

import Alerts from '../../components/Alert';
import Loading from '../../components/loading';
import HeaderTitulo from '../../components/HeaderTitulo';
import ButtonDefault from '../../components/ButtonDefault';

import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {TextInputMask} from 'react-native-masked-text';
// import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationActions, StackActions} from 'react-navigation';

import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as AtualizarActions} from '../../store/ducks/atualizar';

const resetAction = StackActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({routeName: 'meuPerfil'})],
});

var SEXO_BTNS = ['VOLTAR', 'Masculino', 'Feminino'];

const options = {
  title: 'Escolha a sua foto de perfil',
  takePhotoButtonTitle: 'Tirar Foto',
  cancelButtonTitle: 'Cancelar',
  chooseFromLibraryButtonTitle: 'Escolher da Galeria',
  quality: 0.6,
  width: 1024,
  height: 1024,
  fixOrientation: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
    waitUntilSaved: true,
  },
};

class meuPerfilDadosPessoais extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      text: 'Useless Placeholder',
      modalVisibleAlertConcluido: false,
      modalVisibleAlertCancel: false,
      photo: null,
      Nome: '',
      Sobrenome: '',
      DataNascimento: '',
      RG: '',
      Sexo: '',
      Telefone: '',
      Celular: '',
      TelefoneComercial: '',
      EmailAdicional: '',
      EnderecoLogradouro: '',
      EnderecoNumero: '',
      EnderecoComplemento: '',
      EnderecoBairro: '',
      EnderecoCidade: '',
      EnderecoEstado: '',
      EnderecoCEP: '',
      isDadosUpdate: false,
    };
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    this.props.getAssociadoRequest(token);

    let Sexo = '';
    if (this.props.associado.data.Sexo)
      Sexo = this.props.associado.data.Sexo.toString();

    this.setState({
      token: token,
      Nome: this.props.associado.data.Nome,
      Sobrenome: this.props.associado.data.Sobrenome,
      DataNascimento: this.dataFormatada(),
      Sexo: Sexo,
      CPF: this.props.associado.data.CPF,
      Email: this.props.associado.data.Email,
      Telefone: this.props.associado.data.Telefone,
      Celular: this.props.associado.data.Celular,
      TelefoneComercial: this.props.associado.data.TelefoneComercial,
      EmailAdicional: this.props.associado.data.EmailAdicional,
      EnderecoLogradouro: this.props.associado.data.EnderecoLogradouro,
      EnderecoNumero: this.props.associado.data.EnderecoNumero,
      EnderecoComplemento: this.props.associado.data.EnderecoComplemento,
      EnderecoBairro: this.props.associado.data.EnderecoBairro,
      EnderecoCidade: this.props.associado.data.EnderecoCidade,
      EnderecoEstado: this.props.associado.data.EnderecoEstado,
      EnderecoCEP: this.props.associado.data.EnderecoCEP,
    });
  };

  dataFormatada = () => {
    let dataFormatada = '';
    try {
      if (this.props.associado.data.DataNascimento) {
        var datePart = this.props.associado.data.DataNascimento.match(/\d+/g),
          year = datePart[0],
          month = datePart[1],
          day = datePart[2];
        return (dataFormatada = day + '/' + month + '/' + year);
      } else {
        dataFormatada = null;
        return dataFormatada;
      }
    } catch (error) {
      return error;
    }
  };

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: SEXO_BTNS,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex != 0) this.setState({Sexo: buttonIndex});
      },
    );
  }

  async componentWillReceiveProps(props) {
    if (props.associado.data.Sexo)
      this.setState({
        Sexo: props.associado.data.Sexo.toString(),
      });
  }
  setModalVisibleAlertConcluido(visible) {
    this.setState({modalVisibleAlertConcluido: visible});
    if (visible == false) {
      this.props.navigation.dispatch(resetAction);
    }
  }

  setModalVisibleAlertCancel(visible) {
    this.setState({modalVisibleAlertCancel: visible});
  }

  onAtualizar = async () => {
    this.props.getAtualizaRequest(this.state);
  };

  getCamera = async () => {
    let token = await AsyncStorage.getItem('UserData');
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        //console.log(response, 'RESPONSE FOTO')

        if (Platform.OS == 'ios') {
          let uri = response.uri;
          var obj = {
            photo: uri,
            namephoto: uri.substring(uri.lastIndexOf('/') + 1),
            token: token,
          };

          this.setState(obj);
          this.props.getAtualizaFotoRequest(obj);
          this.props.getAssociadoRequest(this.state.token);
        } else {
          this.setState(
            {
              photo: response.path,
              namephoto: response.fileName,
              token: token,
            },
            () => {
              this.props.getAtualizaFotoRequest(this.state);
              this.props.getAssociadoRequest(this.state.token);
            },
          );
        }
      }
    });
  };

  searchCep = (c) => {
    let r = c.replace('-', '');
    let cepFormatado = r;
    if (c.length == 9) {
      return axios
        .get('https://viacep.com.br/ws/' + cepFormatado + '/json')
        .then((response) => {
          dataJson = response;
          this.setState({
            EnderecoCEP: dataJson.data.cep,
            EnderecoCidade: dataJson.data.localidade,
            EnderecoEstado: dataJson.data.uf,
            EnderecoBairro: dataJson.data.bairro,
            EnderecoLogradouro: dataJson.data.logradouro,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  dataNascimentoInput = (_data) => {
    if (_data === null || _data === '') {
      this.setState({
        DataNascimento: null,
      });
    } else return this.setState({DataNascimento: _data});
  };

  render() {
    const {navigation} = this.props;

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black}}
        forceInset={{bottom: 'never'}}>
        <Loading loading={this.props.atualizar.loading} />
        <View style={{flex: 1, height: metrics.screenHeight}}>
          <HeaderTitulo
            titulo="MEU PERFIL"
            navigation={this.props.navigation}
          />

          <KeyboardAwareScrollView
            style={styles.containerFull}
            bounces={ifIphoneX(false)}>
            <View style={styles.containerPerfil}>
              <View style={styles.imageUser}>
                {this.props.associado.data.CaminhoFoto === '' ||
                this.props.associado.data.CaminhoFoto === null ? (
                  <Image
                    source={require('../../assets/perfilpadrao.png')}
                    style={styles.imgUsuario}
                  />
                ) : (
                  <Image
                    source={{uri: this.props.associado.data.CaminhoFoto}}
                    style={styles.imgUsuario}
                  />
                )}
                {this.state.photo === null ? (
                  <Image
                    source={{
                      uri:
                        general.imagemPerfil + this.props.associado.data.Foto,
                    }}
                    style={styles.imgUsuario}
                  />
                ) : (
                  <Image
                    source={{uri: 'file://' + this.state.photo}}
                    style={styles.imgUsuario}
                  />
                )}

                <TouchableOpacity
                  style={styles.altImg}
                  onPress={() => {
                    this.getCamera();
                  }}>
                  <Icon name="plus" style={styles.altIco} />
                </TouchableOpacity>
              </View>
              <View style={styles.imageUserBorder}></View>
              <View style={styles.form}>
                <Text style={styles.titleArea}>DADOS PESSOAIS</Text>
                <View style={styles.boxInput}>
                  <Icon name="user" style={styles.icons} />
                  <TextInput
                    style={styles.camposInput}
                    placeholder="nome"
                    placeholderTextColor={colors.gray}
                    value={this.state.Nome}
                    onChangeText={(Nome) => this.setState({Nome})}
                  />
                </View>

                <View style={styles.boxInput}>
                  <Icon name="user" style={styles.icons} />
                  <TextInput
                    style={styles.camposInput}
                    placeholder="sobrenome"
                    placeholderTextColor={colors.gray}
                    value={this.state.Sobrenome}
                    onChangeText={(Sobrenome) => this.setState({Sobrenome})}
                  />
                </View>

                <View style={styles.boxInput}>
                  <Icon name="birthday-cake" style={styles.icons} />
                  <TextInputMask
                    style={styles.camposInput}
                    type={'datetime'}
                    placeholder="data de nascimento"
                    placeholderTextColor={colors.gray}
                    options={{format: 'DD/MM/YYYY'}}
                    value={this.state.DataNascimento}
                    onChangeText={(DataNascimento) =>
                      this.dataNascimentoInput(DataNascimento)
                    }
                  />
                </View>

                <View style={styles.boxInput}>
                  <Icon name="address-card" style={styles.icons} />
                  <TextInputMask
                    style={[styles.camposInput, {color: '#ccc'}]}
                    type={'cpf'}
                    placeholder="cpf"
                    editable={false}
                    placeholderTextColor={colors.gray}
                    value={this.state.CPF}
                    onChangeText={(CPF) => this.setState({CPF})}
                  />
                </View>

                <View style={styles.boxInput}>
                  <Icon name="envelope" style={styles.icons} />
                  <TextInput
                    style={[
                      styles.camposInput,
                      {
                        color: '#ccc',
                      },
                    ]}
                    placeholder="e-mail"
                    placeholderTextColor={colors.gray}
                    editable={false}
                    value={this.state.Email}
                    onChangeText={(Email) => this.setState({Email})}
                  />
                </View>
                <View style={styles.boxInput}>
                  <Icon name="envelope" style={styles.icons} />
                  <TextInput
                    style={styles.camposInput}
                    placeholder="e-mail adicional"
                    placeholderTextColor={colors.gray}
                    value={this.state.EmailAdicional}
                    onChangeText={(EmailAdicional) =>
                      this.setState({EmailAdicional})
                    }
                  />
                </View>

                {Platform.OS == 'ios' ? (
                  <TouchableWithoutFeedback
                    onPress={() => this.showActionSheet()}>
                    <View style={styles.inputSexoIOS}>
                      <Icon
                        name="venus-mars"
                        size={15}
                        style={[styles.icons, {marginTop: -3}]}
                      />
                      <Text style={{paddingLeft: 10, paddingBottom: 20}}>
                        {typeof SEXO_BTNS[this.state.Sexo] !== 'undefined' &&
                        SEXO_BTNS[this.state.Sexo] != 'VOLTAR'
                          ? SEXO_BTNS[this.state.Sexo]
                          : 'Escolha..'}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                ) : (
                  <View style={styles.inputSexoAndroid}>
                    <Icon
                      name="venus-mars"
                      style={[styles.icons, {marginTop: -3}]}
                    />
                    <Picker
                      selectedValue={this.state.Sexo}
                      style={styles.camposSelect}
                      onValueChange={(value) => {
                        this.setState({Sexo: value});
                      }}>
                      <Picker.Item label="Masculino" value="1" />
                      <Picker.Item label="Feminino" value="2" />
                    </Picker>
                  </View>
                )}

                <View style={styles.boxInput}>
                  <Icon name="phone-square" style={styles.icons} />
                  <TextInputMask
                    style={styles.camposInput}
                    type={'cel-phone'}
                    placeholder="telefone residencial"
                    placeholderTextColor={colors.gray}
                    value={this.state.Telefone}
                    onChangeText={(Telefone) => this.setState({Telefone})}
                  />
                </View>

                <View style={styles.boxInput}>
                  <Icon name="mobile" size={20} style={styles.icons} />
                  <TextInputMask
                    style={styles.camposInput}
                    type={'cel-phone'}
                    placeholder="celular"
                    placeholderTextColor={colors.gray}
                    value={this.state.Celular}
                    onChangeText={(Celular) => this.setState({Celular})}
                  />
                </View>
              </View>
            </View>

            <View style={stylesEndereco.containerPerfil}>
              <View style={stylesEndereco.icone}>
                <Icon
                  name="map-marker"
                  size={18}
                  style={[styles.icons, {marginTop: 12}]}
                />
              </View>
              <View style={stylesEndereco.form}>
                <Text style={styles.titleArea}>ENDEREÇO</Text>

                <View style={styles.boxEndereco}>
                  <TextInputMask
                    style={stylesEndereco.camposInput}
                    type={'zip-code'}
                    placeholder="cep"
                    placeholderTextColor={colors.gray}
                    options={{format: '99.999-999'}}
                    value={this.state.EnderecoCEP}
                    onChangeText={this.searchCep.bind(this)}
                  />
                </View>

                <View style={styles.boxEnderecoInferior}>
                  <TextInput
                    style={stylesEndereco.camposInput}
                    placeholder="logadouro"
                    placeholderTextColor={colors.gray}
                    value={this.state.EnderecoLogradouro}
                    onChangeText={(EnderecoLogradouro) =>
                      this.setState({EnderecoLogradouro})
                    }
                  />
                </View>

                <View style={styles.boxEnderecoInferior}>
                  <TextInput
                    style={stylesEndereco.camposInput}
                    placeholder="número"
                    placeholderTextColor={colors.gray}
                    value={this.state.EnderecoNumero}
                    onChangeText={(EnderecoNumero) =>
                      this.setState({EnderecoNumero})
                    }
                  />
                </View>

                <View style={styles.boxEnderecoInferior}>
                  <TextInput
                    style={stylesEndereco.camposInput}
                    placeholder="complemento"
                    placeholderTextColor={colors.gray}
                    value={this.state.EnderecoComplemento}
                    onChangeText={(EnderecoComplemento) =>
                      this.setState({EnderecoComplemento})
                    }
                  />
                </View>

                <View style={styles.boxEnderecoInferior}>
                  <TextInput
                    style={stylesEndereco.camposInput}
                    placeholder="bairro"
                    placeholderTextColor={colors.gray}
                    value={this.state.EnderecoBairro}
                    onChangeText={(EnderecoBairro) =>
                      this.setState({EnderecoBairro})
                    }
                  />
                </View>

                <View style={styles.boxEnderecoInferior}>
                  <TextInput
                    style={stylesEndereco.camposInput}
                    placeholder="cidade"
                    placeholderTextColor={colors.gray}
                    value={this.state.EnderecoCidade}
                    onChangeText={(EnderecoCidade) =>
                      this.setState({EnderecoCidade})
                    }
                  />
                </View>
                <View style={styles.boxEnderecoInferior}>
                  <TextInput
                    style={stylesEndereco.camposInput}
                    placeholder="estado"
                    placeholderTextColor={colors.gray}
                    value={this.state.EnderecoEstado}
                    onChangeText={(EnderecoEstado) =>
                      this.setState({EnderecoEstado})
                    }
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <ButtonDefault
                  label={`SALVAR`}
                  style={styles.buttonEntrar}
                  txtStyle={styles.txtButton}
                  onPress={() => {
                    this.onAtualizar();
                  }}
                />
              </View>
            </View>

            <Alerts
              visible={this.props.atualizar.alert}
              icon={this.props.atualizar.error ? 'times' : 'check'}
              mensagem={
                this.props.atualizar.error
                  ? this.props.atualizar.error
                  : this.props.atualizar.data.message
                  ? this.props.atualizar.data.message.toUpperCase()
                  : 'DADOS SALVOS COM SUCESSO!'
              }
              closeAction={() => {
                this.props.doAtualizaCloseModal();
                this.props.navigation.goBack();
              }}
            />
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  associado: state.associado,
  atualizar: state.atualizar,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...AssociadosActions,
      ...AtualizarActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(meuPerfilDadosPessoais);
