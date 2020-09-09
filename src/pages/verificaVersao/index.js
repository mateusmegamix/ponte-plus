
import React from 'react';
import { TouchableOpacity, Platform, Linking, Text, View, Image, ImageBackground, BackHandler,ToastAndroid } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styles from './styles';
import AppLink from 'react-native-app-link';
import general from '../../config/general';
import images from '../../styles/images';

class verificaVersao extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
      ToastAndroid.show('Você precisa atualizar a versão de seu aplicativo', ToastAndroid.SHORT);
      return true;
  }

  openPage(){
    // AppLink.openInStore({appName: "Conexão Eldorado", appStoreId: "1204922579", appStoreLocale: "br", playStoreId:"com.am4.conexaoeldorado" }).then(() => {
    AppLink.openInStore({appName: general.appNameIdApple, appStoreId: general.appStoreId, appStoreLocale: "br", playStoreId: general.playStoreId })
  }

  render() {
    return (
      <ImageBackground style={styles.imgBackground}
        resizeMode='cover'
        source={images.bgSemInternetEAtualizar}>

      <View style={styles.container}>
        <Image
          source={require('../../assets/atualizar.png')}
          style={styles.atualizar}
        />
          
      
        <Text style={styles.h1}>NOVA ATUALIZAÇÃO</Text>

        <Text style={styles.txtDescricao}>É necessário que atualize o aplicativo antes de prosseguir.</Text>

      

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.openPage()}>
            <Text style={styles.txtButton}> ATUALIZAR O APLICATIVO </Text>
          </TouchableOpacity>
        </View>

      </View>
  
      </ImageBackground>
    );
  }
}



export default verificaVersao;
