import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.corPrincipal1,
    textAlign: 'center',
  },
  containerHeader: {
    width: metrics.defaultWidthPag,
    paddingTop: Platform.OS == 'ios' ? 15 : 0,
    height: Platform.OS == "ios" ? 70 : 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: 'center',
    width: '95%'
  },
  imageUser: {
    zIndex: 1,
    height: 105,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
  imgUsuario: {
    position: 'absolute',
    height: 116,
    width: 116,
    borderRadius: 58,
    marginTop: 20,
    borderWidth: 6,
    borderColor: colors.bordaAvatar,
  },
  imageUserBorder: {
    zIndex: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    height: 126,
    width: 126,
    borderRadius: 63,
    marginTop: -145,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: colors.bordaAvatarFora,
  },
  btnIconBack: {
    height: 45,
    width: '5%',
    lineHeight: 45
  },
  iconBack: {
    color: '#ffffff',
    fontSize: 21,
    lineHeight: 45
  },
  menu: {
    width: '100%',
    backgroundColor: '#000000',
    paddingTop: 25,
    paddingBottom: 25,
  },
  container: {
    width: metrics.defaultWidthPag,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap'
  },
  containerPerfil: {
    width: metrics.defaultWidthPag,
    justifyContent: 'flex-start',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnDestaque: {
    width: '50%',
    backgroundColor: '#B9B9B9',
    minHeight: 25,
    borderRadius: 50
  },
  btnSemDestaque: {
    width: '50%',
    minHeight: 25
  },
  txtDestaque: {
    width: '100%',
    color: '#ffffff',
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: 'bold'
  },
  txtSemDestaque: {
    width: '100%',
    color: '#B9B9B9',
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: 'bold'
  },
  imageItem: {
    width: 110,
    height: 110,
    position: 'absolute',
  },
  altImg: {
    backgroundColor: colors.meuPerfil.dadosPessoais.plus,
    height: 30,
    width: 30,
    lineHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    bottom: -15,
    right: -45,
  },
  altIco: {
    color: colors.corPrincipal1,
    height: 30,
    width: 30,
    lineHeight: 30,
    textAlign: 'center',
  },
  form: {
    width: '100%'
  },
  camposInput: {
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    color: colors.gray,
    borderBottomColor: colors.meuPerfil.dadosPessoais.bordaLinha,
    paddingLeft: 25,
    marginTop: -32,
    height: 50
  },
  inputSexoAndroid: {
    width: '100%',
    height: 30,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.meuPerfil.dadosPessoais.bordaLinha
  },
  inputSexoIOS: {
    width: '100%',
    height: 25,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.meuPerfil.dadosPessoais.bordaLinha,
    flex: 1,
    flexDirection: 'row'
  },
  camposSelect: {
    width: "100%",
    borderBottomWidth: 1,
    color: colors.gray,
    borderBottomColor: colors.graylight,
    paddingLeft: 25,
    marginTop: -32,
    height: 50,
    width: '100%',
    transform: [
      { scaleX: 0.9 },
      { scaleY: 0.9 },
    ]
  },
  buttonEntrar: {
    marginTop: 40,
    marginBottom: 30
  },
  buttonContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  txtButton: {
    fontSize: metrics.defaultFontSizeTxt,
  },
  cancelAc: {
    fontSize: metrics.defaultFontSizeTxt,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
    width: '100%'
  },
  cancelAcBold: {
    fontWeight: 'bold'
  },
  titleArea: {
    textAlign: 'center',
    fontSize: metrics.defaultFontSizeTitle,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 15
  },
  boxInput: {
    width: '100%',
    marginTop: 20
  },
  icons: {
    marginLeft: 3,
    color: colors.meuPerfil.dadosPessoais.icones
  },
  boxEndereco: {
    width: '100%'
  },
  boxEnderecoInferior: {
    width: '45%'
  },
  containerFull: {
    backgroundColor: colors.white,
  }
});

export default styles;
