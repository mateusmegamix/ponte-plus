import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 21,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    color: '#000000',
    fontFamily: 'Open Sans',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    color: colors.cadastro.input,
    borderBottomColor: colors.cadastro.linhaInput,
    paddingLeft: 25,
    marginTop: 33,
    fontSize: metrics.fontp,
    height: 50,
  },
});

export default styles;
