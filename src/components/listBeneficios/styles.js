import {
    StyleSheet
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import {
    Right
} from 'native-base';

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
    },
    iconeHome: {
        fontSize: 18,
    },
    containerTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: metrics.defaulth3
    },
    txtTitu: {
        fontSize: metrics.defaulth1,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: -4,
        color: '#000000',
        fontSize: metrics.defaulth3
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        overflow: 'hidden'
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
        flex: 1
    },

    container: {
        flex: 1,
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnDestaque: {
        width: '50%',
        backgroundColor: colors.graylight,
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
        color: colors.graylight,
        fontSize: metrics.defaultFontSizeTxt,
        textAlign: 'center',
        lineHeight: 25,
        fontWeight: 'bold'
    },
    containerRecompensas: {
        width: metrics.defaultWidthPag,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 20
    },
    item: {
        marginTop: 5,
        overflow: 'hidden',
    },
    imageItem: {
        width: '100%',
        height: 250,
    },
    content: {
        position: 'relative',
        backgroundColor: colors.listaBeneficios.background,
        paddingTop: 18,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 4,
        width: metrics.defaultWidthPag,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -6,
        marginBottom: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    titleItem: {
        fontSize: metrics.defaultFontSizeTitle,
        color: colors.listaBeneficios.titulo,
        fontWeight: 'bold',
        marginBottom: 15
    },
    descriptionItem: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.listaBeneficios.descricao,
        maxWidth: '100%'
    },
    footer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 25,
        alignItems: 'flex-start',
    },
    containerPontos: {
        width: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    pontos: {
        color: colors.listaBeneficios.pontos,
        fontSize: metrics.defaultPontosLista,
        fontWeight: 'bold',
        marginTop: 5,
    },
    ptsLower: {
        color: colors.listaBeneficios.pontos,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5
    },
    containerBtns: {
        width: '55%',
    },
    buttonGeneric: {
        width: metrics.btnListBeneficios.width,
        height: metrics.btnListBeneficios.height,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 50,
    },
    buttonResgatar: {
        backgroundColor: colors.listaBeneficios.resgatar,
    },
    buttonAviseMe: {
        backgroundColor: colors.listaBeneficios.aviseme,
        marginTop: 10
    },
    buttonIndisponivel: {
        backgroundColor: colors.listaBeneficios.indisponivel,
    },
    txtButton: {
        fontSize: metrics.defaultFontSizeTxt,
    },
    indisponivel: {
        color: colors.listaBeneficios.txtIndisponivel,
        fontSize: metrics.defaultFontSizeTxt,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ptsInsuficientes: {
        color: colors.graylight,
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: 'bold',
        marginTop: -15
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    allModal: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerModal: {
        backgroundColor: colors.white,
        width: metrics.defaultWidthModal,
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 20,
        borderRadius: 5
    },
    iconAlert: {
        fontSize: 45,
        marginTop: 30,
        color: '#000000'
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
    titleModalAvise: {
        fontSize: metrics.defaultFontSizeTxt,
        flexWrap: 'nowrap',
        color: "#2F2F2F",
        width: "85%",
        textAlign: "center",
        lineHeight: 17
    },
    titleModalAviseTitulo: {
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: '85%',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: metrics.defaultFontSizeTitle
    },
    textModalAvise: {
        fontSize: metrics.defaultFontSizeTxt,
        flexWrap: 'nowrap',
        color: "#2F2F2F",
        width: "85%",
        textAlign: "center",
        lineHeight: 17
    },
    bold: {
        fontWeight: 'bold'
    },
    btnFechar: {
        borderRadius: 100,
        backgroundColor: colors.corPrincipal1,
        width: '80%',
        height: metrics.heightButton,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
    txtBtns: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
        lineHeight: 35
    },
});

export default styles;