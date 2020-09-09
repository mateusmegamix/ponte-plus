import {  StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
    detalheCupom: {
        backgroundColor: '#ffffff',
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        zIndex: 1
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
        color: '#000000',
        textAlign: 'center',
        fontSize: metrics.defaultFontSizeTitle,
        fontWeight: 'bold',
        // marginTop: 50
    },
    logo: {        
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
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
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.gray,
        textAlign: 'center',
        fontWeight: 'bold',
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
        height: 78,
    },
    footerContainer: {
        width: '100%',
        height: 78,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',   
        marginBottom: 0,     
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
  