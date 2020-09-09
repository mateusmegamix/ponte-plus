import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import HeaderUser from '../../components/headerUser';

class AddCod extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1}}>
        <HeaderUser navigation={navigation} />

        <View style={styles.container}>
          <Text style={styles.text}>Código de barras</Text>
          <TextInput
            style={styles.input}
            placeholder="insira o número da nota"
          />
        </View>
      </View>
    );
  }
}

export default AddCod;
