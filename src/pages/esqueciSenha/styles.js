import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { StyleSheet, Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: metrics.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  logo: {
    marginTop: 80,
    width: 220,
    height: 134,
    resizeMode: 'contain'
  },
  txtEsquecisenha: {
    color: colors.esqueciSenha.textoH1,
    marginTop: 60,
    marginBottom: 10,
    ...ifIphoneX({
      marginBottom: 10
    }),
    fontSize: metrics.defaulth3,
    fontWeight: 'bold'
  },
  txtDescricao: {
    marginBottom: Platform.OS == 'ios'? 15 : 0,
    fontSize: Platform.OS == 'ios' ? metrics.fontpIos: metrics.fontp,
    color: colors.gray,
    width: "85%",
    textAlign: "center",
    lineHeight: 19,
    ...ifIphoneX({
      marginTop: 20,
      marginBottom: 35
    }),
  },
  camposInput: {
    fontSize: metrics.fontp,
    width: "100%",
    borderBottomWidth: 1,
    color: colors.esqueciSenha.input,
    borderBottomColor: colors.esqueciSenha.borda,
    marginTop: 20,
    paddingBottom: 10,
  }, 
  buttonEntrar: {
    width: "100%",
    height: metrics.defaultHeightButton,
    ...ifIphoneX({
      marginTop: 30
    })
  },
  buttonContainer: {
    paddingTop: 30,
    flexGrow:1,
    width: '85%',
    flexDirection: "row",
    justifyContent: "center",
    ...ifIphoneX({
      height: 'auto',    
      marginBottom: 250
    })
  },
  footer: {
    marginTop: -200,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    height: '10%',
    marginRight: '78%',
    ...ifIphoneX({
      marginTop: -190
    })
  },
});
export default styles;