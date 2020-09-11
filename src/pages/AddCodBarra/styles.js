import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    color: '#000000',
    fontFamily: 'Open Sans',
  },
  containerNota: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '50%',
    borderBottomWidth: 1,
    color: colors.cadastro.input,
    borderBottomColor: colors.cadastro.linhaInput,
    paddingLeft: 5,
    marginTop: 30,
    fontSize: metrics.fontp,
    height: 30,
    fontWeight: 'bold',
  },
  iconNota: {
    marginBottom: 0,
    height: 30,
    right: -10,
    fontSize: 30,
  },
});

export default styles;
