import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  BackHandler,
} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

import {StackActions, NavigationActions} from 'react-navigation';
import {navigatorRef} from '../../App';
import images from '../../styles/images';
class semInternet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder', net: ''};
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.setState({
        net: connectionInfo.type,
      });
    });
  }

  verificaNet = () => {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.setState({
        net: connectionInfo.type,
      });
    });
  };
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  getAgain = async () => {
    let token = await AsyncStorage.getItem('UserData');
    let routeName = 'MainRoute';
    if (!token) {
      routeName = 'LoginStack';
    }
    //console.log('loggg')
    this.verificaNet();
    const nav = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: routeName,
        }),
      ],
      key: null,
    });
    if (this.state.net != 'none') {
      navigatorRef.dispatch(nav);
    } else {
      //console.log('não tem net')
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={images.bgSemInternetEAtualizar}>
        <View style={styles.container}>
          <Image source={images.semInternet} style={styles.atualizar} />

          <Text style={styles.h1}>ERRO DE CONEXÃO</Text>

          <Text style={styles.txtDescricao}>
            OPS! Você precisa de internet para continuar.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonEntrar}
              onPress={this.getAgain}>
              <Text style={styles.txtButton}> TENTAR NOVAMENTE </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default semInternet;
