
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigatorRef } from "../../App";
import colors from '../../styles/colors';


class headerPerfil extends React.Component {
  render() {
    const { titulo, navigation } = this.props;
    return (
        <View style={styles.header}>
            <View style={styles.container} >
                <TouchableOpacity activeOpacity={0.8} style={styles.btnIconBack} onPress={() => navigation.goBack(null)}>
                <Icon name="chevron-left" size={20} color={colors.white} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.hTitle}>{titulo}</Text>
            </View>
        </View>  
    );
  }
}


export default headerPerfil;
