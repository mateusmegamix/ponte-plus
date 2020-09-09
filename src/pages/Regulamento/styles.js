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
        // lineHeight: 45
    },
    iconBack: {
        color: '#ffffff',
        fontSize: 21,
        // lineHeight: 45
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
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txtTitle: {
        fontSize: metrics.defaultFontSizeTitleRegulamento,
        width: '100%',
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 20,
        textAlign: 'center'
    },
    txtDescripion: {
        fontSize: metrics.defaultFontSizeTxt,
        width: '100%',
        color: '#000000',
        marginTop: 20
    },
});

export default styles;