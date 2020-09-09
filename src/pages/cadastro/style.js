import {
  StyleSheet, Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: colors.white,
  },
  logo: {
    width: 200,
    height: 114,
    resizeMode: 'contain'
  },
  buttonRedeS: {
    borderRadius: 100,
    backgroundColor: '#000',
    width: "100%",
    height: metrics.heightButton,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 18,
    marginBottom: 18
  },
  logofb: {
    width: 25,
    height: 25
  },
  txtEsquecisenha: {
    color: colors.cadastro.input,
    marginTop: 20,
    marginBottom: 20,
    fontSize: metrics.defaulth3,
    fontWeight: "bold",
    fontFamily: 'Zocial',
  },
  txtDescricao: {
    fontSize: metrics.fontp,
    color: "#2F2F2F",
    width: metrics.defaultWidthPag,
    textAlign: "center",
    lineHeight: 17,
    fontFamily: 'Open Sans',
  },
  containerInput: {
    width: '85%', 
    marginTop: 20,
  },
  iconInput:{
    marginLeft: 3,
    color: colors.cadastro.icone,
  },
  camposInput: {
    width: "100%",
    borderBottomWidth: 1,
    color: colors.cadastro.input,
    borderBottomColor: colors.cadastro.linhaInput,
    paddingLeft: 25,
    marginTop: -33,
    fontSize: metrics.fontp,
    height: 50
  },
  buttonContainer: {
    width: metrics.defaultWidthPag,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20, 
    marginBottom: 30
  },
  txtAceitarTemos: {
    color: colors.cadastro.input,
    fontSize: metrics.defaulth4,
    fontWeight: 'bold',
    marginTop: 20
  },
  txtCheckBox: {
    color: colors.cadastro.input,
    fontSize: 13,
    marginLeft: 5
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconFacebook: {
    color: colors.facebook.icone
  },
  buttonFacebook: {
    backgroundColor: colors.facebook.background2,
  },
  txtFacebook: {
    color: colors.facebook.color,
  },
  footer: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    height: Platform.OS == 'ios' ? ifIphoneX(70) : 65,
    width: '100%',
    marginBottom: Platform.OS == 'ios' ? ifIphoneX(-3) : 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: Platform.OS == 'ios' ? -2 : 10,
    },
    shadowOpacity: Platform.OS == 'ios' ? 0.6 : 1,
    shadowRadius: Platform.OS == 'ios' ? 3.5 : 1,
    elevation: Platform.OS == 'ios' ? null : 5,
  },
  txtFooter: {
    fontSize: Platform.OS == 'ios' ? 12 : 15,
    color: colors.white
  },
  boldTextStyle: {
    fontWeight: 'bold',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  modalContent: {
    position: 'relative',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonVoltar: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 99
  },
  txtButtonVoltar: {
    color: colors.corPrincipal1,
    fontWeight: 'bold',
    fontSize: 24
  },
  alertCont: {
    backgroundColor: '#ffffff',
    width: metrics.defaultWidthModal,
    alignItems: 'center',
    paddingBottom: 30,
    borderRadius: 5
  },
  txtAlertCont: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    width: '85%',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: metrics.defaultFontSizeTitle
  },
  iconAlert: {
    fontSize: 45,
    marginTop: 30,
    color: '#000000'
  },
  contentModal: {
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    position: 'relative',
    backgroundColor: '#ffffff'
  },
  iconCloseModal: {
    width: '100%',
    position: 'relative',
    textAlign: 'right',
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 9
  },
  iconBack: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    textAlign: 'left',
    marginLeft: '4%',
  },
  iconClose: {
    color: colors.corPrincipal1,
  },
  sublinhado: {
    textDecorationLine: 'underline'
  },
  buttonEsqueciSenha: {
    width: "80%",
    height: metrics.heightButton,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  btnEsqueciSenha: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  txtEsqueciSenha: {
    color: colors.corPrincipal1,
    fontSize: metrics.fontButton,
    marginTop: 15,
    fontWeight: 'bold'
  }

});

export default styles;