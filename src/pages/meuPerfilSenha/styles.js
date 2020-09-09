import {
  StyleSheet, Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';


const styles = StyleSheet.create({
  containerFull:{
    backgroundColor: colors.white
  },
  containerPerfil: {
    width: metrics.defaultWidthPag,
    justifyContent: 'flex-start',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    width: '100%'
  },
  icones: {
    marginLeft: 3,
    color: colors.meuPerfil.senha.icones
  },
  boxInput: {
    width: '100%', 
    marginTop: 20
  },
  camposInput: {
    width: "100%",
    borderBottomWidth: 1,
    color: '#2F2F2F',
    borderBottomColor: colors.meuPerfil.senha.bordaLinha,
    paddingLeft: 25,
    marginTop: Platform.OS == 'ios' ? -15 : -32,
    paddingBottom: 10
  },
  buttonEntrar: {
    marginTop: 30
  },
  buttonContainer: {
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20
  },
  txtButton: {
    fontSize: metrics.defaultFontSizeTxt,
  },
  titleArea: {
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: metrics.defaultTextAlignTitle,
    fontWeight: metrics.defaultFontWeightTitle,
    marginTop: metrics.defaultMarginTopTitle,
    marginBottom: metrics.defaultMarginBottomTitle,
    color: colors.gray
  },
});

export default styles;