import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './styles';
import FontAwesome, {Icons} from 'react-native-fontawesome';

class Modais extends React.Component {
  renderAlerta(login) {
    return (
      <View>
        <View style={styles.bgTrasnparent}>
          <TouchableOpacity
            style={styles.btnIconClose}
            onPress={() => {
              this.setModalVisible(false);
            }}></TouchableOpacity>
          <View style={styles.modalContent}>
            <Text style={styles.txtbranco}>{login.message}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderErrado() {
    return (
      <View>
        <View style={styles.bgTrasnparent}>
          <TouchableOpacity
            style={styles.btnIconClose}
            onPress={() => {
              this.setModalVisible(false);
            }}>
            <FontAwesome style={styles.iconClose}>{Icons.times}</FontAwesome>
          </TouchableOpacity>
          <View style={styles.modalContent}>{/* <DetalhesExtrato /> */}</View>
        </View>
      </View>
    );
  }

  renderCorreto() {
    return (
      <View>
        <View style={styles.bgTrasnparent}>
          <TouchableOpacity
            style={styles.btnIconClose}
            onPress={() => {
              this.setModalVisible(false);
            }}>
            <FontAwesome style={styles.iconClose}>{Icons.times}</FontAwesome>
          </TouchableOpacity>
          <View style={styles.modalContent}>{/* <DetalhesExtrato /> */}</View>
        </View>
      </View>
    );
  }

  render() {
    const {login} = this.props;

    //console.log(login.icon)
    if (login.icon == 'ALERT') {
      return this.renderAlerta(login);
    }
    return <View />;
  }
}
export default Modais;
