import {  StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { Right } from 'native-base';
import { ifIphoneX } from 'react-native-iphone-x-helper'

import general from '../../config/general';

const styles = StyleSheet.create({
    header: {
        ...ifIphoneX({
            paddingTop: 50,
        },{
            paddingTop: Platform.OS == 'ios' ? 20 : 0
        }),
        width: '100%',
        backgroundColor: colors.headerTitulo.background,
        textAlign: 'center'
    },
    icoMedal: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    container: {
        width: metrics.defaultWidthPag,
        height: metrics.headerTitulo.height,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between'
    },
    dados: {
        flexDirection: 'row',   
        flexWrap: 'wrap',     
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        ... (!general.exibeCategoriaPontos ? {marginLeft: 20} : {} ) 
    },
    nome: {
        color: colors.headerTitulo.nomeUsuario,
        fontWeight: 'bold',
        fontSize: metrics.defaultFontSizeTxt,
        width: '100%',
        textAlign: 'center',
    },
    txtPts: {
        color: colors.headerTitulo.pontos,
        fontSize: 13,
        width: '100%',
        textAlign: 'center'
    },
    pts: {
        color: colors.headerTitulo.pontos
    },
    notificacoes: {
        position: 'relative',
        marginRight: 6
    },
    alert: {
        position: 'absolute',
        backgroundColor: colors.headerTitulo.notificacao,
        top: -4,
        right: -4,
        borderRadius: 5,
        textAlign: 'center',
        width: 11,
        height: 11,
        justifyContent: 'center'
    },
    alertNumber: {
        fontSize: 8,
        color: colors.white,
        textAlign: 'center'
    },
    icoNotificacoes: {
        width: 23,
        height: 23
    }

});

export default styles;
