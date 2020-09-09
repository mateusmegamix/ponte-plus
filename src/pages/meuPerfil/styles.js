import {
    StyleSheet,
    Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import {
    ifIphoneX
} from 'react-native-iphone-x-helper'
const styles = StyleSheet.create({
    headerUsuario: {
        width: '100%',
        height: 200,
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 80,
        width: 186,
        height: 41,
    },
    containerImgUsuario: {
        zIndex: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -140,
        height: 150,
        width: 150,
        position: 'relative',
    },
    containerImgUsuarioBorda: {
        zIndex: 0,
        position: 'relative',
        marginTop: -158,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 165,
        width: 165,
        backgroundColor: 'transparent',
        borderRadius: 83,
        borderWidth: 1,
        borderColor: colors.bordaAvatarFora
    },
    imgUsuario: {
        position: 'absolute',
        height: 150,
        width: 150,
        borderRadius: 75,
        borderWidth: 8,
        borderColor: colors.bordaAvatar
    },
    bold: {
        fontWeight: 'bold'
    },
    bgBranco: {
        backgroundColor: '#ffffff',
    },
    btnImagem: {
        height: 35,
        width: 35,
        position: 'absolute',
        backgroundColor: colors.meuPerfil.plus,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        right: 15,
        bottom: 0
    },
    icoImagem: {
        fontSize: 17,
        color: colors.corPrincipal1,
        lineHeight: 30,
        textAlign: 'center'
    },
    alertDados: {
        justifyContent: 'center',
        backgroundColor: colors.meuPerfil.boxGanhePontos,
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        borderRadius: 4,
        position: 'relative'
    },
    arrowTop: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 18,
        borderRightWidth: 18,
        borderBottomWidth: 25,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.meuPerfil.boxGanhePontos,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -22,
    },
    titleDados: {
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 16
    },
    desdDados: {
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        fontSize: 12,
        paddingLeft: 40,
        paddingRight: 40
    },
    icon: {
        color: colors.meuPerfil.icones,
        fontSize: 14
    },
    iconCel: {
        color: colors.meuPerfil.icones,
        fontSize: 25,
        marginTop: -3
    },
    titleItem: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    valItem: {
        fontSize: 14,
        flex: 1,
        paddingRight: 15,
    },
    item: {
        flexDirection: 'row',
        marginTop: 20,
    },
    vitem: {
        width: '100%'
    },
    vIcon: {
        width: 40,
        paddingLeft: 15,
        paddingTop: 3
    },
    buttonContainer: {
        width: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },
    iconFacebook: {
        color: colors.facebook.icone
    },
    buttonFacebook: {
        width: metrics.meuPerfil.btnWidth,
        backgroundColor: colors.facebook.background,
        marginBottom: 12
    },
    txtFacebook: {
        color: colors.facebook.color,
    },
    buttonAlterarDados: {
        backgroundColor: colors.meuPerfil.botoes.alterarDados,
        width: metrics.meuPerfil.btnWidth,
        marginBottom: 10,
    },
    buttonSenha: {
        backgroundColor: colors.meuPerfil.botoes.alterarSenha,
        width: metrics.meuPerfil.btnWidth,
        marginBottom: 20
    },
    txtButton: {
        fontSize: metrics.defaultFontSizeTxt,
    },
    txtCancel: {
        fontSize: metrics.defaultFontSizeTxt,
        textAlign: 'center',
        marginBottom: 20,
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
        ...ifIphoneX({ paddingBottom: 20 })
    },
    txtBack: {
        position: 'absolute',
        width: metrics.defaultWidthPag,
        paddingTop: 30,
        marginLeft: 20,
        zIndex: 1,
        ...ifIphoneX({
            marginTop: 25
        })
    },
    iconBack: {
        color: '#ffffff',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerModal: {
        width: metrics.defaultWidthModal,
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 8
    },
    btnFechar: {
        height: 35,
        width: '100%',
        backgroundColor: colors.btnYes,
        borderRadius: 50,
        marginTop: 15
    },
    allModal: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtns: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.white,
        lineHeight: 35
    },
    titleModalAvise: {
        fontSize: metrics.defaulth2,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnNo: {
        backgroundColor: colors.corPrincipal1,
        borderRadius: 100,
        width: '40%',
        height: metrics.heightButton,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 5
    },
    btnYes: {
        backgroundColor: colors.btnYes,
        borderRadius: 100,
        width: '40%',
        height: metrics.heightButton,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5
    },
    iconTimes: {
        width: '100%',
        textAlign: 'right',
        position: 'absolute',
        top: 10,
        color: colors.corPrincipal1,
        fontWeight: 'bold',
        paddingRight: 20
    },
    containerBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textModalAvise: {
        marginTop: 15,
        marginBottom: 10
    },
    vItem: {
        flex: 1,
        flexDirection: 'column',
    },
    itens: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom: 25,
    },
    logofb: {
        marginLeft: 5,
        width: 10,
        height: 21
    },
});

export default styles;