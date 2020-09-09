import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import { Dimensions, Platform } from 'react-native';
import colors from '../../styles/colors';
import { ifIphoneX } from 'react-native-iphone-x-helper';


const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'ios' ? ifIphoneX(60) : null,
    height: width < height ? height : width,
    width: width < height ? width : height,
  },
  imgBackground: {
    width: width,
    height: height,
    flex: 1,
  },
  logo: {
    width: 250,
    height: 176,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 25,
  },
  camposInput: {
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    color: colors.login.input,
    fontSize: 16,
    borderBottomColor: colors.login.borda,
  },
  boldTextStyle: {
    fontWeight: 'bold',
  },
  buttonEntrar: {
    backgroundColor: colors.login.btnEntrar,
    width: '100%',
  },
  iconFacebook: {
    color: colors.facebook.icone
  },
  buttonFacebook: {
    width: Platform.OS == 'ios' ? '100%': '95%',  
    backgroundColor: colors.facebook.background,
  },
  txtFacebook: {
    color: colors.facebook.color,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '80%',
    marginTop: Platform.OS == 'ios' ? 15 : null 
  },
  ptopo: {
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize:  Platform.OS == 'ios' ? metrics.fontpIos : 17,
    paddingLeft: 15,
    paddingRight: 15,  
    flexDirection: "row",
    textAlign: 'center',
    justifyContent: "center",
  },
  txtou: {
    marginTop: 18,
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: 15
  },
  containerOu: {
    width: '100%', 
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textoOu: {
    color: colors.login.ou,
    fontFamily: 'Open Sans',
    fontSize: 12,
  },
  footer: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    height: Platform.OS == 'ios' ? ifIphoneX(70) : 65,
    width: '100%',
    marginTop: Platform.OS == 'ios' ? 20 : null, 
    marginBottom: Platform.OS == 'ios' ? ifIphoneX(-30) : 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: Platform.OS == 'ios' ? -2 : 10,
    },
    shadowOpacity: Platform.OS == 'ios' ? 0.6 : 1,
    shadowRadius: Platform.OS == 'ios' ? 3.5 : 1,
    elevation: Platform.OS == 'ios' ? null : 5,
  },
  footerIphoneX:{
    height: 95,
    paddingBottom: 55
  },
  txtfooter: {
    color: colors.login.input,
    fontSize: 17,
    fontFamily: 'Open Sans',
  },
  txtEsquecisenha: {
    width: '50%',
    color: colors.login.btnEsqueciSenha,
    fontSize: 14,
    fontFamily: 'Open Sans',
    alignSelf: 'center'
  },
});

export default styles;