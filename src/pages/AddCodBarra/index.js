import React, {Component} from 'react';
import {TouchableOpacity, View, TextInput, Text} from 'react-native';
import styles from './styles';
import HeaderUser from '../../components/headerUser';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class AddCod extends Component {
  // validateInputs(text, type) {
  //   let numreg = /^[0-9]+$/;
  //   if (type == 'username') {
  //     if (numreg.test(text)) {
  //       //test ok
  //     } else {
  //       alert('por favor insira apenas números');
  //     }
  //   }
  // }
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <HeaderUser navigation={navigation} />
        <View style={styles.containerText}>
          <Text style={styles.text}>Insira o número da nota</Text>
          <View style={styles.containerNota}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              autoFocus="true"
              //onChangeText={(text) => this.validateInputs(text, 'username')}
              //value={this.state.myNumber}
              maxLength={10}
            />
            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.iconNota}
                name="arrow-right"
                color="#000000"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AddCod;
