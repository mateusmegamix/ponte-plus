import {
    StyleSheet
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import {
    Right
} from 'native-base';

const styles = StyleSheet.create({
    containerGeral: {
        paddingBottom: 50,
        backgroundColor: '#F3F3F3',
    },
    menu: {
        width: '100%',
        backgroundColor: colors.corPrincipal1,
        paddingTop: 10,
        paddingBottom: 20,
    },
    wrapper: {
        marginTop: 20,
    },
    txt: {

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
        backgroundColor: '#B9B9B9',
        height: 23,
        justifyContent: 'center',
        borderRadius: 50
    },
    btnSemDestaque: {
        width: '50%',
        height: 23,
        justifyContent: 'center',
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
    containerRecompensas: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 20
    },
    title: {
        marginHorizontal: 20,
        marginTop: metrics.defaultMarginTopTitle,
        textAlign: metrics.defaultTextAlignTitle,
        fontWeight: metrics.defaultFontWeightTitle,
        marginBottom: 15
    },
    item: {
        marginTop: 20,
        overflow: 'hidden'

    },
    imageItem: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    content: {
        position: 'relative',
        backgroundColor: '#000000',
        paddingTop: 18,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -8,
        borderRadius: 10,
        zIndex: 9,
        width: metrics.defaultWidthPag,
        marginLeft: 'auto',
        marginRight: 'auto'

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
    pontos: {
        color: colors.corPrincipal1,
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: 'bold',
        marginTop: 5
    },
    ptsLower: {
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
    // boxIndisponivel: {
    //     position: 'relative',
    //     width: 120,
    //     marginTop: 20

    // },
    boxIndisponivel: {
        backgroundColor: '#B9B9B9',
        width: 135,
        height: 30,
        borderRadius: 15,
        marginTop: 10
    },
    txtButton: {
        color: '#ffffff',
        fontSize: metrics.defaultFontSizeTxt,
        lineHeight: 26,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold'
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
        alignItems: 'center'
    },
    containerModal: {
        width: metrics.defaultWidthModal,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 8
    },

    iconSuccess: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    titleModalAvise: {
        fontSize: metrics.defaulth2,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textModalAvise: {
        fontSize: metrics.defaultFontSizeTitle,
        width: '100%',
        textAlign: 'center',
        marginTop: 25
    },
    bold: {
        fontWeight: 'bold'
    },
    btnFechar: {
        height: 35,
        width: '100%',
        backgroundColor: '#019e35',
        borderRadius: 50,
        marginTop: 15
    },
    containerBtns: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    btnNo: {
        height: 35,
        width: '40%',
        borderRadius: 50,
        backgroundColor: colors.corPrincipal1,
        marginTop: 15
    },
    btnYes: {
        height: 35,
        width: '40%',
        backgroundColor: '#019e35',
        borderRadius: 50,
        marginTop: 15
    },
    txtBtns: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
        lineHeight: 35
    },
    boxIndisponivelAvise: {
        marginTop: 20
    },
});

export default styles;