import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import Alert from '../../components/Alert';
import styles from './styles';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      modalVisible: true,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={images.bgComponentAlert}>
        <View>
          <Alert
            mensagem={`PARABÉNS, \nVOCÊ GANHOU 50 PONTOS`}
            littie={require('../../assets/parabens.json')}
            btnLabel="INICIAR :)"
            visible={this.props.modalVisible}
            closeAction={() => navigation.navigate('Home')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default login;
