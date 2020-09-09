import {  StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.corPrincipal1,
        justifyContent: 'space-around',
        height: 45,
        flexDirection: 'row'
    },
    container: {
        width: metrics.defaultWidthPag,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    icon: {
        color: colors.white,
        lineHeight: 45,
    },
    hTitle: {
        fontSize: metrics.defaultFontSizeTitle,
        color: colors.white,
        textAlign: 'center',
        lineHeight: 45,
        width: '95%',
        fontWeight: 'bold'
    },
    imgItem: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    containerDestalhes: {
        width: metrics.defaultWidthPag,
        backgroundColor: colors.notificacoes.interna.bgContainer,
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
        fontSize: metrics.defaulth3,
        color: colors.notificacoes.interna.titulo,
        fontWeight: 'bold'
    },
    data: {
        fontSize: metrics.defaulth4,
        color: colors.notificacoes.interna.data,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 15        
    },
    descricao: {
        fontSize: metrics.defaultFontSizeTxt,
        lineHeight: metrics.defaultLineHeightTxt,
        color: colors.notificacoes.interna.descricao,        
    },
    btnResgate: {
        height: metrics.heightButton,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: colors.notificacoes.interna.bgBotao,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 25
    },
    txtResgate: {
        color: '#ffffff',
        width: '100%',
        textAlign: 'center',
        fontSize: metrics.fontButton,
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: -5
    },
});

export default styles;
