import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { Right } from 'native-base';

const styles = StyleSheet.create({
    txt: {
        color: '#fff'
    },
    menu: {
        width: '100%',
        backgroundColor: '#000000',
        paddingTop: 10,
        paddingBottom: 20,
    },
    container: {
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
        borderRadius: 50
    },
    btnSemDestaque: {
        width: '50%',
        height: 23
    },
    txtDestaque: {
        width: '100%',
        color: '#ffffff',
        fontSize: metrics.defaultFontSizeBtnTop,
        textAlign: 'center',
        lineHeight: 23,
        fontWeight: 'bold'
    },
    txtSemDestaque: {
        width: '100%',
        color: '#B9B9B9',
        fontSize: metrics.defaultFontSizeBtnTop,
        textAlign: 'center',
        lineHeight: 23,
        fontWeight: 'bold'
    },
    containerExtrato: {
        width: metrics.defaultWidthPag,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 20
    },
    title: {
        fontSize: metrics.defaultFontSizeTxt,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20
    },
    itens: {
        backgroundColor: '#ffffff',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        borderRadius: 10
    },
    data: {
        fontSize: 10,
        paddingLeft: 20,
        marginBottom: 10
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingRight: 15,
        paddingLeft: 15,
        position: 'relative',
        alignItems: 'center',
    },
    dadosItem: {
        justifyContent: 'space-between',
        flex: 1
    },
    iconItem: {
        width: 20
    },
    ptsItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        top: 0,
    },
    dataItem: {
        fontSize: 10
    },
    statusItem: {
        fontSize: metrics.defaultFontSizeTxt,
        fontWeight: 'bold'
    },
    msgItem: {
        fontSize: 9
    },
    pts: {
        fontSize: 10,
        marginRight: 10
    },
    borderItens: {
        width: '100%',
        height: 1,
        backgroundColor: '#E0E0E0',
        marginBottom: 10,
        marginTop: 10
    },
    bgTrasnparent: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    txtbranco: {
        color: '#fff'
    },
    btnIconClose: {
        position: 'absolute',
        top: 10,
        right: 10

    },
    iconClose: {
        color: colors.corPrincipal1,
        fontSize: 23
    },
    modalContent: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 80

    }

});

export default styles;
