import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  Text,
  Image,
  ImageBackground,
  PermissionsAndroid,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Alerts from '../../components/Alert';

import Loading from '../../components/loading';

import {facebookLogin} from '../../services/auth';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as AtualizarActions} from '../../store/ducks/atualizar';
import general from '../../config/general';

import ImagePicker from 'react-native-image-picker';
import {NavigationActions, StackActions} from 'react-navigation';
import Alert from '../../components/Alert';
import ButtonDefault from '../../components/ButtonDefault';
import images from '../../styles/images';

const resetAction = StackActions.reset({
  index: 0,
  key: null, // <-- this
  actions: [NavigationActions.navigate({routeName: 'MainRoute'})],
});

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

class meuPefil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      modalVisibleAlert: false,
      dataformatada: null,
      photo: null,
      namephoto: '',
      token: null,
      isDadosUpdate: false,
    };
  }

  handleConectFacebook = async () => {
    const response = await facebookLogin();
    if (response.error) {
      this.setState({error: response.error});
      //console.log(response.error);
      return false;
    }
    //console.log(response, 'INFOS FACE');
    let token = await AsyncStorage.getItem('UserData');
    let params = {
      token: token,
      IdFacebook: response.user.id,
    };

    this.props.getVincularRequest(params);
  };

  getCamera = async () => {
    this.requestGaleriaPermission();
    let token = await AsyncStorage.getItem('UserData');
    let dadosupdate = await AsyncStorage.getItem('IsDadosUpdate');
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response, 'PHOTO RESPONSE');

        const source = {uri: response.path};

        if (Platform.OS == 'ios') {
          let uri = response.uri;
          var obj = {
            photo: uri,
            namephoto: uri.substring(uri.lastIndexOf('/') + 1),
            token: token,
          };

          this.setState(obj);
          this.props.getAtualizaFotoRequest(obj);
        } else {
          this.setState(
            {
              photo: response.path,
              namephoto: response.fileName,
              token: token,
            },
            () => {
              this.props.getAtualizaFotoRequest(this.state);
            },
          );
        }

        //console.log(this.state, 'ESTADOSSS')

        this.setState({
          isDadosUpdate: dadosupdate,
        });
      }
    });
  };

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    // let dadosupdate = await AsyncStorage.getItem("IsDadosUpdate");
    this.props.getAssociadoRequest(token);
    this.requestGaleriaPermission();
  };

  requestGaleriaPermission = async () => {
    this.setState({
      loading: false,
    });
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App READ_EXTERNAL_STORAGE Permission',
          message:
            'Cool Photo App needs access to your READ_EXTERNAL_STORAGE ' +
            'so you can take awesome pictures.',
        },
      );
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'Cool Photo App CAMERA Permission',
        message:
          'Cool Photo App needs access to your CAMERA ' +
          'so you can take awesome pictures.',
      });
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App WRITE_EXTERNAL_STORAGE Permission',
          message:
            'Cool Photo App needs access to your WRITE_EXTERNAL_STORAGE ' +
            'so you can take awesome pictures.',
        },
      );
    } catch (err) {
      console.warn(err);
    }
  };

  setModalVisibleAlert(visible) {
    this.setState({modalVisibleAlert: visible});
  }

  getExcluir = async () => {
    let token = await AsyncStorage.getItem('UserData');
    let params = {
      token: token,
      CPF: this.props.associado.data.CPF,
      // Senha: this.props.associado.data.CPF,
    };
    this.setModalVisibleAlert(false);
    this.props.getExcluirRequest(params);
  };

  vincularFB = async () => {
    const response = await facebookLogin();
    if (response.error) {
      this.setState({error: response.error});
      //console.log(response.error);
      return false;
    }
    //console.log(response, 'INFOS FACE');
    let token = await AsyncStorage.getItem('UserData');
    let params = {
      token: token,
      IdFacebook: response.user.id,
    };

    this.props.getVincularRequest(params);
  };

  render() {
    const {navigation} = this.props;

    var enderecoCompleto =
      this.props.associado.data.EnderecoBairro ||
      this.props.associado.data.EnderecoCidade ||
      this.props.associado.data.EnderecoEstado;

    return (
      <ScrollView bounces={false}>
        <Loading loading={this.props.atualizar.loading} />
        <Alert
          visible={
            this.props.atualizar.alert &&
            this.props.atualizar.success &&
            this.props.atualizar.facebookAction
          }
          icon="check"
          mensagem="Facebook vinculado com sucesso!"
          closeAction={() => this.props.doAtualizaCloseModal()}
        />

        <Alert
          visible={
            this.props.atualizar.alert &&
            !this.props.atualizar.success &&
            this.props.atualizar.facebookAction
          }
          icon="check"
          mensagem="Erro ao vincular o Facebook"
          closeAction={() => this.props.doAtualizaCloseModal()}
        />

        <View style={styles.bgBranco}>
          <Text
            style={styles.txtBack}
            onPress={() => this.props.navigation.dispatch(resetAction)}>
            <Icon name="arrow-left" size={20} style={styles.iconBack} />
          </Text>
          <View>
            <ImageBackground
              style={styles.headerUsuario}
              resizeMode="cover"
              source={images.meuPerfil.backgroundTopo}></ImageBackground>
          </View>
          <View style={styles.containerImgUsuario}>
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
                  uri: general.imagemPerfil + this.props.associado.data.Foto,
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
              style={styles.btnImagem}
              onPress={() => {
                this.getCamera();
              }}>
              <Icon name="plus" style={styles.icoImagem} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerImgUsuarioBorda}></View>

          {this.props.associado.data.CadastroCompleto == true ? null : (
            <View style={styles.alertDados}>
              <View style={styles.arrowTop} />
              <Text style={styles.titleDados}>GANHE PONTOS</Text>
              <Text style={styles.desdDados}>
                Complete seu cadastro e receba pontos extras.
              </Text>
            </View>
          )}

          <View style={styles.itens}>
            <View style={styles.item}>
              <View style={styles.vIcon}>
                <Icon name="user" style={styles.icon} />
              </View>
              <View style={styles.vItem}>
                <Text style={styles.titleItem}>Nome</Text>
                <Text style={styles.valItem}>
                  {this.props.associado.data.Nome}{' '}
                  {this.props.associado.data.Sobrenome}
                </Text>
              </View>
            </View>
            {this.props.associado.data.DataNascimentoFormatada ? (
              <View style={styles.item}>
                <View style={styles.vIcon}>
                  <Icon name="birthday-cake" style={styles.icon} />
                </View>
                <View style={styles.vItem}>
                  <Text style={styles.titleItem}>Data de nascimento</Text>
                  <Text style={styles.valItem}>
                    {this.props.associado.data.DataNascimentoFormatada}
                  </Text>
                </View>
              </View>
            ) : null}
            <View style={styles.item}>
              <View style={styles.vIcon}>
                <Icon name="envelope" style={styles.icon} />
              </View>
              <View style={styles.vItem}>
                <Text style={styles.titleItem}>E-mail</Text>
                <Text style={styles.valItem}>
                  {this.props.associado.data.Email}
                </Text>
              </View>
            </View>
            {this.props.associado.data.EmailAdicional ? (
              <View style={styles.item}>
                <View style={styles.vIcon}>
                  <Icon name="envelope" style={styles.icon} />
                </View>
                <View style={styles.vItem}>
                  <Text style={styles.titleItem}>E-mail Adicional</Text>
                  <Text style={styles.valItem}>
                    {this.props.associado.data.EmailAdicional}
                  </Text>
                </View>
              </View>
            ) : null}
            <View style={styles.item}>
              <View style={styles.vIcon}>
                <Icon name="address-card" style={styles.icon} />
              </View>
              <View style={styles.vItem}>
                <Text style={styles.titleItem}>CPF</Text>
                <Text style={styles.valItem}>
                  {this.props.associado.data.CPF}
                </Text>
              </View>
            </View>
            {this.props.associado.data.Telefone ? (
              <View style={styles.item}>
                <View style={styles.vIcon}>
                  <Icon name="phone" style={styles.icon} />
                </View>

                <View style={styles.vItem}>
                  <Text style={styles.titleItem}>Telefone residencial</Text>
                  <Text style={styles.valItem}>
                    {this.props.associado.data.Telefone}
                  </Text>
                </View>
              </View>
            ) : null}
            {this.props.associado.data.Celular ? (
              <View style={styles.item}>
                <View style={styles.vIcon}>
                  <Icon name="mobile" style={styles.iconCel} />
                </View>
                <View style={styles.vItem}>
                  <Text style={styles.titleItem}>Celular</Text>
                  <Text style={styles.valItem}>
                    {this.props.associado.data.Celular}
                  </Text>
                </View>
              </View>
            ) : null}
            {this.props.associado.data.TelefoneComercial ? (
              <View style={styles.item}>
                <View style={styles.vIcon}>
                  <Icon name="phone-square" style={styles.icon} />
                </View>
                <View style={styles.vItem}>
                  <Text style={styles.titleItem}>Telefone comercial</Text>
                  <Text style={styles.valItem}>
                    {this.props.associado.data.TelefoneComercial}
                  </Text>
                </View>
              </View>
            ) : null}
            {this.props.associado.data.Sexo ? (
              <View style={styles.item}>
                <View style={styles.vIcon}>
                  <Icon name="mars-double" style={styles.icon} />
                </View>
                <View style={styles.vItem}>
                  <Text style={styles.titleItem}>Sexo</Text>
                  {this.props.associado.data.Sexo == 2 ? (
                    <Text style={styles.valItem}>Feminino</Text>
                  ) : null}
                  {this.props.associado.data.Sexo == 1 ? (
                    <Text style={styles.valItem}>Masculino</Text>
                  ) : null}
                </View>
              </View>
            ) : null}
            {this.props.associado.data.EnderecoCEP ? (
              <View style={styles.item}>
                <View style={styles.vIcon}>
                  <Icon name="map-marker" style={styles.icon} />
                </View>
                <View style={styles.vItem}>
                  <Text style={styles.titleItem}>Endereço</Text>
                  {this.props.associado.data.EnderecoCEP ? (
                    <Text style={styles.valItem}>
                      {this.props.associado.data.EnderecoCEP}
                    </Text>
                  ) : null}
                  {this.props.associado.data.EnderecoLogradouro &&
                  this.props.associado.data.EnderecoNumero ? (
                    <Text style={styles.valItem}>
                      {this.props.associado.data.EnderecoLogradouro} -{' '}
                      {this.props.associado.data.EnderecoNumero}
                    </Text>
                  ) : this.props.associado.data.EnderecoLogradouro ? (
                    <Text style={styles.valItem}>
                      {this.props.associado.data.EnderecoLogradouro}
                    </Text>
                  ) : null}
                  {enderecoCompleto ? (
                    <Text style={styles.valItem}>
                      {this.props.associado.data.EnderecoComplemento
                        ? this.props.associado.data.EnderecoComplemento + ', '
                        : null}
                      {this.props.associado.data.EnderecoBairro
                        ? this.props.associado.data.EnderecoBairro + ', '
                        : null}
                      {this.props.associado.data.EnderecoCidade
                        ? this.props.associado.data.EnderecoCidade + ' / '
                        : null}
                      {this.props.associado.data.EnderecoEstado
                        ? this.props.associado.data.EnderecoEstado
                        : null}
                    </Text>
                  ) : null}
                </View>
              </View>
            ) : null}
          </View>

          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.buttonRedeS}
                                onPress={() => { this.vincularFB() }}>
                                <Text style={styles.txtButtonFb}> CONECTE SEU PERFIL COM O </Text>
                                <Image
                                    source={require('../../assets/icon-facebook-cinza.png')}
                                    style={styles.logofb}
                                />
                            </TouchableOpacity> */}

            <ButtonDefault
              icon={true}
              icone={`facebook-f`}
              iconeStyle={styles.iconFacebook}
              label={`CONECTAR COM FACEBOOK`}
              style={styles.buttonFacebook}
              txtStyle={styles.txtFacebook}
              onPress={this.handleConectFacebook}
            />

            <ButtonDefault
              label={`ALTERAR DADOS`}
              style={styles.buttonAlterarDados}
              txtStyle={styles.txtButton}
              onPress={() => {
                navigation.push('meuPerfilDadosPessoais');
              }}
            />

            <ButtonDefault
              label={`ALTERAR SENHA`}
              style={styles.buttonSenha}
              txtStyle={styles.txtButton}
              onPress={() => {
                navigation.push('meuPerfilSenha');
              }}
            />

            {/* <TouchableOpacity activeOpacity={0.8} style={styles.buttonDados}
                                onPress={() => {
                                    navigation.push('meuPerfilDadosPessoais')
                                }}>
                                <Text style={styles.txtButton}> ALTERAR DADOS </Text>
                            </TouchableOpacity> */}
            {/* <TouchableOpacity activeOpacity={0.8} style={styles.buttonAlterar}
                                onPress={() => {
                                    navigation.push('meuPerfilSenha')
                                }}>
                                <Text style={styles.txtButton}> ALTERAR SENHA </Text>
                            </TouchableOpacity> */}
          </View>

          <Text
            style={styles.txtCancel}
            onPress={() => {
              this.setModalVisibleAlert(true);
            }}>
            {`Deseja cancelar sua conta? `}
            <Text style={styles.bold}>Clique aqui.</Text>
          </Text>
        </View>

        <Alerts
          visible={this.state.modalVisibleAlert}
          icon="times"
          mensagem="EXCLUIR CADASTRO?"
          descricao="Ao deixar de fazer parte do programa todos os seus pontos serão excluídos e você perderá todas as vantagens que o programa oferece. Não será possível retornar com sua conta posteriormente. Deseja confirmar?"
          buttonsDirections="row"
          buttons={[
            {
              style: styles.btnNo,
              btnLabel: 'NÃO',
              acao: () => {
                this.setState({modalVisibleAlert: false});
              },
            },
            {
              style: styles.btnYes,
              btnLabel: 'SIM',
              acao: () => {
                this.getExcluir();
              },
            },
          ]}
          closeAction={() => {
            this.setState({modalVisibleAlert: false});
          }}
        />
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(meuPefil);
