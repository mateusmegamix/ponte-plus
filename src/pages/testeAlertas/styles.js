import {  StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({  
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    container: {
      width: metrics.defaultWidthPag,
      height: 250,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingTop: 25      
    },
    txtTitle: {
      color: colors.gray,
      marginBottom: 20,
      fontSize: metrics.defaultFontSizeTitle,
      width: '70%',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    txtDescricao: {
      fontSize: 12,
      color: "#2F2F2F",
      width: "85%",
      textAlign: "center",
      lineHeight: 17
    },
    buttonEntrar: {
      borderRadius: 100,
      backgroundColor: colors.bgButton,
      width: "100%",
      height: 30,
      color: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    buttonContainer: {
      height: '40%',
      width: metrics.defaultWidthPag,
      flexDirection: "row",
      justifyContent: "center"
    },
    txtButton: {
      color: colors.white,
      fontSize: metrics.defaultFontSizeTxt,
      fontWeight: 'bold'
    },
    iconMail: {
      fontSize: metrics.defaultFontSizeIcon,
      color: colors.gray,
      marginTop: 10,
      marginBottom: 10
    }
  });

  
export default styles;