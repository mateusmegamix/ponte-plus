
import React from 'react';
import { TouchableOpacity, Platform, Text, View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import images from '../../styles/images';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Alert from '../../components/Alert';
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ForgotActions } from '../../store/ducks/forgot';

import Loader from '../../components/loading';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import ButtonDefault from '../../components/ButtonDefault';
import colors from '../../styles/colors';

class esqueciSenha extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      Email: '',
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  validation = () => {
    if (!this.state.Email) {
      return false;
    }
    return true
  }

  submitForgot = () => {
    let mensagem = this.validation()
    if (mensagem == true) {
      this.props.getForgotRequest(this.state);
    } else {
      this.setModalVisible(true);
    }
  }

  render() {
    console.log(this.props.forgot, "forgot props")

    const { goBack } = this.props.navigation;
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Loader
            loading={this.props.forgot.loading}
          />
          <Image
            source={images.logo2}
            style={styles.logo} />

          <Text style={styles.txtEsquecisenha}>ESQUECI MINHA SENHA</Text>

          <Text style={styles.txtDescricao}>Digite o e-mail cadastrado. Você receberá um link para redefinir sua senha.</Text>

          <View style={{ width: '85%', marginTop: Platform.OS == 'ios' ? 30 : 10, ...ifIphoneX({ marginTop: -25, }) }}>
            <TextInput
              style={styles.camposInput}
              returnKeyType="go"
              onSubmitEditing={() => this.submitForgot()}
              autoCapitalize="none"
              placeholder="e-mail"
              placeholderTextColor={colors.esqueciSenha.input}
              onChangeText={key => { this.setState({ Email: key }) }}
              value={this.state.Email}
            />
          </View>

          <View style={styles.buttonContainer}>
            <ButtonDefault
              label={`ENVIAR E-MAIL`}
              style={styles.buttonEntrar}
              onPress={() => { this.submitForgot() }}
            />
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.footer} onPress={() => goBack()}>
            <Icon name="arrow-left" size={20} color={colors.esqueciSenha.btnVoltar} />
          </TouchableOpacity>

          <Alert
            visible={this.state.modalVisible}
            icon="exclamation"
            mensagem={Platform.OS == 'ios' ? 'VOCÊ PRECISA INFORMAR SEU E-MAIL.' : 'VOCÊ PRECISA INFORMAR SEU \nE-MAIL.'}
            closeAction={() => this.setModalVisible(false)} />

          <Alert
            visible={this.props.forgot.alert && this.props.forgot.success}
            icon="envelope"
            mensagem={'ENVIAMOS UM EMAIL\nPARA VOCÊ'}
            descricao={this.props.forgot.data}
            btnLabel="VOLTAR AO LOGIN"
            closeAction={() => {
              this.props.closeModal();
              this.props.navigation.navigate("Login")
            }} />

          <Alert
            visible={this.props.forgot.alert && !this.props.forgot.success}
            icon="exclamation"
            mensagem={this.props.forgot.error.Message ? this.props.forgot.error.Message.toUpperCase() : 'Erro desconhecido.Por favor, tente novamente mais tarde.'}
            btnLabel="VOLTAR"
            closeAction={() => {
              this.props.closeModal();
            }} />

        </View>
      </KeyboardAwareScrollView>

    );
  }
}


function mapStateToProps(state) {
  return {
    forgot: state.forgot,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ForgotActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(esqueciSenha);
