import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import general from '../../config/general';
import HeaderTitulo from '../../components/HeaderTitulo';
import HTML from 'react-native-render-html';
import AsyncStorage from '@react-native-community/async-storage';

// import {SafeAreaView} from 'react-navigation';
import colors from '../../styles/colors';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as LojasActions} from '../../store/ducks/lojas';
import metrics from '../../styles/metrics';

class lojasInterna extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
    };
    this.loja = {};
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    try {
      this.props.getLojasRequest(token);
    } catch (error) {
      Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
    }
  };

  render() {
    const {navigation} = this.props;
    const {goBack} = navigation;
    const {loja, Id} = navigation.state.params;

    if (loja) this.loja = loja;

    if (Id) {
      found = this.props.lojas.data.find((b) => b.Id == Id);
      if (found !== undefined) {
        this.loja = found;
      }
    }
    var ImagemLogo = general.imagemLojas + this.loja.Logo;

    var Imagem = undefined;
    if (this.loja.Imagens !== undefined) {
      if (this.loja.Imagens[0])
        Imagem = general.imagemLojas + this.loja.Imagens[0];
    }
    //console.log(this.loja)
    var Descricao = null;
    if (this.loja.Descricao)
      Descricao = '<descricao>' + this.loja.Descricao + '</descricao>';

    return (
      <View style={{flex: 1, height: metrics.screenHeight}}>
        <SafeAreaView
          style={{
            flex: 1,
            height: metrics.screenHeight,
            backgroundColor: colors.black,
            marginBottom: 1,
          }}>
          <View
            style={{
              height: metrics.screenHeight,
              backgroundColor: colors.bgContainerFull,
            }}>
            <HeaderTitulo
              titulo="LOJA E BENEFÍCIO"
              navigation={this.props.navigation}
            />

            <ScrollView contentContainerStyle={{paddingBottom: 85}}>
              {Imagem !== undefined ? (
                <Image source={{uri: Imagem}} style={styles.imgItem} />
              ) : (
                <View style={styles.viewlogo}>
                  <Image
                    source={{uri: ImagemLogo}}
                    style={styles.imgItemLogo}
                  />
                </View>
              )}

              <View style={styles.containerDestalhes}>
                <Text style={styles.titulo}>{this.loja.Nome}</Text>

                {this.loja.Localizacao ? (
                  <View>
                    <Text style={styles.titleItem}>Localização</Text>
                    <Text style={styles.descItem}>
                      {this.loja.Localizacao.trim()}
                    </Text>
                  </View>
                ) : null}

                {this.loja.Telefone ? (
                  <View style={{marginBottom: 20}}>
                    <Text style={styles.titleItem}>Telefone</Text>
                    <Text style={styles.descItem}>{this.loja.Telefone}</Text>
                  </View>
                ) : null}

                {Descricao ? (
                  <HTML
                    tagsStyles={{descricao: styles.descItem}}
                    html={Descricao}
                    imagesMaxWidth={Dimensions.get('window').width}
                  />
                ) : null}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  lojas: state.lojas,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...LojasActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(lojasInterna);
