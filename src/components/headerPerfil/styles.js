import {  StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { Right } from 'native-base';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#000000',
        textAlign: 'center'
    },
    container: {
        width: '85%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between'
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: metrics.defaultFontSizeTxt,
        textAlign: 'center',
        width: '95%'
    },
    iconBack: {
        color: '#ffffff',
        fontSize: 21
    }
});

export default styles;
