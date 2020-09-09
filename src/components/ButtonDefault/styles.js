import { StyleSheet, Platform } from 'react-native';
import metrics from '../../styles/metrics';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';



const styles = StyleSheet.create({
  buttonEntrar: {
    flexDirection: 'row',
    borderRadius: 100,
    width: '85%',
    height: metrics.defaultHeightButton,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.corPrincipal1,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: Platform.OS == 'ios' ? 2 : 10,
    // },
    // shadowOpacity: Platform.OS == 'ios' ? 0.6 : 1,
    // shadowRadius: Platform.OS == 'ios' ? 2 : 1,
    // elevation: Platform.OS == 'ios' ? null : 5,
  },
  icone: {
    color: colors.white,    
    marginRight: 15
  },
  txtButton: {
    color: colors.white,
    fontFamily: 'Open Sans',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;