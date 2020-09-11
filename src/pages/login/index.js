import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  BackHandler,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import {connect} from 'react-redux';
import {Creators as LoginActions} from '../../store/ducks/login';
import Alert from '../../components/Alert';

import {bindActionCreators} from 'redux';
import {facebookLogin} from '../../services/auth';
import styles from './styles';
import Loader from '../../components/loading';

import {withNavigationFocus} from 'react-navigation';
import metrics from '../../styles/metrics';
import ButtonDefault from '../../components/ButtonDefault';
import colors from '../../styles/colors';
import images from '../../styles/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function senha () => {
//   const [seePassword, setSeePassword] = useState(true);
// };

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      // email: 'paolla.coutinho@am4.com.br',
      // password: 'teste123',
      error: '',
      modalVisible: false,
      EmailNaoPreenchido: false,
      semconexao: false,
      seePassword: true,
    };
    // NetInfo.getConnectionInfo().then((connectionInfo) => {
    //   //console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);

    //   if (connectionInfo.type == 'none') {
    //     this.setState({
    //       semconexao: true,
    //     });
    //   }
    // });
  }

  handleLoginWithFacebook = async () => {
    // const { getLoginFBRequest } = this.props;
    console.log('clic');
    const response = await facebookLogin();
    if (response.error) {
      this.setState({error: response.error});
      return false;
    }
    console.log(response, 'INFOS FACE');
    this.props.getLoginFBRequest(response);
  };

  validation = () => {
    if (this.state.email == '' && this.state.password == '') {
      return this.setState({
        EmailNaoPreenchido: true,
      });
    }
    return true;
  };

  handleLogin = async () => {
    let mensagem = this.validation();
    if (this.state.semconexao == true) {
      this.props.navigation.navigate('semInternet');
    } else if (mensagem == true && this.state.semconexao == false) {
      this.props.getLoginRequest(this.state);
    }
  };

  handleBackButton() {
    return true;
  }

  fecharModal() {
    this.props.closeModal();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    //const [seePassword, setSeePassword] = this.props;
    const {navigation, login, isFocused} = this.props;
    //const [seePassword, setSeePassword] = useState(true);
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    } else {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButton,
      );
    }

    return (
      <View>
        <Alert
          visible={this.state.EmailNaoPreenchido}
          icon="exclamation"
          mensagem={'VOCÊ PRECISA INFORMAR SEU \nE-MAIL E SENHA.'}
          closeAction={() =>
            this.setState({
              EmailNaoPreenchido: false,
            })
          }
        />

        <Alert
          visible={this.props.login.error}
          icon="exclamation"
          mensagem={this.props.login.error_message.toUpperCase()}
          closeAction={() => this.fecharModal()}
        />

        <KeyboardAwareScrollView bounces={ifIphoneX(false)}>
          <ImageBackground
            source={images.bgComponentAlert}
            style={styles.imgBackground}>
            <View style={styles.container}>
              <Loader loading={this.props.login.loading} />

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                  flexGrow: 0.2,
                }}>
                <Image source={images.logo} style={styles.logo} />
              </View>

              <View style={{width: '80%', alignSelf: 'center'}}>
                <ButtonDefault
                  icon={true}
                  icone={'facebook-f'}
                  iconeStyle={styles.iconFacebook}
                  label={'ENTRAR COM FACEBOOK'}
                  style={styles.buttonFacebook}
                  txtStyle={styles.txtFacebook}
                  onPress={this.handleLoginWithFacebook}
                />

                <View style={styles.containerOu}>
                  <Text style={styles.textoOu}> OU </Text>
                </View>

                <View stysle={{width: '100%'}}>
                  <TextInput
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      this.ipt_password.focus();
                    }}
                    style={styles.camposInput}
                    value={this.state.email}
                    placeholder="e-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    placeholderTextColor={colors.login.input}
                    onChangeText={(email) => this.setState({email})}
                  />
                </View>

                <View style={[{width: '100%'}, {flexDirection: 'row'}]}>
                  <TextInput
                    ref={(input) => {
                      this.ipt_password = input;
                    }}
                    returnKeyType="go"
                    textContentType="password"
                    onSubmitEditing={() => this.handleLogin()}
                    secureTextEntry={this.state.seePassword}
                    style={styles.camposInput}
                    placeholder="senha"
                    autoCapitalize="none"
                    returnKeyLabel={'next'}
                    autoCorrect={false}
                    value={this.state.password}
                    placeholderTextColor={colors.login.input}
                    onChangeText={(password) => this.setState({password})}
                  />

                  <TouchableOpacity
                    style={{maxWidth: 50}}
                    onPress={() => {
                      if (this.state.seePassword) {
                        this.setState({seePassword: false});
                      } else {
                        this.setState({seePassword: true});
                      }
                    }}>
                    <Icon
                      name={this.state.seePassword ? 'eye' : 'eye-off'}
                      size={20}
                      color="#FFFFFF"
                      style={{position: 'relative', top: 15, right: 30}}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <Text
                  style={styles.txtEsquecisenha}
                  onPress={() => {
                    navigation.navigate('esqueciSenha');
                  }}>
                  ESQUECI MINHA SENHA
                </Text>
                <View style={{}}>
                  <ButtonDefault
                    label={'ENTRAR'}
                    style={styles.buttonEntrar}
                    onPress={this.handleLogin}
                  />
                </View>
                {/* <ButtonDefault
                  icon={true}
                  icone={`facebook-f`}
                  iconeStyle={styles.iconFacebook}
                  label={`ENTRAR COM FACEBOOK`}
                  style={styles.buttonFacebook}
                  txtStyle={styles.txtFacebook}
                  onPress={this.handleLoginWithFacebook}
                /> */}
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.footer, ifIphoneX(styles.footerIphoneX)]}
                onPress={() => {
                  navigation.navigate('cadastro');
                }}>
                <Text style={styles.txtFooter}>
                  NÃO POSSUI UMA CONTA?
                  <Text style={styles.boldTextStyle}> CADASTRE-SE!</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(Login));
