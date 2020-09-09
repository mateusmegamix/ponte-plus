import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    bgPag: {
        backgroundColor: '#F3F3F3'
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
    containerPick: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: colors.graylight
    },
    assunto: {
        color: '#000000',
        fontSize: metrics.defaultFontSizeTxt,
        width: '100%',
        paddingBottom: 10,
        paddingTop: 15
    },
    data: {
        width: '100%',
        fontSize: metrics.defaultFontSizeTxt,
        color: '#B9B9B9'
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
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    titleQuestion: {
        color: '#000000',
        fontSize: metrics.defaultFontSizeTxt,
    },
    imgQuestion: {
        width: '100%',
        marginTop: 15,
    },
    answer: {
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#000000',
        position: 'relative'
    },
    arrowBlack: {
        position: 'absolute',
        top: 13,
        left: -13
    },
    arrowWhite: {
        position: 'absolute',
        top: 13,
        right: -13
    },
    titleAnswer: {
        color: '#ffffff',
        fontSize: metrics.defaultFontSizeTxt,
    },
    nameAnswer: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.corPrincipal1,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        backgroundColor: colors.corPrincipal1,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginTop: 20,
        marginBottom: 10,
    },
    txtButton: {
        fontSize: metrics.defaultFontSizeTitle,
    },
    /*MODAL*/
    modalTopoTransparent: {
        backgroundColor: 'rgba(6, 6, 6, 0.75)',
        width: '100%',
        position: 'relative',
        height: metrics.screenHeight
    },
    textArea: {
        backgroundColor: '#ffffff',
        height: Platform.OS == 'ios' ? 80 : 80,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        textAlignVertical: 'top'
    },
    txtForm: {
        fontSize: metrics.defaultFontSizeTxt,
        color: '#000000',
        paddingTop: 15
    },
    inputFile: {
        backgroundColor: '#ffffff',
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
        padding: 10
    },
    imgItem: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    txtButtonVoltar: {
        color: colors.graylight
    },
    buttonRemoveFile: {
        top: 7,
        right: 100,
        position: 'absolute',
    },
    buttonRemoveFile_text: {
        color: colors.corPrincipal1,
    },
    buttonFile: {
        width: 84,
        height: 27,
        top: 4,
        right: 7,
        position: 'absolute',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtnFile: {
        fontSize: 12
    },
    camposSelectIOS: {
        width: "100%",
        color: '#2F2F2F',
        paddingLeft: 15,
        paddingTop: 12,
        marginTop: 20,
        marginBottom: 15,
        height: 40,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    camposSelect: {
        width: "100%",
        borderBottomWidth: 1,
        color: '#2F2F2F',
        borderBottomColor: '#2F2F2F',
        paddingLeft: 25,
        marginTop: 20,
        marginBottom: 15,
        height: 40,
        width: '100%',
        backgroundColor: '#ffffff',
    },
});

export default styles;
