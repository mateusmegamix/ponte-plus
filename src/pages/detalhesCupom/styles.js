import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    viewcupom: {
        width: '100%',
    },
    detalheCupom: {
        marginTop: '15%',
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        width: 278,
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 1,
        ...ifIphoneX({
            marginTop: 50
        })
    },
    header: {
        width: 280,
        marginTop: 50

    },
    imgTopo: {
        width: '100%',
        position: 'absolute',
        top: 0
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,

    },
    logo: {
        marginTop: 50,
        marginBottom: 45,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        width: 145,
        height: 90,

        // borderColor: 'red',
        // borderWidth: 2
    },
    info: {
        width: '100%',
        height: 65,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    txtInfo: {
        width: '100%',
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray,

    },
    txtInfoDesc: {
        width: '100%',
        fontSize: 13,
        color: colors.gray,
        textAlign: 'center',
        lineHeight: 17
    },
    txtDestaque: {
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
        color: colors.gray,
        fontWeight: 'bold'
    },
    infoDesc: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    footer: {
        width: '100%',
        height: 80,
    },
    footerContainer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        zIndex: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        backgroundColor: colors.corPrincipal1,
    },
    vIcone: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        marginRight: 10
    },
    icon: {
        color: colors.corPrincipal1,
        textAlign: 'center',
        width: '100%',
        fontSize: 23,
        lineHeight: 40,
    },
    pontosInfo: {
        fontSize: metrics.defaultFontSizeTxt,
        color: '#ffffff'
    },
    pontosDestaque: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff'
    },


});

export default styles;
