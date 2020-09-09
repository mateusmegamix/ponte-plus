import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ForgotActions} from '../../store/ducks/forgot';
import images from '../../styles/images';
class EsqueciSenhaConfirmacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }
  componentDidMount() {
    const {data} = this.props.navigation.state.params;
    console.log(data, 'Esqueci senha confirmacao');
  }

  render() {
    const emailParam = this.props.navigation.state.params.emailEnviado;
    const emailFormat = emailParam.substr(0, 4);
    const emailComplet = emailFormat + '******';
    const {navigation} = this.props;
    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={images.bgComponentAlert}>
        <TouchableOpacity
          style={styles.buttonVoltar}
          onPress={() => {
            this.fecharModal();
          }}>
          <Icon name="times" style={styles.txtButtonVoltar} />
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.iconMail}>
            <Icon name="envelope" style={styles.iconAlert} />
          </Text>

          <Text style={styles.txtEsquecisenha}>
            ENVIAMOS UM EMAIL PARA VOCÊ
          </Text>
          {/* <primeiras 4 letras>***<tudo o que vem depois do @> */}
          <Text style={styles.txtDescricao}>
            Acesse o e-mail {emailComplet} e siga os passos para redefinir sua
            senha.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonEntrar}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.txtButton}> VOLTAR AO LOGIN </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    width: metrics.defaultWidthModal,
    height: 310,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 30,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  txtEsquecisenha: {
    color: '#2F2F2F',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    width: '70%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtDescricao: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: metrics.defaultFontSizeTitle,
    flexWrap: 'wrap',
  },
  buttonEntrar: {
    borderRadius: 100,
    backgroundColor: '#cf9112',
    width: '100%',
    height: 43,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    height: '40%',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtButton: {
    color: '#fff',
    fontSize: metrics.fontButton,
    fontWeight: 'bold',
  },
  iconMail: {
    fontSize: 32,
    color: '#2F2F2F',
    marginTop: 40,
    marginBottom: 10,
  },
  iconAlert: {
    fontSize: 45,
    marginTop: 30,
    color: '#000000',
  },
  buttonVoltar: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 99,
  },
  txtButtonVoltar: {
    color: colors.corPrincipal1,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

function mapStateToProps(state) {
  return {
    forgot: state.forgot,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ForgotActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EsqueciSenhaConfirmacao);
