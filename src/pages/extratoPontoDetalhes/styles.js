import {
    StyleSheet, Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
    header: {
        height: 171,
        width: 282,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imgTopo: {
        width: '100%',
        position: 'absolute',
        top: 0
    },
    title: {
        color: '#000000',
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: 'bold',
        marginTop: 20
    },
    logo: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 68,
        width: 68,
        borderRadius: 34,
    },
    nameLoja: {
        fontSize: 12,
        color: colors.gray,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    info: {
        width: '100%',
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoNone: {
        width: 1,
        backgroundColor: 'transparent'
    },
    infoT: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtInfo: {
        width: '100%',
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray
    },
    txtInfoValidacao:{
        width: '100%',
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray,
        marginTop: 10
    },
    txtInfoMensagem: {
        width: '100%',
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray,
    },
    txtDestaque: {
        width: '100%',
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray,
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        height: 79,
        backgroundColor: '#fff',
        borderTopColor: 'transparent',
        marginTop: -5
    },
    footerContainer: {
        width: '100%',
        height: 79,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    vIcone: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        marginRight: 10
    },
    icon: {
        textAlign: 'center',
        width: '100%',
        fontSize: 23,
        lineHeight: 40,
    },
    iconG: {
        color: '#009e35',
    },
    iconG2: {
        color: colors.corPrincipal1,
    },
    iconR: {
        color: 'red',
    },
    iconY: {
        color: 'red',
    },
    pontosInfo: {
        fontSize: metrics.defaultFontSizeTxt,
        color: '#ffffff'
    },
    pontosDestaque: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign:'center'
    },


});

export default styles;