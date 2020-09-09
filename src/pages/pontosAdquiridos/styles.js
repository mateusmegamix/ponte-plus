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
      height: 230,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff'        
    },
    txtTitle: {
      color: colors.gray,
      marginBottom: 20,
      fontSize: metrics.defaultFontSizeTitle,
      width: metrics.defaultWidthPag,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    buttonEntrar: {
      borderRadius: 100,
      backgroundColor: colors.corPrincipal1,
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
      marginTop: 30,
      marginBottom: 10
    },
  });

  
export default styles;