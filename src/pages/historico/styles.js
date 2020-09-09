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
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    txtInicial: {
        fontSize: metrics.defaultFontSizeTxt,
        color: '#000000',
        lineHeight: metrics.defaultLineHeightTxt,
        marginTop: 25,
        marginBottom: 15,
    },
    buttonContainer: {
        width: '100%',
        backgroundColor: colors.corPrincipal1,
        height: metrics.defaultHeightButton,        
    },
    txtButton: {
        fontSize: metrics.defaultFontSizeTitle,
    },
    itens: {
        paddingBottom: 20,
        width: '100%'
    },
    item: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        borderRadius: 5,
        overflow: 'hidden',
        width: '100%'
    },
    tituloItem: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: metrics.defaultFontSizeTxt
    },
    descricaoItme: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: metrics.defaultFontSizeTxt  
    },
    status: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 15,
        alignItems: 'center',
    },
    statusTxt: {
        fontSize: metrics.defaultFontSizeTxt,
        color: colors.faleConosco.txtColor,
        fontWeight: 'bold',
    },
    bgNenhumaResposta: {
        backgroundColor: colors.faleConosco.bgNenhumaResposta,
    },
    bgRespostaNaoVisualizada: {
        backgroundColor: colors.faleConosco.bgRespostaNaoVisualizada
    },
    containerFull: {
        paddingBottom: 50
    },
    containerMensagemVazia: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
        paddingHorizontal: 20,
    },
    imgSmile: {
        width: 150,
        height: 150,
        marginBottom: 10,
        marginTop: 120
    },
    txtMensagemVazia: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        color: colors.graylight
    },
});

export default styles;
  