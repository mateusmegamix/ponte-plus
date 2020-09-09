import {
    StyleSheet,Platform
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { ifIphoneX } from 'react-native-iphone-x-helper';


const styles = StyleSheet.create({
    imgItem: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    transitionWidth: {
        position: 'relative',
    },
    containerDetalhes: {
        flexWrap: 'wrap',
        backgroundColor: colors.listaBeneficios.background,
        marginTop: -10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        padding: 15,
        position: 'relative',
        marginBottom: 10
    },
    containerTitle:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    titulo: {
        fontSize: metrics.defaultFontSizeTitle,
        color: colors.listaBeneficios.titulo,
        fontWeight: 'bold',
        width: '100%',
        height: 'auto',
    },
    containerPontos: {
        flexDirection: 'row',
    },
    pontos: {
        fontSize: 25,
        color: colors.listaBeneficios.pontos,
        fontWeight: 'bold',
    },
    txtPontos: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 3,
        color: colors.listaBeneficios.pontos,
    },
    descricao: {
        fontSize: metrics.defaultFontSizeTxt,
        lineHeight: metrics.defaultLineHeightTxt,
        color: colors.listaBeneficios.descricao,
        width: '100%',
    },
    prazo: {
        marginTop: 30,
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row'
    },
    iconePrazo: {
        marginRight: 10,
        color: '#000',
        fontSize: metrics.defaultFontSizeTitle,
        lineHeight: metrics.defaultLineHeightTxt,
        fontWeight: 'bold'
    },
    txtPrazo: {
        color: '#000',
        fontSize: 12,
        lineHeight: metrics.defaultLineHeightTxt,
    },
    btnUnidades: {
        height: metrics.heightButton,
        justifyContent: 'center',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: colors.btResgate,
        marginTop: 10
    },
    txtUnidades: {
        fontSize: metrics.fontButton,
        color: colors.corPrincipal1,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    btnResgate: {
        marginTop: 20,
        marginBottom: 50,
        backgroundColor: colors.corPrincipal1
    },
    btnAviseme: {
        marginTop: 20,
        marginBottom: 50
    },
    btnIndisponivel: {
        backgroundColor: colors.graylight,
        marginTop: 20,
        marginBottom: 50
    },
    btnRecusar: {
        backgroundColor: colors.graylight,
        borderRadius: 100,
        width: '40%',
        height: metrics.heightButton,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 5
    },
    btnAceitar: {
        backgroundColor: colors.corPrincipal1,
        borderRadius: 100,
        width: '40%',
        height: metrics.heightButton,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5
    },
    fontButton: {
        fontSize: metrics.fontButton,
    },
    txtIndisponivel: {
        color: colors.corPrincipal1,
        width: '100%',
        textAlign: 'center',
        fontSize: metrics.fontButton,
        marginTop: 15,
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold'
    },
    btnNo: {
        backgroundColor: colors.corPrincipal1,
        borderRadius: 100,
        width: '40%',
        height: metrics.heightButton,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 5
    },
    btnYes: {
        backgroundColor: colors.btnYes,
        borderRadius: 100,
        width: '40%',
        height: metrics.heightButton,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5
    },
    containerFull: {
        flex: 1,
        paddingBottom: 0,
        ...ifIphoneX({
            paddingBottom: 0
        }),
        backgroundColor: colors.bgContainerFull
    }
});

export default styles;