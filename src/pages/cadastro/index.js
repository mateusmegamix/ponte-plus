import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Modal,
  ImageBackground,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Alerts from '../../components/Alert';
import images from '../../styles/images';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CadastroActions} from '../../store/ducks/cadastro';

import Icon from 'react-native-vector-icons/FontAwesome';
import {facebookLogin} from '../../services/auth';
import styles from './style';
import Loader from '../../components/loading';
import colors from '../../styles/colors';

import general from '../../config/general';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import ButtonDefault from '../../components/ButtonDefault';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      Sobrenome: '',
      Email: '',
      CPF: '',
      IdFacebook: null,
      DataNascimento: '',
      Celular: '',
      Senha: '',
      ConfirmarSenha: '',
      AceitoConfirmacao: false,
      error: '',
      mensagem: '',
      modalmensagem: false,
      modalVisibleAlert: false,
      modalApi: false,
      modalCadastroExistente: false,
      error: '',
      semconexao: false,
    };
    // NetInfo.getConnectionInfo().then((connectionInfo) => {
    //     //console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    //     if (connectionInfo.type == 'none') {
    //         this.setState({
    //             semconexao: true
    //         })
    //     }
    //     if (this.state.semconexao == true) {
    //         this.props.navigation.navigate('semInternet')
    //     }
    // });
  }

  handleLoginWithFacebook = async () => {
    // const { getLoginFBRequest } = this.props;
    const response = await facebookLogin();
    if (response.error) {
      this.setState({error: response.error});
      //console.log(response.error);
      return false;
    }
    //console.log(response, 'INFOS FACE');
    this.setState({
      Nome: response.user.first_name,
      Sobrenome: response.user.last_name,
      Email: response.user.email,
      IdFacebook: response.user.id,
      // Senha: response.accessToken,
      // ConfirmarSenha: response.accessToken,
    });
    //console.log(this.state)
    // this.props.getLoginFBRequest(response);
  };

  async componentWillReceiveProps(props) {
    //console.log(props.cadastro.error, 'MENSAGEMERROR' )
    if (
      props.cadastro.error.Message ==
      'O E-mail informado já está sendo utilizado em outro cadastro.'
    )
      this.setState({
        modalCadastroExistente: true,
      });
    else if (
      props.cadastro.error.Message.indexOf(
        'Já existe um cadastro com seu E-mail/CPF',
      ) !== -1
    )
      this.setState({
        modalCadastroExistente: true,
      });
    else if (props.cadastro.data)
      this.props.navigation.navigate('cadastroConfirmacao', {
        data: props.cadastro.data,
      });
    else {
      this.setState({
        modalApi: true,
      });
    }
  }

  componentDidMount = () => {
    if (this.props.navigation.state.params == undefined) {
      this.setState({
        Nome: '',
        Sobrenome: '',
        Email: '',
        CPF: '',
        IdFacebook: null,
        DataNascimento: '',
        Celular: '',
        Senha: '',
        ConfirmarSenha: '',
      });
    } else {
      const {fbdata} = this.props.navigation.state.params;
      this.setState({
        Nome: fbdata.user.first_name,
        Sobrenome: fbdata.user.last_name,
        Email: fbdata.user.email,
        IdFacebook: fbdata.user.id,
      });
    }
  };

  validation = () => {
    if (
      !this.state.Nome &&
      !this.state.Sobrenome &&
      !this.state.Email &&
      !this.state.CPF &&
      !this.state.DataNascimento &&
      !this.state.Celular &&
      !this.state.Senha &&
      !this.state.ConfirmarSenha
    ) {
      return this.setModalVisibleAlert(true);
    } else if (!this.state.Nome) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA SEU NOME',
      });
    } else if (!this.state.Sobrenome) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA SEU SOBRENOME',
      });
    } else if (!this.state.Email) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA SEU E-MAIL',
      });
    } else if (!this.state.CPF) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA SEU CPF',
      });
    } else if (!this.state.DataNascimento) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA SUA DATA DE NASCIMENTO',
      });
    } else if (!this.state.Celular) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA SEU CELULAR',
      });
    } else if (!this.state.Senha) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA SUA SENHA',
      });
    } else if (!this.state.ConfirmarSenha) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'PREENCHA O CONFIRMAR SENHA',
      });
    } else if (this.state.Senha != this.state.ConfirmarSenha) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'OS CAMPOS DE SENHA E CONFIRMAR SENHA PRECISAM SER IGUAIS',
      });
    } else if (!this.state.AceitoConfirmacao) {
      return this.setState({
        modalmensagem: true,
        mensagem: 'É NECESSÁRIO ACEITAR OS TERMOS DO PROGRAMA.',
      });
    }
    return true;
  };

  submitCadastro = () => {
    let mensagem = this.validation();
    if (mensagem == true) {
      var data = JSON.parse(JSON.stringify(this.state));
      var moment = require('moment');
      var date = moment(this.state.DataNascimento, 'DD/MM/YYYY').format(
        'MM/DD/YYYY',
      );
      data.DataNascimento = date;
      this.props.getCadastroRequest(data);
    } else {
    }
  };

  setModalVisibleAlert(visible) {
    this.setState({modalVisibleAlert: visible});
  }

  render() {
    const {navigation} = this.props;
    const {goBack} = this.props.navigation;
    return (
      <View>
        <Alerts
          visible={this.state.modalmensagem}
          mensagem={this.state.mensagem}
          closeAction={() => this.setState({modalmensagem: false})}
        />

        <Alerts
          visible={this.state.modalVisibleAlert}
          mensagem={'PREENCHA TODOS OS CAMPOS PARA EFETUAR O CADASTRO!'}
          closeAction={() => this.setModalVisibleAlert(false)}
        />

        <Alerts
          visible={this.state.modalApi}
          mensagem={`PROBLEMA ENCONTRADO`}
          descricao={this.props.cadastro.error.Message + ''}
          closeAction={() =>
            this.setState({
              modalApi: false,
            })
          }
        />

        <Alerts
          icon="exclamation"
          visible={this.state.modalCadastroExistente}
          mensagemStyle={styles.txtAlertCont}
          mensagem={`JÁ EXISTE UM CADASTRO COM\nESSE E-MAIL OU CPF.`}
          descricao={'Faça seu login ou resete sua senha.'}
          buttons={[
            {
              btnLabel: 'LOGIN',
              acao: () => {
                this.setState({
                  modalCadastroExistente: false,
                }),
                  this.props.navigation.navigate('Login');
              },
            },
            {
              btnLabel: 'ESQUECI A SENHA',
              style: styles.btnEsqueciSenha,
              styleBtn: styles.txtEsqueciSenha,
              acao: () => {
                this.setState({
                  modalCadastroExistente: false,
                });
                this.props.navigation.navigate('esqueciSenha');
              },
            },
          ]}
          closeAction={() => {
            this.setState({
              modalCadastroExistente: false,
            });
          }}
        />

        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Loader loading={this.props.cadastro.loading} />
            <Image source={images.logo2} style={styles.logo} />

            <Text style={styles.txtEsquecisenha}>CADASTRE-SE!</Text>

            <Text style={styles.txtDescricao}>
              Informe os dados abaixo e tenha acesso aos conteúdos exclusivos do{' '}
              <Text style={{fontWeight: 'bold'}}>Ponte Plus</Text>.
            </Text>
            <Text style={styles.txtDescricao}>
              Todos os campos são obrigatórios.
            </Text>

            <View style={[styles.containerInput, {marginTop: 40}]}>
              <Icon name="user" style={styles.iconInput} />
              <TextInput
                style={styles.camposInput}
                autoCorrect={false}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  this.ipt_sobrenome.focus();
                }}
                placeholder="nome"
                placeholderTextColor={colors.cadastro.input}
                onChangeText={(key) => {
                  this.setState({Nome: key});
                }}
                value={this.state.Nome}
              />
            </View>

            <View style={styles.containerInput}>
              <Icon name="user" style={styles.iconInput} />
              <TextInput
                style={styles.camposInput}
                placeholder="sobrenome"
                ref={(input) => {
                  this.ipt_sobrenome = input;
                }}
                onSubmitEditing={() => {
                  this.ipt_email.focus();
                }}
                autoCorrect={false}
                returnKeyType={'next'}
                placeholderTextColor={colors.cadastro.input}
                onChangeText={(key) => {
                  this.setState({Sobrenome: key});
                }}
                value={this.state.Sobrenome}
              />
            </View>

            <View style={styles.containerInput}>
              <Icon name="envelope" style={styles.iconInput} />
              <TextInput
                style={styles.camposInput}
                placeholder="e-mail"
                onSubmitEditing={() => {
                  this.ipt_cpf.getElement().focus();
                }}
                ref={(input) => {
                  this.ipt_email = input;
                }}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
                placeholderTextColor={colors.cadastro.input}
                onChangeText={(key) => {
                  this.setState({Email: key});
                }}
                value={this.state.Email}
              />
            </View>

            <View style={styles.containerInput}>
              <Icon name="address-card" style={styles.iconInput} />
              <TextInputMask
                style={styles.camposInput}
                placeholder="CPF"
                ref={(input) => {
                  this.ipt_cpf = input;
                }}
                onSubmitEditing={() => {
                  this.ipt_dtnasc.getElement().focus();
                }}
                placeholderTextColor={colors.cadastro.input}
                maxLength={14}
                underlineColorAndroid="transparent"
                value={this.state.CPF}
                onChangeText={(key) => this.setState({CPF: key})}
                type={'cpf'}
                options={{
                  format: '999.999.999-99',
                }}
              />
            </View>

            <View style={styles.containerInput}>
              <Icon name="birthday-cake" style={styles.iconInput} />
              <TextInputMask
                style={styles.camposInput}
                placeholder="data de nascimento"
                ref={(input) => {
                  this.ipt_dtnasc = input;
                }}
                onSubmitEditing={() => {
                  this.ipt_celular.getElement().focus();
                }}
                placeholderTextColor={colors.cadastro.input}
                maxLength={14}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
                underlineColorAndroid="transparent"
                value={this.state.DataNascimento}
                onChangeText={(key) => this.setState({DataNascimento: key})}
                type={'datetime'}
                options={{
                  format: ' DD/MM/YYYY',
                }}
              />
            </View>

            <View style={styles.containerInput}>
              <Icon name="mobile" size={20} style={styles.iconInput} />
              <TextInputMask
                style={styles.camposInput}
                placeholder="celular"
                ref={(input) => {
                  this.ipt_celular = input;
                }}
                onSubmitEditing={() => {
                  this.ipt_senha.focus();
                }}
                placeholderTextColor={colors.cadastro.input}
                maxLength={15}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
                underlineColorAndroid="transparent"
                value={this.state.Celular}
                onChangeText={(key) => this.setState({Celular: key})}
                type={'cel-phone'}
                options={{
                  format: '(99)99999-9999',
                }}
              />
            </View>

            <View style={styles.containerInput}>
              <Icon name="lock" style={styles.iconInput} />
              <TextInput
                style={styles.camposInput}
                textContentType="password"
                placeholder="senha"
                ref={(input) => {
                  this.ipt_senha = input;
                }}
                onSubmitEditing={() => {
                  this.ipt_senhaconfirmar.focus();
                }}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
                placeholderTextColor={colors.cadastro.input}
                onChangeText={(key) => {
                  this.setState({Senha: key});
                }}
                value={this.state.Senha}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.containerInput}>
              <Icon name="unlock" style={styles.iconInput} />
              <TextInput
                style={styles.camposInput}
                textContentType="password"
                placeholder="confirmar senha"
                ref={(input) => {
                  this.ipt_senhaconfirmar = input;
                }}
                placeholderTextColor={colors.cadastro.input}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
                onChangeText={(key) => {
                  this.setState({ConfirmarSenha: key});
                }}
                value={this.state.ConfirmarSenha}
                secureTextEntry={true}
              />
            </View>

            <Text style={styles.txtAceitarTemos}>TERMO DE USO</Text>

            <View style={styles.checkContainer}>
              <CheckBox
                uncheckedCheckBoxColor={colors.gray}
                checkedCheckBoxColor={colors.cadastro.checkbox}
                isChecked={this.state.AceitoConfirmacao}
                onClick={() =>
                  this.setState({
                    AceitoConfirmacao: !this.state.AceitoConfirmacao,
                  })
                }
              />
              <Text
                style={styles.txtCheckBox}
                onPress={() => {
                  this.setState({
                    AceitoConfirmacao: !this.state.AceitoConfirmacao,
                  });
                }}>
                <Text style={styles.boldTextStyle}>Li</Text> e{' '}
                <Text style={styles.boldTextStyle}>aceito</Text> {`os `}
                <Text
                  onPress={() => {
                    navigation.navigate('termosUso');
                  }}
                  style={styles.sublinhado}>
                  termos de uso
                </Text>
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <ButtonDefault
                label={`CADASTRAR`}
                style={{marginBottom: 15}}
                onPress={() => {
                  this.submitCadastro();
                }}
              />

              <ButtonDefault
                icon={true}
                icone={`facebook-f`}
                iconeStyle={styles.iconFacebook}
                label={`ENTRAR COM FACEBOOK`}
                style={styles.buttonFacebook}
                txtStyle={styles.txtFacebook}
                onPress={this.handleLoginWithFacebook}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.footer}
              onPress={() => goBack()}>
              <Text style={styles.txtFooter}>
                VOLTAR A TELA DE
                <Text style={styles.boldTextStyle}> LOGIN</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cadastro: state.cadastro,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CadastroActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
