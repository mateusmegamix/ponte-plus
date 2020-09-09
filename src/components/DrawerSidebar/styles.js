import { StyleSheet, Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
    bgFundo: {
        backgroundColor: '#F3F3F3',
        width: '100%',
        height: '100%',
        // height: metrics.screenHeight,
    },
    headerUsuario: {
        width: '100%',
        height: 250,
    },
    imgBackgroundUsuario: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    containerUsuario: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    imgBorda: {
        marginTop: 25,
        borderRadius: 57.5,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.bordaAvatar,
    },
    imgUsuario: {
        height: 110,
        width: 110,
        borderRadius: 55,
        borderWidth: 8,
        borderColor: colors.bordaAvatar,
    },
    nomeUsuario: {
        fontSize: metrics.defaultFontSizeTitle,
        color: colors.menu.nomeUsuario,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 8
    },
    txtPontos: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.menu.navegacao,
        textAlign: 'center',
        width: '100%'
    },
    Pontos: {
        fontSize: metrics.defaultFontSizeTxt,
        fontWeight: 'bold'
    },
    containerBtns: {
        width: '80%',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        marginTop: 15
    },
    btns: {
        width: metrics.btnMenu.width,
        height: metrics.btnMenu.height,
    },
    corPerfil: {
        backgroundColor: colors.menu.perfil,
    },
    corSair: {
        backgroundColor: colors.menu.sair,
    },
    txtBtns: {
        fontSize: 12,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    menuBtns: {
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        height: 40,
    },
    menuTxtBtns: {
        fontSize: 14,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    menuBtnsNotificacoes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    listMenu: {
        marginTop: 25,
    },
    corNavegacao: {
        color: colors.menu.navegacao,
    },
    alert: {
        backgroundColor: colors.menu.notificacao,
        alignItems: 'center',
        justifyContent: 'center',
        width: 14,
        height: 14,
        borderRadius: 7,
        marginLeft: 10,
        marginTop: 2
    },
    alertNumber: {
        color: colors.white,
        fontSize: 9,
        textAlign: 'center',
    },
    viewSocial: {
        backgroundColor: '#000000',
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSocial: {
        height: 35,
        width: 35,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 30
    },
    btnClose: {
        position: 'absolute',
        padding: 15,
        top: Platform.OS == 'ios'? 15 : 0,
    ...     ifIphoneX({
                top: 10,
        }),
        right: 0,
        width: 50,
        zIndex: 1,
    },
    iconClose: {
        fontSize: 20
    },
    imgFace: {        
        height: 23,
        width: 11,
    },
    imgTwitter: {        
        height: 18,
        width: 22,
    },
    imgInstagram: {        
        height: 20,
        width: 20,
    },
    imgYoutube: {        
        height: 23,
        width: 20,
    }
})

export default styles;