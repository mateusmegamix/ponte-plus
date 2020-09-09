import {  StyleSheet ,Platform} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { Right } from 'native-base';

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.headerTitulo.background,
        flexDirection: 'row',
    },
    container: {
        width: '100%',
        height: metrics.headerTitulo.height,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnIconBack: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexGrow: 1
    },
    icon: {
        position: 'relative',
        left: 10,
        color: colors.white,
    },
    hTitle: {
        fontSize: metrics.defaultFontSizeTitle,
        color: colors.white,
        flexGrow: 1,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});

export default styles;
