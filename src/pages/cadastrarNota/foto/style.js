import metrics from '../../../styles/metrics';
import colors from '../../../styles/colors';
import {
    StyleSheet, Platform
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    headerCamera: {
        backgroundColor: colors.notas.statusBar.background,
        alignItems: 'center',
        height: Platform.OS == 'ios'? 70 : 50,
        ...ifIphoneX({
            height: 90,
            paddingTop: 20
        })
    },
    containerTop: {
        paddingTop: Platform.OS == 'ios' ? 20 : null,
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
    },
    boolquestion: {
        backgroundColor: colors.notas.bgIconDuvidas,
        width: 25,
        height: 25,
        textAlign: 'center',
        borderRadius: 20,
        marginTop: 10
    },
    iconequestion: {
        color: colors.notas.txtIconDuvidas,
        fontSize: 19,
        lineHeight: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.notas.duvidas.background,
        flex: 1, 
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    txtTitle: {
        color: '#2F2F2F',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 16,
        width: '70%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    modalContent: {
        width: metrics.defaultWidthModal,
        height: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },
    modalContentTd: {
        height: '100%',
        alignItems: 'center',
        paddingTop: 80,
        paddingHorizontal: 60,
    },
    txtDesc: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: metrics.defaultFontSizeTitle
    },
    buttonEntendi: {
        borderRadius: 100,
        backgroundColor: colors.yellow,
        width: "100%",
        height: 43,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    txtButton: {
        color: '#fff',
        fontSize: metrics.fontButton,
        fontWeight: 'bold'
    },
    txtNo: {
        fontSize: metrics.defaultFontSizeTxt,
        color: '#2F2F2F',
        textAlign: 'center',
        width: '100%',
        marginTop: 10
    },
    btnIconClose: {
        paddingTop: Platform.OS == 'ios' ? 15 : null,
        position: 'absolute',
        top: 13,
        right: '3%',
        zIndex: 99
    },
    btnIconCloseModal: {
        color: colors.notas.duvidas.btnFechar,
        marginRight: Platform.OS == 'ios' ? 11 : null,
        marginTop: Platform.OS == 'ios' ? 20 : null,        
        ...ifIphoneX({
            marginTop: 35
        })
    },
    iconClose: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24
    },
    duvidas: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colortxt: {
        color: '#fff',
        fontSize: metrics.defaultFontSizeTitle,
        marginTop: 8,
        marginLeft: 10
    },
    ListDuvidas: {
        width: '100%',
    },
    txtRow: {
        color: colors.notas.duvidas.description,
        fontSize: metrics.defaultFontSizeTxt,
        lineHeight: metrics.defaultLineHeightTxt,
        width: 250,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 35,
        alignItems: 'center',
    },
    boolNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.notas.duvidas.bgIcon,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15
    },
    txtNumber: {
        color: '#FFF',
        lineHeight: 30,
        fontSize: 20,
        width: '100%',
        textAlign: 'center'
    },
    h1Modal: {
        color: colors.notas.duvidas.h1,
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: '600',
        textAlign: 'center',
        width: '100%',
        marginBottom: 50
    },
    buttonOkEntendi: {
        borderRadius: 100,
        backgroundColor: colors.notas.duvidas.button,
        width: '75%',
        height: 43,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        position: 'absolute',
        bottom: 50
    },
    containerCamera: {
        flex: 1,
    },
    capture: {
        width: 65,
        height: 65,
        backgroundColor: colors.notas.bgTirarFoto,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    iconeCamera: {
        color: colors.notas.iconTirarFoto,
        fontSize: 30,
    },
    bgTrasnparent: {
        backgroundColor: 'transparent'
    },
    buttons: {
        width: '70%',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop:10, 
        ...ifIphoneX({
            marginTop: 18
        }),
    },
    fotoNota: {
        width: '100%',
        height: '100%',
    },
    txtFoto: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        marginBottom: 5
    },
    buttonSpecific: {
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
});
export default styles;