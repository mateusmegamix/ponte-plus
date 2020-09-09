import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: colors.corPrincipal1,
        textAlign: 'center',
    },
    titlePag: {
        fontSize: metrics.defaultFontSizeTxt,
        width: '100%',
        fontWeight: metrics.defaultFontWeightTitle,
        color: colors.gray,
        textAlign: metrics.defaultTextAlignTitle,
        marginTop: 30,
    },
    containerHeader: {
        width: metrics.defaultWidthPag,
        paddingTop: Platform.OS == 'ios' ? 15 : 0,
        height: Platform.OS == "ios" ? 70 : 45,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btnIconBack: {
        height: 45,
        width: '5%',
        lineHeight: 45
    },
    iconBack: {
        color: '#ffffff',
        fontSize: 21,
        lineHeight: 45
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: metrics.defaultLineHeightTxt,
        textAlign: 'center',
        width: '90%',
    },
    imgBackgroundUsuario: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    containerImgUsuario: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 19,
        height: 109,
        width: 109,
        position: 'relative'
    },
    containerUsuario: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    imgUsuario: {
        position: 'absolute',
        height: 110,
        width: 110,
        borderRadius: 55,
        marginTop: 30,
        marginBottom: 100,    
        borderWidth: 6,
    },
    nomeUsuario: {
        fontSize: metrics.defaultFontSizeTitle,
        color: colors.gray,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 50
    },
    txtPontos: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray,
        textAlign: 'center',
        width: '100%'
    },
    Pontos: {
        fontWeight: 'bold'
    },
    containerBtns: {
        width: 245,
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        marginTop: 10
    },
    btns: {
        backgroundColor: colors.corPrincipal1,
        width: 115,
        height: 25,
        justifyContent: 'center',
        borderRadius: 100
    },
    txtBtns: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    msgNoResult: {
        width: '100%',
        textAlign: 'center',
        color: colors.black,
        marginTop: 20
    },
    txtBack: {
        width: 100,
        position: 'absolute',
        
        top: Platform.OS == 'ios' ? 25 : 10,
        left: 15,
        zIndex: 9
    },
    listNotification: {
        marginTop: 30
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
})

export default styles;