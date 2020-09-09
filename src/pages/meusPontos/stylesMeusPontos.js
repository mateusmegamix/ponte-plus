import {  StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
  containerGeral: {
    paddingBottom: 50,
    backgroundColor: '#F3F3F3',
  },
  menu: {
    width: '100%',
    backgroundColor: '#000000',
    paddingTop: 10,
    paddingBottom: 20,
  },
  container: {
    width: metrics.defaultWidthPag,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btnDestaque: {
    width: '50%',
    backgroundColor: '#B9B9B9',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center'
  },
  btnSemDestaque: {
    width: '50%',
    height: 23,
    justifyContent: 'center'
  },
  txtDestaque: {
    width: '100%',
    color: '#ffffff',
    fontSize: metrics.defaultFontSizeBtnTop,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  txtSemDestaque: {
    width: '100%',
    color: '#B9B9B9',
    fontSize: metrics.defaultFontSizeBtnTop,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  containerMedal: {
    width: metrics.defaultWidthPag,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
  },
  medal: {
    height: Platform.OS == 'ios' ? 110 : 160,
    width: Platform.OS == 'ios' ? 110 : 160,
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  nivelAtual: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 32,
    color: colors.gray,
    marginTop: 20,
    fontWeight: "300"
  },
  titleNivel: {
    width: '100%',
    textAlign: 'center',
    fontSize: Platform.Os == 'ios' ? 12 : metrics.defaultFontSizeTitle,
    lineHeight: 25,
    color: colors.gray,
    marginTop: 40,
    marginBottom: 15
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemMedal: {
    marginRight: 20,
    width: 28,
    height: 28,
    resizeMode: 'contain'
  },
  titulo: {    
    marginRight: 20,
    fontSize: metrics.defaultFontSizeTitle,
    color: colors.gray,
    fontWeight: 'bold'
  },
  ptsCorte: {
    fontSize: metrics.defaultFontSizeTxt,
    color: colors.gray,
    fontWeight: 'bold',
  }

});

export default styles;
  