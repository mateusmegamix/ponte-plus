import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import styles from './styles';
import images from '../../styles/images';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={images.bgComponentAlert}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logobranca.png')}
            style={styles.logo}
          />

          <Text style={styles.iconMail}>
            <FontAwesome>{Icons.check}</FontAwesome>
          </Text>

          <Text style={styles.txtTitle}>{`DADOS SALVOS COM SUCESSO!`}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonEntrar}>
              <Text style={styles.txtButton}> CONTINUAR </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default login;
