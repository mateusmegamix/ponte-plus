import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
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
        justifyContent: 'space-between'
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
        width: '95%'
    },
    containerSearch: {
        zIndex: 1,
        position: 'absolute',
        // left: '80%',
        top: metrics.screenHeight - 170,
        left: metrics.screenWidth - 75,
        ...ifIphoneX({
            top: metrics.screenHeight - 185
        })
    },
    buttonSearch: {
        backgroundColor: colors.corSecundaria1,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSearch: {
        color: colors.white,
        marginTop: -3,
    },
    container: {
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    icon: {
        color: colors.white,
        width: '5%'
    },
    imgItem: {
        width: '100%',
        height: 150,
        resizeMode: 'cover'
    },
    containerDetalhes: {
        width: metrics.defaultWidthPag,
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 15,
        paddingBottom: 15,
        position: 'relative',
        marginBottom: 10,
    },
    titulo: {
        fontSize: metrics.defaulth2,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    pontos: {
        fontSize: metrics.defaulth3,
        color: colors.corPrincipal1,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 15
    },
    txtPontos: {
        fontSize: metrics.defaulth4,
    },
    descricao: {
        fontSize: metrics.defaultFontSizeTxt,
        lineHeight: metrics.defaultLineHeightTxt,
        color: '#ffffff',
    },
    bold: {
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15,
        borderRadius: 8,
        width: '100%',
        zIndex: 0
    },
    imgItem: {
        height: 68,
        width: 143
    },
    nameItem: {
        flex: 1,
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: 'bold'
    },
    containerMensagemVazia: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
        height: '100%',
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
    titlePag: {
        fontSize: metrics.defaultFontSizeTxt,
        width: '100%',
        fontWeight: metrics.defaultFontWeightTitle,
        textAlign: metrics.defaultTextAlignTitle,
        marginTop: Platform.OS == 'ios' ? 0 : 10,
        marginBottom: Platform.OS == 'ios' ? 15 : 15
    },
    containerFull: {
        paddingBottom: 40,
        backgroundColor: colors.grayrow,
        height: metrics.screenHeight
    },
    // MODAL
    iconClose: {
        position: 'absolute',
        top: Platform.OS == 'ios' ? '8%' :'4%',
        left: '89%',
        color: colors.corPrincipal1,
        fontWeight: 'bold',
        fontSize: 24,
        zIndex: 1
    },
    modalTopoTransparent: {
        backgroundColor: 'rgba(6, 6, 6, 0.6)',
        width: '100%',
        flexGrow: 1,
        zIndex: 0
    },
    modalContent: {
        backgroundColor: '#F3F3F3',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 7,
        ...ifIphoneX({
            marginBottom: 0
        })
    },
    boxModal: {
        width: '85%',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30
    },
    txtH1: {
        textAlign: 'center',
        color: colors.black,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 25,
        letterSpacing: 1
    },
    descricaoModal: {
        width: '98%',
        textAlign: 'center',
        color: colors.black,
        marginBottom: 20,
        fontSize: 13
    },
    containerPick: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: Platform.OS == 'android' ? 'center' : null,
        marginBottom: 15,
        marginTop: 15,
        borderBottomColor: colors.graylight,
        borderBottomWidth: 1,
    },
    containerPickerIOS: {
        paddingBottom: 15,
    },
    containerPickAndroid: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: colors.graylight,
    },
    picker: {
        width: '80%',
        position: 'absolute',
        left: 30
    },
    camposSelect: {
        width: '100%'
    },
    camposInput: {
        fontSize: 15.5,
        paddingLeft: 10,
        fontFamily: 'Open Sans'
    },
    buttonEnviar: {
        width: '100%',
        backgroundColor: colors.corPrincipal1,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginTop: 30,
    },
    buttonVoltar: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
    txtButton: {
        color: colors.white,
        fontWeight: 'bold'
    },
    txtButtonVoltar: {
        color: colors.graylight
    },
    buttonFile: {
        backgroundColor: colors.corPrincipal1,
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
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 27,
        fontSize: 13
    }
});

export default styles;
