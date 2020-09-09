import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';




const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  iconAlert: {
    fontSize: 45,
    marginTop: 30,
    color: '#000000'
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
  txtAlertCont: {
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: metrics.defaultFontSizeTitle
  },
  txtDescricao: {
    fontSize: 12,
    color: "#2F2F2F",
    width: "85%",
    textAlign: "center",
    lineHeight: 17
  },
  buttonVoltar: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 99
  },
  alertCont: {
    backgroundColor: '#ffffff',
    width: metrics.defaultWidthModal,
    alignItems: 'center',
    paddingBottom: 30,
    borderRadius: 5
  },
  txtButtonVoltar: {
    color: colors.corPrincipal1,
    fontWeight: 'bold',
    fontSize: 24
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-between'
  },
  logo: {
    marginTop: 30,
    marginBottom: -15
  },
  camposInput: {
    width: "100%",
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: metrics.fontp,
    borderBottomColor: '#fff',
    paddingLeft: 25,
    marginTop: -32
  },
  boldTextStyle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  txtFooter: {
    fontSize: 14
  },
  iconfb: {
    color: '#fff',
    position: 'absolute',
    left: 55
  },
  buttonEntrar: {
    borderRadius: 100,
    backgroundColor: '#cf9112',
    width: 320,
    height: metrics.heightButton,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonEntrar2: {
    borderRadius: 100,
    backgroundColor: '#cf9112',
    width: '80%',
    height: metrics.heightButton,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  botaomodal: {
    borderRadius: 100,
    backgroundColor: '#cf9112',
    width: 250,
    height: metrics.heightButton,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonEntrarFB: {
    borderRadius: 100,
    backgroundColor: '#0f5084',
    width: 320,
    height: metrics.heightButton,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonRedeS: {
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: '#757575',
    width: 300,
    height: 35,
    color: '#fff',
    justifyContent: 'center',
    paddingLeft: 80,
    // alignItems: 'center',

  },
  buttonContainer2: {
    width: metrics.defaultWidthPag,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonContainer: {
    // height: '40%',
    width: '50%',
    flexDirection: "row",
    justifyContent: "center"
  },
  txtButton: {
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: "center",
    // textAlign: 'center'
  },
  txtButtonFb: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Open Sans'
    // marginBottom: 20
  },
  txtou: {
    marginTop: 18,
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: 15
  },
  footer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    height: 55,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0

  },
  txtfooter: {
    color: '#333',
    fontSize: 17,
    fontFamily: 'Open Sans',
  },
  txtEsquecisenha: {
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 13,
    fontFamily: 'Open Sans',
  },
  logofb: {
    position: 'absolute',
    left: 190,
    color: '#fff'
  },


});

export default styles;