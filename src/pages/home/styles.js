import {
    StyleSheet,Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import general from '../../config/general';

import {
    Right
} from 'native-base';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({

    containerPontos: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 10,
    },
    pontos: {
        color: colors.gray,
        fontSize: 26,
        marginTop: 5,
    },
    ptsLower: {
        color: colors.gray,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 25,
        marginLeft: 5
    },

     txtSemconexao: {
        fontSize: 19,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    iconeHome: {
        fontSize: 18,
    },
    containerTitulo: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTitu: {
        fontSize: metrics.defaulth1,
        fontWeight: 'bold',
        marginTop: 50,
        color: colors.home.h1,
        fontSize: metrics.defaulth3,
        marginBottom: 20
    },
    slide: {
        marginLeft: 13,
        marginRight: 13,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: '100%',
        flex: 1,
        borderRadius: 6
    },

    container: {
        flex: 1,
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    buttonVoltar: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 99
    },
    iconAlert: {
        fontSize: 45,
        marginTop: 30,
        color: '#000000'
    },
    txtAlertCont: {
        fontWeight: 'bold',
        width: '80%',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: metrics.defaultFontSizeTitle
    },
    alertCont: {
        backgroundColor: '#ffffff',
        width: metrics.defaultWidthModal,
        alignItems: 'center',
        paddingBottom: 30,
        borderRadius: 5
    },
    buttonContainer2: {
        width: metrics.defaultWidthPag,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonEntrar2: {
        borderRadius: 100,
        backgroundColor: '#cf9112',
        width: '80%',
        height: metrics.heightButton,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
    containerRecompensas: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 20
    },
    item: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden'

    },
    imageItem: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',

    },
    content: {
        backgroundColor: '#000000',
        paddingTop: 18,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -8,
        position: 'relative',
        zIndex: 9,
        borderRadius: 10,

    },
    titleItem: {
        fontSize: metrics.defaultFontSizeTitle,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    descriptionItem: {
        fontSize: metrics.defaultFontSizeTxt,
        color: '#ffffff',
        maxWidth: '100%'
    },
    ptsLower: {
        marginLeft: 5,
        marginBottom: 5,
        fontSize: 12
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%',
        borderRadius: 15,
        marginTop: 5,
        alignItems: 'center'
    },
    buttonResgatar: {
        backgroundColor: colors.corPrincipal1,
        width: 120,
        height: 30,
        borderRadius: 15,
        marginTop: 10
    },
    boxIndisponivel: {
        position: 'relative',
        width: 120,
        marginTop: 20

    },
    txtButton: {
        color: '#fff',
        fontFamily: 'Open Sans',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: "center",
    },
    indisponivel: {
        position: 'absolute',
        color: colors.corPrincipal1,
        fontSize: metrics.defaultFontSizeTxt,
        fontWeight: 'bold',
        top: -13,
        right: 15
    },
    ptsInsuficientes: {
        color: '#B9B9B9',
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: 'bold',
        marginTop: 5
    },
    modalContent: {
        position: 'relative',
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButtonVoltar: {
        color: colors.corPrincipal1,
        fontWeight: 'bold',
        fontSize: 24
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'space-between'
    },
    containerModal: {
        width: metrics.defaultWidthModal,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 8
    },
    textModalAvise: {
        fontSize: metrics.defaultFontSizeTitle,
        width: '100%',
        textAlign: 'center',
        marginTop: 15
    },
    titleModalAvise: {
        fontSize: metrics.defaulth2,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold'
    },
    containerBtns: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    txtBtns: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
        lineHeight: 35
    },
    btnFechar: {
        height: 35,
        width: '100%',
        backgroundColor: '#019e35',
        borderRadius: 50,
        marginTop: 15
    },
    iconSuccess: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
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
    allModal: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFull: {
        backgroundColor: colors.bgContainerFull,
        paddingBottom: Platform.OS === 'ios' ? 100 : 80,
        ...ifIphoneX({
            paddingBottom: 120
        })
    },
    txtRecompensa: {
        paddingTop: 20,
        paddingLeft: 10
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
        marginTop: 120
    },
    txtMensagemVazia: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        color: colors.graylight
    },
    header: {
        width: '100%',
        height: 350,
        textAlign: 'center',
    },
    icoMedal: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    
    containerHeader: {
        paddingTop: Platform.OS == 'ios' ? 40 : 0,
        width: metrics.defaultWidthPag,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        ...ifIphoneX(
            { marginTop: -280 } , 
            { marginTop: Platform.OS == 'ios' ? -300 : -300 } 
        ),
    },
    imgUsuario: {
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 8,
        borderColor: colors.bordaAvatar,
    },
    imgBorda: {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 82.5,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.bordaAvatarFora,
    },
    imgBg: {
        maxWidth: '100%',
        maxHeight: '100%',
        marginTop: -45
    },
    
    dadosUsuario: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '75%',

        marginTop: 20,
        marginBottom: 10,
        
        ... (general.exibeCategoriaPontos ? {paddingRight:50 } : {} ) ,
        
        height: 50,
        borderRadius: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 2,
    },
    icoMedalUser: {
        alignSelf: 'center',
        width: 80,
        height: 80,      
        borderRadius: 40
    },
    nome: {
        flexGrow:1,
        color: colors.greenUser,
        fontWeight: 'bold',
        fontSize: metrics.defaultLineHeightTxt,
        textAlign: 'center',
    },
    txtPts: {
        color: colors.white,
        fontSize: 13,
        width: '100%',
        textAlign: 'center'
    },
    notificacoes: {
        position: 'relative',
        marginRight: 6
    },
    alert: {
        position: 'absolute',
        backgroundColor: colors.headerTitulo.notificacao,
        color: colors.white,
        top: -4,
        right: -4,
        borderRadius: 100,
        textAlign: 'center',
        width: 11,
        height: 11
    },
    alertNumber: {
        fontSize: 8,
        color: colors.white,
        textAlign: 'center'
    },
    icoNotificacoes: {
        width: 23,
        height: 23,
    },

});

export default styles;