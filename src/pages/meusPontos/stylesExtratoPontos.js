import {
  StyleSheet, Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';


const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: 60,
    backgroundColor: colors.grayrow,
    justifyContent: 'center'
  },
  container: {
    width: metrics.defaultWidthFull,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  containerPick: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.graylight
  },
  camposSelect: {
    color: colors.black,
  },
  btnDestaque: {
    width: '50%',
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: colors.pontoRecompensas.backgroundBorder,
  },
  btnSemDestaque: {
    width: '50%',
    height: 60,
    justifyContent: 'center',
  },
  txtDestaque: {
    width: '100%',
    color: colors.gray,
    fontSize: metrics.defaultFontSizeBtnTop,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
  },
  txtSemDestaque: {
    width: '100%',
    color: colors.gray,
    fontSize: metrics.defaultFontSizeBtnTop,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
  },
  containerExtrato: {
    width: metrics.defaultWidthPag,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleH1: {
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: metrics.defaultTextAlignTitle,
    fontWeight: metrics.defaultFontWeightTitle,
    marginTop: metrics.defaultMarginTopTitle,
  },
  title: {
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: metrics.defaultTextAlignTitle,
    marginTop: 5,
    marginBottom: metrics.defaultMarginBottomTitle
  },
  data: {
    fontSize: 12,
    paddingLeft: 20,
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: 15,
    paddingLeft: 15,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  dadosItem: {
    justifyContent: 'space-between',
    flex: 1,
  },
  iconItem: {
    width: 20,
  },
  ptsItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    top: 0,
  },
  dataItem: {
    fontSize: 10
  },
  statusItem: {
    fontSize: metrics.defaultFontSizeTxt,
    fontWeight: 'bold'
  },
  msgItem: {
    fontSize: 12,
  },
  pts: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10
  },
  borderItens: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grayrow,
    marginBottom: 10,
    marginTop: 10
  },
  bgTrasnparent: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  btnIconClose: {
    position: 'absolute',
    top: Platform.OS == 'ios'? 25 : 10,
    zIndex: 1,
    right: Platform.OS == 'ios'? 10 : 25,
    padding: 5
  },
  iconClose: {
    color: colors.cupomExtrato.iconClose,
    fontSize: 23,
    ...ifIphoneX({
      marginTop: 15
    })
  },
  modalContent: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 80,
    ...ifIphoneX({
      marginTop: 120
    })
  },
  btnFaleConosco: {
    marginTop: -18,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 30,
  },
  btnTitle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  containerFull: {
    height: '100%'
  },
  containerMensagemVazia: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%',
    paddingHorizontal: 20,
  },
  imgSmile: {
    width: 150,
    height: 150,
    marginBottom: 10,
    marginTop: 20
  },
  txtMensagemVazia: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    color: colors.graylight    
  },
});

export default styles;