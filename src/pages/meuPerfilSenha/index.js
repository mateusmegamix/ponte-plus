import React from 'react';
import {View, SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import styles from './styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Alerts from '../../components/Alert';
import HeaderTitulo from '../../components/HeaderTitulo';
// config iPhoneX
// import {SafeAreaView} from 'react-navigation';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-community/async-storage';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AtualizarActions} from '../../store/ducks/atualizar';
import ButtonDefault from '../../components/ButtonDefault';

class meuPerfilDadosPessoais extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      message: '',
      modalVisibleAlertConcluido: false,
      modalVisibleAlertError: false,
      modalVisibleAlertCancel: false,
      SenhaAtual: '',
      NovaSenha: '',
      token: '',
    };
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    this.setState({
      token: token,
    });
  };

  setModalVisibleAlertConcluido(visible) {
    this.setState({modalVisibleAlertConcluido: visible});
  }

  setModalVisibleAlertCancel(visible) {
    this.setState({modalVisibleAlertCancel: visible});
  }

  validation = () => {
    if (!this.state.SenhaAtual) {
      return this.setState({
        message: 'O campo Senha Atual é obrigatório.',
        modalVisibleAlertError: true,
      });
    } else if (!this.state.NovaSenha) {
      return this.setState({
        message: 'O campo Nova Senha é obrigatório.',
        modalVisibleAlertError: true,
      });
    }
    return true;
  };

  onChangePassword = async () => {
    let mensagem = this.validation();
    if (mensagem == true) {
      this.props.getAtualizaSenhaRequest(this.state);
    }
  };

  render() {
    const {navigation} = this.props;
    //console.log(this.props, "props")

    var mensagem = '';
    var error = false;

    if (this.props.atualizar.alert) {
      if (this.props.atualizar.error) {
        mensagem = this.props.atualizar.error.Message;
        error = true;
      } else {
        mensagem = this.props.atualizar.data;
        error = false;
      }
    }

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black}}
        forceInset={{bottom: 'never'}}>
        <ScrollView style={styles.containerFull} bounces={ifIphoneX(false)}>
          <HeaderTitulo
            titulo="MEU PERFIL"
            navigation={this.props.navigation}
          />

          <View style={styles.containerPerfil}>
            <View style={styles.form}>
              <Text style={styles.titleArea}>
                INFORME ABAIXO A SENHA ATUAL E A NOVA PARA ATUALIZAR A SENHA.
              </Text>

              <View style={styles.boxInput}>
                <Icon name="lock" style={styles.icones} />
                <TextInput
                  style={styles.camposInput}
                  textContentType="password"
                  placeholder="Senha Atual"
                  placeholderTextColor={colors.gray}
                  secureTextEntry={true}
                  onChangeText={(key) => {
                    this.setState({SenhaAtual: key});
                  }}
                  value={this.state.SenhaAtual}
                />
              </View>

              <View style={styles.boxInput}>
                <Icon name="unlock" style={styles.icones} />
                <TextInput
                  style={styles.camposInput}
                  textContentType="password"
                  placeholder="Senha Nova"
                  placeholderTextColor={colors.gray}
                  secureTextEntry={true}
                  onChangeText={(key) => {
                    this.setState({NovaSenha: key});
                  }}
                  value={this.state.NovaSenha}
                />
              </View>

              <View style={styles.buttonContainer}>
                <ButtonDefault
                  label={`SALVAR`}
                  style={styles.buttonEntrar}
                  txtStyle={styles.txtButton}
                  onPress={() => {
                    this.onChangePassword();
                  }}
                />
              </View>
            </View>
          </View>

          <Alerts
            mensagem={String(mensagem).toUpperCase()}
            icon={error ? 'times' : 'check'}
            btnLabel="FECHAR"
            visible={this.props.atualizar.alert}
            closeAction={() => this.props.doAtualizaCloseModal()}
          />

          <Alerts
            mensagem={String(this.state.message).toUpperCase()}
            icon={'check'}
            btnLabel="FECHAR"
            visible={this.state.modalVisibleAlertError}
            closeAction={() => this.setState({modalVisibleAlertError: false})}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    atualizar: state.atualizar,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AtualizarActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(meuPerfilDadosPessoais);
