import React from 'react';
import {
  Text,
  ScrollView,
  View,
  // NetInfo,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  Linking,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import ListBeneficios from '../../components/listBeneficios';
import HeaderUser from '../../components/headerUser';
import Alert from '../../components/Alert';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as VersionActions} from '../../store/ducks/version';
import {Creators as BannersActions} from '../../store/ducks/banners';
import {Creators as BeneficiosActions} from '../../store/ducks/beneficios';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as NotificacoesActions} from '../../store/ducks/notificacoes';

import general from '../../config/general';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5,
      semconexao: false,
      refreshing: false,
      token: '',
      sistemOp: '',
      hashToken: '',
    };
    // NetInfo.getConnectionInfo().then((connectionInfo) => {
    //   //console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    //   if (connectionInfo.type == 'none') {
    //     this.setState({
    //       semconexao: true,
    //     });
    //   }
    //   if (this.state.semconexao == true) {
    //     this.props.navigation.navigate('semInternet');
    //   }
    // });
  }
  fecharModal() {
    this.props.closeModalBonus();
  }

  componentDidMount = async () => {
    // AppState.addEventListener('change', this.handleAppStateChange);
    let token = await AsyncStorage.getItem('UserData');

    let SistemaOp = await AsyncStorage.getItem('SistemaOp'); //, JSON.stringify(token_push.os));
    let HashToken = await AsyncStorage.getItem('HashToken'); //, JSON.stringify(token_push.token));

    let params = {
      token: token,
      sistemOp: SistemaOp,
      hashToken: HashToken,
    };
    if (SistemaOp) {
      this.props.registraAcessoRequest(params);
      console.log('REGISTROU', params);
    }

    const didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
      (data) => {
        if (SistemaOp) {
          this.props.registraAcessoRequest(params);
          console.log('Registrou acesso 2');
        }
      },
    );

    //console.log(this.state, 'ESTADOOO')
    this.props.getVersionRequest(token);
    this.props.getBannersRequest(token);

    this.props.getBeneficiosRequest(token);
  };

  _onRefresh = async () => {
    let token = await AsyncStorage.getItem('UserData');
    console.log('Executou o refresh');
    this.props.getBannersRequest(token);
    this.props.getBeneficiosRequest(token);
    this.setState({refreshing: false});
  };

  renderList = () => (
    <FlatList
      data={this.props.beneficios.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <ListBeneficios
          homeContext={this}
          data={item}
          navigation={this.props.navigation}
        />
      )}
    />
  );

  OpenBanner = (e) => {
    //console.log(e,"loja acao")
    switch (e.Acao) {
      case 1:
        this.props.navigation.navigate('LojasStack');
        break;
      case 2:
        this.props.navigation.navigate('lojasInterna', {
          loja: e.Loja,
        });
        break;
      case 3:
        this.props.navigation.navigate('Recompensas');
        break;
      case 4:
        this.props.navigation.navigate('RecompensaInterna', {
          recompensa: e.Recompensa,
        });
        break;
      case 5:
        this.props.navigation.navigate('Inicial');
        break;
      case 6:
        this.props.navigation.navigate('Home');
        break;
      case 7:
        this.props.navigation.navigate('meuPerfil');
        break;
      case 8:
        this.props.navigation.navigate('Recompensas', {
          pageSelected: 'meus_resgates',
        });
        break;
      case 9:
        this.props.navigation.navigate('MeusPontos', {
          pageSelected: 'meu_extrato',
        });
        break;
      case 10:
        this.props.navigation.navigate('HistoricoFaleconoscoStack');
        break;
      case 11:
        this.props.navigation.navigate('notificacaoInterna', {
          notificacao: e.Notificacao,
        });
        break;
      case 12:
        this.props.navigation.navigate('notificacao');
        break;
      case 13:
        let url = e.Link;
        var prefix = 'http://';
        if (url.substr(0, prefix.length) !== prefix) {
          url = prefix + url;
        }
        Linking.canOpenURL(url)
          .then((supported) => {
            if (!supported) {
              //console.log('Can\'t handle url: ' + url);
            } else {
              return Linking.openURL(url);
            }
          })
          .catch((err) => console.error('An error occurred', err));

        break;
      default:
        //console.log('null')
        break;
    }
  };

  btn_notificacao = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    const {navigation} = this.props;
    let pontosAssociado = this.props.associado.data.pontos;
    // console.log(`${pontosAssociado} PONTOS DO ASSOCIADO`)
    var notificacoes = this.props.notificacoes.data;
    var total_nao_lidas = notificacoes.filter((obj) => obj.Lido === false)
      .length;

    return (
      <View
        style={[
          styles.containerFull,
          {
            position: 'relative',
          },
        ]}>
        <HeaderUser navigation={navigation} />

        <ScrollView
          contentContainerStyle={{marginTop: 15}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          {this.props.banners.data != 0 ? (
            <Swiper
              autoplay
              autoplayTimeout={10}
              height={200}
              onMomentumScrollEnd={(e, state, context) => (
                'index:', state.index
              )}
              dot={
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,1)',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 6,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,.0)',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 6,
                    borderWidth: 1,
                    borderColor: '#000000',
                  }}
                />
              }
              paginationStyle={{
                bottom: -23,
              }}
              loop>
              {this.props.banners.data.map((data, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.slide}
                    key={index}
                    onPress={() => {
                      this.OpenBanner(data);
                    }}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: general.imagemBanners + data.Imagem,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </Swiper>
          ) : null}
          <View
            style={this.props.banners.data.length > 0 ? styles.container : {}}>
            {this.state.semconexao ? (
              <Text style={styles.txtSemconexao}>
                Sem conexão com a internet
              </Text>
            ) : null}
          </View>

          <View
            style={[
              styles.containerTitulo,
              this.props.banners.data.length > 0
                ? {marginTop: 15}
                : {marginTop: -30},
            ]}>
            <Text style={styles.txtTitu}>RECOMPENSAS EM DESTAQUE</Text>
          </View>

          {/* ========================= MODAL DO BONUS POR ACESSO ========================= */}

          {pontosAssociado === 0 || pontosAssociado === undefined ? null : (
            <Alert
              mensagem={this.props.associado.message_bonus}
              littie={require('../../assets/parabens.json')}
              btnLabel="INICIAR :)"
              visible={this.props.associado.alert_bonus}
              closeAction={() => this.fecharModal()}
            />
          )}

          {/* =============================================FIM DO MODAL======================================================= */}
          <View style={styles.containerRecompensas}>
            {this.props.beneficios.data != 0 ? (
              this.renderList()
            ) : (
              <View style={styles.containerMensagemVazia}>
                <Image
                  style={styles.imgSmile}
                  source={require('../../assets/smile.png')}
                />
                <Text style={styles.txtMensagemVazia}>
                  Aguarde, em breve novas recompensas estarão disponíveis.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  banners: state.banners,
  beneficios: state.beneficios,
  associado: state.associado,
  notificacoes: state.notificacoes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...VersionActions,
      ...BannersActions,
      ...BeneficiosActions,
      ...AssociadosActions,
      ...NotificacoesActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
