import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import { Right } from 'native-base';

const styles = StyleSheet.create({   
    item: {
        width: metrics.defaultWidthPag,
        backgroundColor: '#ffffff',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center'
    },
    itemTitle: {
        fontSize: metrics.defaultFontSizeTitle,
        color: '#000000',
        fontWeight: 'bold'
    },
    itemDescription: {        
        fontSize: metrics.defaultFontSizeTxt,
        color: '#000000',
    },
    content: {
        flex: 1
    },
    iconCheck: {
        color: '#159b42'
    },
    iconBan: {
        color: '#e3e3e3'
    },
});

export default styles;
