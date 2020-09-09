import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    bgPag: {
        backgroundColor: '#F3F3F3'
    },
    header: {
        width: '100%',
        backgroundColor: colors.corPrincipal1,
        textAlign: 'center',
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
        color: colors.white,
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
    container: {
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    listMsg: {
        width: '100%'
    },
    assunto: {
        color: colors.black,
        fontSize: metrics.defaultFontSizeTxt,
        width: '100%',
        paddingBottom: 10,
        paddingTop: 15
    },
    data: {
        width: '100%',
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.graylight
    },
    bolder: {
        fontWeight: 'bold'
    },
    question: {
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: colors.white,
        position: 'relative',
    },
    overVisible: {
        width: metrics.defaultWidthPag,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    titleQuestion: {
        color: colors.black,
        fontSize: metrics.defaultFontSizeTxt,
    },
    imgQuestion: {
        width: '100%',
        marginTop: 15,
        height: 250
    },
    answer: {
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: colors.faleConosco.mensagem.bgMensagemGestor,
        position: 'relative'
    },
    arrow: {
        position: 'absolute',
        top: 13,
        left: -9,
        width: 12,
        height: 22,
    },
    arrowWhite: {
        position: 'absolute',
        top: 13,
        right: -12,
        width: 12,
        height: 22
    },
    titleAnswer: {
        color: colors.faleConosco.mensagem.corResposta,
        fontSize: metrics.defaultFontSizeTxt,
    },
    nameAnswer: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.faleConosco.mensagem.tituloMensagem,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        height: metrics.defaultHeightButton,
        marginTop: 20,
        marginBottom: 30,
    },
    txtButton: {
        fontSize: metrics.defaultFontSizeTitle,
    },
    /*MODAL*/
    modalTopoTransparent: {
        backgroundColor: 'rgba(6, 6, 6, 0.75)',
        width: '100%',
        flexGrow: 1
    },
    modalContent: {
        backgroundColor: '#F3F3F3',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 7,
        ...ifIphoneX({
            marginBottom: 20
        })
    },
    textArea: {
        backgroundColor: colors.white,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        height: 80
    },
    txtForm: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.black,
        paddingTop: 15
    },
    inputFile: {
        backgroundColor: colors.white,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        height: 35
    },
    vFile: {
        width: '100%',
        marginTop: 30,
        position: 'relative'
    },
    buttonEnviar: {
        width: '100%',
        height: metrics.defaultHeightButton,
        marginTop: 10,
    },
    buttonVoltar: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    },
    txtButtonVoltar: {
        color: colors.graylight
    },
    buttonFile: {
        backgroundColor: colors.faleConosco.btnFotoCarregar,
        width: 84,
        height: 27,
        top: 4,
        right: 7,
        position: 'absolute',
        borderRadius: 20
    },
    buttonRemoveFile: {
        top: 7,
        right: 100,
        position: 'absolute',
    },
    buttonNovaMsg: {
        marginBottom: Platform.OS == 'ios' ? 0 : 25
    },
    buttonRemoveFile_text: {
        color: colors.corPrincipal1,
    },
    txtBtnFile: {       
        textAlign: 'center',
        fontSize: 12
    }
});

export default styles;
