import {  StyleSheet, Platform } from 'react-native';
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
        marginRight: 'auto'

    },
    dataItem: {
        textAlign: 'center',
        width: '100%',
        color: colors.gray,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
	},
    camposInput: {
        width: "100%",
        borderBottomWidth: 1,
        color: '#2F2F2F',
        borderBottomColor: '#2F2F2F',
        paddingLeft: 25,
        marginTop: -32
    },
    itemPergunta: {
        padding: 20,
        backgroundColor: colors.white,
        marginTop: 15,
        borderRadius: 6,
    },
    tituloPergunta: {
        fontSize: metrics.defaultFontSizeTxt,
        width: '100%',
        color: colors.gray,
        fontWeight: 'bold'
    },
    containerFull: {
        height: '100%',
        backgroundColor: colors.bgContainerFull,
    }
});

export default styles;