import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import AsyncStorage from '@react-native-community/async-storage';
import {StackActions, NavigationActions} from 'react-navigation';
import {navigatorRef} from '../../App';
import ButtonDefault from '../../components/ButtonDefault';
import colors from '../../styles/colors';
import images from '../../styles/images';
// const nav = StackActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({
//       routeName: 'LoginStack',
//     }),
//   ],
//   key: null,
// });
class Tutorial extends Component {
  nextPage = async () => {
    await AsyncStorage.setItem('getFirst', 'true');
    // Alert.alert('clique');
    this.props.navigation.navigate('LoginStack');
    // navigatorRef.dispatch(nav);
  };

  // componentWillReceiveProps(props) {
  //   this.setState(this.initState(props));
  //   if (props.yourNewPageIndex) {
  //     this.scrollBy(props.yourNewPageIndex);
  //   }
  // }

  onSwipe = (index) => {
    this.setState({
      sliderLength: index,
    });
    //console.log('index changed', index);
  };

  render() {
    const {navigation} = this.props;
    return (
      <Swiper
        ref="swiper"
        showsButtons={false}
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDotColor}>
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={images.bgComponentAlert}>
          <View style={styles.boxLogo}>
            <Image source={images.tutorial.logo} style={styles.logo} />
          </View>

          <View style={styles.slide}>
            <Text style={styles.h1}>EI,</Text>
            <Text style={styles.h2}>TORCEDOR!</Text>

            <Text style={styles.ptxt}>
              Quer marcar um gol de vantagens através das suas compras? É fácil,
              rápido e divertido.
            </Text>
          </View>

          <View style={styles.pular}>
            <TouchableOpacity style={styles.btnPequeno} onPress={this.nextPage}>
              <Text style={styles.ptxt}>pular</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnPequeno}
              onPress={() => this.refs.swiper.scrollBy(1)}>
              <Icon name="arrow-right" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={images.bgComponentAlert}>
          <View style={styles.boxLogo}>
            <Image source={images.tutorial.logo} style={styles.logo} />
          </View>

          <View style={styles.slide}>
            <Text style={styles.h1}>ENTRE PARA O</Text>
            <Text style={styles.h2}>TIME PONTEPLUS</Text>

            <Text style={styles.ptxt}>
              Um torcedor de verdade merece benefícios exclusivos. Cadastre-se e
              aproveite o que preparamos para você.
            </Text>
          </View>

          <View style={styles.pular}>
            <TouchableOpacity style={styles.btnPequeno} onPress={this.nextPage}>
              <Text style={styles.ptxt}>pular</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnPequeno}
              onPress={() => this.refs.swiper.scrollBy(1)}>
              <Icon name="arrow-right" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={images.bgComponentAlert}>
          <View style={styles.boxLogo}>
            <Image source={images.tutorial.logo} style={styles.logo} />
          </View>

          <View style={styles.slide}>
            <Text style={styles.h1}>COMPRE E MARQUE</Text>
            <Text style={styles.h2}>UMA GOLEADA</Text>

            <Text style={styles.ptxt}>
              A cada produto adquirido nas lojas ‘Ponte Preta’, você obtém
              pontos. Quanto mais pontos marcar, maior será a sua colocação!
            </Text>
            <Text style={[styles.ptxt, styles.ptxt2]}>
              * Não pise na bola: cadastre todas as Notas Fiscais no app.
            </Text>
          </View>

          <View style={styles.pular}>
            <TouchableOpacity style={styles.btnPequeno} onPress={this.nextPage}>
              <Text style={styles.ptxt}>pular</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnPequeno}
              onPress={() => this.refs.swiper.scrollBy(1)}>
              <Icon name="arrow-right" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={images.bgComponentAlert}>
          <View style={styles.boxLogo}>
            <Image source={images.tutorial.logo} style={styles.logo} />
          </View>

          <View style={styles.slide}>
            <Text style={styles.h1}>OBTENHA DESCONTO</Text>
            <Text style={styles.h2}>E VANTAGENS</Text>

            <Text style={styles.ptxt}>
              A regra é clara: você acumula pontos e troca por recompensas.
              Gostou? Então, faça seu cadastro e corre pro abraço!
            </Text>
            <TouchableOpacity
              style={styles.buttonEntrar}
              activeOpacity={0.8}
              onPress={() => this.nextPage()}>
              <Text style={styles.txtButton}>ACESSAR O APLICATIVO</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.pular}></View>
        </ImageBackground>
      </Swiper>
    );
  }
}

export default Tutorial;
