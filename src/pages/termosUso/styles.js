import {  StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { Right } from 'native-base';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white
    },
    conteudo: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: colors.white,
      width: '100%',
      padding: 10
    },
    logo: {
      width: 200,
      height: 114,
      resizeMode: 'contain',
      marginTop: 50
    },
    txtEsquecisenha: {
      color: '#2F2F2F',
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 16,
      width: 200
    },
    txtDescricao: {
      fontSize: 12,
      color: "#2F2F2F",
      width: metrics.defaultWidthPag,
      textAlign: "justify",
      lineHeight: 17
    },
    footer: {
      width: metrics.defaultWidthPag,
      textAlign: "left",
      marginBottom: 10
    },
    iconTimes: {
        color: colors.cadastro.termosUso.botaoFechar,
        fontSize: 23,
        position: 'absolute',
        top: 30,
        right: 25,
        zIndex: 1
    },
    iconBack: {
      width: 45
    }
  
  });
  
  export default styles;
