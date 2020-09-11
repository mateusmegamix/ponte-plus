import {StyleSheet, Platform} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  containerCamera: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.2)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#000000',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    width: metrics.defaultWidthPag,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconeHome: {
    fontSize: 18,
  },
  titlePag: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: metrics.defaultFontSizeTitle,
    textAlign: 'center',
    width: '95%',
  },
  imgCupom: {
    width: 70,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginTop: 50
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    // marginTop: 25,
    color: '#000000',
    fontFamily: 'Open Sans',
  },
  subTitle: {
    fontSize: metrics.defaultFontSizeTxt,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 250,
    // marginTop: Platform.OS == 'ios' ? 20 : 29,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#000000',
    fontFamily: 'Open Sans',
  },
  subTitleEnvieFoto: {
    marginTop: -20,
    marginBottom: 5,
  },
  hr: {
    borderTopColor: '#bdc3c7',
    borderTopWidth: 1,
    width: 300,
    marginTop: -10,
    marginBottom: -10,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btn: {
    width: 280,
    height: 38,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginTop: 35,
    backgroundColor: 'transparent',
    borderColor: colors.corPrincipal1,
    borderWidth: 2,
    borderRadius: 50,
    // marginBottom: 50,
  },
  txtBtn: {
    color: colors.corPrincipal1,
    fontSize: metrics.defaultFontSizeTitle,
    lineHeight: 34,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fotografar: {
    color: '#B9B9B9',
    width: '100%',
    // marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barras: {
    color: '#B9B9B9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  icoCamera: {
    marginRight: 8,
    color: '#B9B9B9',
    fontSize: 14,
  },
  icoBarra: {
    marginRight: 8,
    color: '#B9B9B9',
    fontSize: 18,
  },
  txtFotografar: {
    color: '#B9B9B9',
    fontWeight: 'bold',
  },
  txtBarra: {
    color: '#B9B9B9',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  maskInner: {
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    position: 'relative',
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {flexDirection: 'row'},
  containerPreview: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#000',
  },
  capture: {
    width: 65,
    height: 65,
    backgroundColor: colors.yellow,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  iconeCamera: {
    color: '#fff',
    fontSize: 30,
  },
  headerCamera: {
    backgroundColor: colors.notas.statusBar.background,
    alignItems: 'center',
    height: Platform.OS == 'ios' ? 70 : 50,

    ...ifIphoneX({
      height: 90,
      paddingTop: 20,
    }),
  },
  containerTop: {
    paddingTop: Platform.OS == 'ios' ? 20 : null,
    width: metrics.defaultWidthPag,
    flexDirection: 'row',
  },
  duvidas: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boolquestion: {
    backgroundColor: colors.notas.bgIconDuvidas,
    width: 25,
    height: 25,
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  iconequestion: {
    color: colors.notas.txtIconDuvidas,
    fontSize: 19,
    lineHeight: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  colortxt: {
    fontSize: metrics.defaultFontSizeTitle,
    color: colors.notas.statusBar.text,
    marginTop: 8,
    marginLeft: 10,
  },

  btnIconClose: {
    paddingTop: Platform.OS == 'ios' ? 15 : null,
    position: 'absolute',
    top: 13,
    right: '3%',
    zIndex: 99,
  },
  iconClose: {
    color: colors.notas.duvidas.btnFechar,
    fontWeight: 'bold',
    fontSize: 24,
  },
  pdRigth: {
    marginRight: Platform.OS == 'ios' ? 10 : null,
    ...ifIphoneX({
      marginTop: 20,
    }),
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalContentTd: {
    height: '100%',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 60,
    backgroundColor: colors.notas.duvidas.background,
  },
  ListDuvidas: {
    width: '100%',
  },
  ListFotopos: {
    marginTop: -80,
    marginBottom: 30,
    width: '100%',
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
    flexDirection: 'column',
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 35,
    alignItems: 'center',
  },
  boolNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.notas.duvidas.bgIcon,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  txtNumber: {
    color: '#ffffff',
    lineHeight: 30,
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
  },
  txtRow: {
    color: colors.notas.duvidas.description,
    fontSize: metrics.defaultFontSizeTxt,
    lineHeight: metrics.defaultLineHeightTxt,
    width: 250,
  },
  buttonOkEntendi: {
    borderRadius: 100,
    backgroundColor: colors.notas.duvidas.button,
    width: '75%',
    height: 43,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 50,
  },
  txtButton: {
    color: '#fff',
    fontSize: metrics.fontButton,
    fontWeight: 'bold',
  },
  txtEntendi: {
    color: '#fff',
    fontSize: metrics.fontButton,
    fontWeight: 'bold',
  },
  h1Modal: {
    color: colors.notas.duvidas.h1,
    fontSize: metrics.defaultFontSizeTitle,
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
    marginBottom: 50,
  },
  fotoNota: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
  },
  buttons: {
    width: '70%',
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txtFoto: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonSpecific: {
    width: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  ContainerSucess: {
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  // eslint-disable-next-line no-dupe-keys
  overlay: {
    flex: 1,
    color: '#0003',
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    width: 300,
    height: 300,
  },
  scanline: {
    color: 'red',
    height: 1,
  },
});

export default styles;
