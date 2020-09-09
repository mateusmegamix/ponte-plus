import {  StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { Right } from 'native-base';

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    backgroundColor: colors.corPrincipal1,
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
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  form: {
      width: '95%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 20
  },
  icone: {
    width: '5%',
    marginTop: 60
  },

  camposInput: {
    width: "100%",
    borderBottomWidth: 1,
    color: colors.gray,
    borderBottomColor: colors.meuPerfil.dadosPessoais.bordaLinha,
    height: 50
  },
  buttonEntrar: {
    borderRadius: 100,
    backgroundColor: colors.corPrincipal1,
    width: 280,
    height: 35,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  buttonContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center"
  },
  txtButton: {
    color: colors.white,
    fontSize: metrics.defaultFontSizeTxt,
    fontWeight: 'bold'
  },
});

export default styles;
  