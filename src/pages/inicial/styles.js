import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

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
    container: {
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    },
    titacord: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 20,
    },
    titacordBorder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 10,        
        borderColor: colors.graylight
    },
    textacord: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 15,
    },
    icoSeta: {
        fontSize: 19,
        color: '#000000',
        fontWeight: 'bold'
    },
    iconeHome: {
        fontSize: 18,
    },
    btnIconBack: {
        height: 45,
        width: '10%',
        lineHeight: 45
    },
    iconBack: {
        color: '#ffffff',
        fontSize: 21,
        lineHeight: 45
    },
    hTitle: {
        fontSize: metrics.defaultFontSizeTitle,
        color: colors.white,
        textAlign: 'center',
        lineHeight: 45,
        width: '90%',
        paddingRight: '10%',
        fontWeight: 'bold'
    },
    logo: {
        width: 200,
        height: 114,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        marginBottom: 10
    },
    txtChamada: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.black,
        textAlign: 'center',
        lineHeight: metrics.defaultLineHeightTxt,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 30,
    },
    buttonRegulamento: {
        backgroundColor: colors.inicial.btnRegulamento,
        width: metrics.btnSobre.width,
        height: metrics.btnSobre.height,
        marginRight: 10
    },
    buttonDuvidas: {
        backgroundColor: colors.inicial.btnDuvidas,
        width: metrics.btnSobre.width,
        height: metrics.btnSobre.height,
        marginLeft: 10
    },
    txtButton: {
        fontSize: metrics.defaultFontSizeTxt,
    },
    titleConteudo: {
        textAlign: 'center',
        fontSize: 18,
        width: '100%',
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: -70
    },
    containerTxt: {
        backgroundColor: colors.white,
        padding: metrics.defaultPadding,
        marginBottom: 20,
        borderRadius: 7
    },
    content: {
        color: '#000000',

    },
    txtConteudo: {
        fontSize: metrics.defaultFontSizeTxt,
        lineHeight: metrics.defaultLineHeightTxt,
        color: '#000000',
        width: '100%',
        marginBottom: 15
    },
    containerFull: {
        paddingBottom: 70
    },


});

export default styles;