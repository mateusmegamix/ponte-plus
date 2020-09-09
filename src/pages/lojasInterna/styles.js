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
        ...ifIphoneX({
            paddingTop: 40
        }),
        height: Platform.OS == "ios" ?  ifIphoneX(100,70) : 45,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
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
        ...ifIphoneX({
            marginRight: 100
        })
    },
    container: {
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    icon: {
        color: colors.white,
        width: '10%'
    },
    viewlogo: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    imgItemLogo: {
        width: '50%',
        height: 240,
        resizeMode: 'contain'
    },
    imgItem: {
        width: '100%',
        height: 240,
        resizeMode: 'cover'
    },
    containerDestalhes: {
        width: metrics.defaultWidthPag,
        backgroundColor: colors.white,
        marginTop: -10,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
        marginBottom: 10
    },
    titulo: {
        fontSize: metrics.defaulth2,
        color: colors.corPrincipal1,
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
        color: colors.gray,
    },
    bold: {
        fontWeight: 'bold'
    },
    titleItem: {
        fontSize: metrics.defaultFontSizeTxt,
        fontWeight: 'bold',
        color: colors.gray,
        marginTop: 20
    },
    descItem: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray
    }

});

export default styles;
