import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  container: {
    width: "75%",
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  atualizar: {
    marginTop: 40,
    marginBottom: 20
  },
  h1: {
    color: colors.componentInternetAtualizar.h1,
    marginTop: 15,
    fontSize: metrics.defaulth1,
    width: '70%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  txtDescricao: {
    fontSize: metrics.fontp,
    color: colors.componentInternetAtualizar.descricao,
    width: "75%",
    textAlign: "center",
    marginTop: 13,
    marginBottom: 21

  },
  buttonContainer: {
    height: '40%',
    width: '75%',
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonEntrar: {
    borderRadius: 100,
    backgroundColor: colors.componentInternetAtualizar.bgBotao,
    width: "100%",
    height: metrics.heightButton,
    width: metrics.widthButton,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 20 : 40,
  },
  txtButton: {
    color: colors.componentInternetAtualizar.txtBotao,
    fontSize: metrics.fontButton,
    fontWeight: 'bold'
  },
});
export default styles;