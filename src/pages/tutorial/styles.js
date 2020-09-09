import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
  boxLogo: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
  logo: {
    width: 100,
    height: 104,
  },
  slide: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
  btnPequeno: {
    padding: 15
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  txtbold:{
    fontFamily: 'Open Sans',
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  ptxt: {
    fontFamily: 'Open Sans',
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.tutorial.txtDescricao,
  },
  ptxt2: {
    fontSize: 13,
    fontWeight: '500'
  },
  h1: {
    fontWeight: '100',
    color: colors.tutorial.txtH1,
    fontSize: 26,
    fontFamily: 'Open Sans',
    width: '100%',
    textAlign: 'center',
  },
  h2: {
    fontSize: 30,
    color: colors.tutorial.txtH2,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -8,
    marginBottom: 10,
  },
  buttonEntrar: {
    borderRadius: 100,
    width: '85%',
    height: metrics.defaultHeightButton,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 25,
    backgroundColor: colors.tutorial.botao,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: Platform.OS == 'ios' ? 2 : 10,
    },
    shadowOpacity: Platform.OS == 'ios' ? 0.6 : 1,
    shadowRadius: Platform.OS == 'ios' ? 2 : 1,
    elevation: Platform.OS == 'ios' ? null : 5,
  },
  txtButton: {
    color: colors.white,
    fontFamily: 'Open Sans',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pular: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80
  },
  dot: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white
  },
  activeDotColor: {
    backgroundColor: colors.white,
    borderWidth: 5,
    borderColor: colors.white
  }
})




export default styles;