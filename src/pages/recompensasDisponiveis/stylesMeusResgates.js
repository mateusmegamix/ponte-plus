import {
  StyleSheet, Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
    height: 23,
    borderRadius: 50
  },
  btnSemDestaque: {
    width: '50%',
    height: 23
  },
  txtDestaque: {
    width: '100%',
    color: '#ffffff',
    fontSize: metrics.defaultFontSizeBtnTop,
    textAlign: 'center',
    lineHeight: 23,
    fontWeight: 'bold'
  },
  txtSemDestaque: {
    width: '100%',
    color: '#B9B9B9',
    fontSize: metrics.defaultFontSizeBtnTop,
    textAlign: 'center',
    lineHeight: 23,
    fontWeight: 'bold'
  },
  containerItens: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: -10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  row: {
    height: 1,
    marginHorizontal: 15,
    backgroundColor: colors.grayrow,
  },
  itens: {
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderRadius: 5
  },
  title: {
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: metrics.defaultTextAlignTitle,
    fontWeight: metrics.defaultFontWeightTitle,
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    marginTop: metrics.defaultMarginTopTitle,
    marginBottom: metrics.defaultMarginBottomTitle
  },
  dataMes: {
    color: '#2F2F2F',
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  item: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  },
  imageItem: {
    width: 39,
    height: 39,
    marginRight: 15,
  },
  dados: {
    flex: 1
  },
  dataItem: {
    fontSize: 10,
    width: '100%'
  },
  nomeItem: {
    fontSize: metrics.defaultFontSizeTxt,
    fontWeight: 'bold',
    width: '100%'
  },
  validadeItem: {
    fontSize: 12,
    width: '100%'
  },
  ptsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconItem: {
    width: 20,
    color: colors.gray
  },
  pts: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
  },
  bgTrasnparent: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  btnIconClose: {
    position: 'absolute',
    padding: 15,
    top: Platform.OS == 'ios' ? 5 : 0,
    zIndex: 1,
    right: 10
  },
  iconClose: {
    color: colors.corPrincipal1,
    fontSize: 23,
    ...ifIphoneX({
      marginTop: 30
    })
  },
  modalContent: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 50

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
    marginTop: 80
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