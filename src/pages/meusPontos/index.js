import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  ActionSheetIOS,
  TouchableWithoutFeedback,
  Platform,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Text,
  Image,
  Modal,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import stylesMeusPontos from './stylesMeusPontos';
import stylesExtratoPontos from './stylesExtratoPontos';

import HeaderUser from '../../components/headerUser';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetalhesExtrato from '../extratoPontoDetalhes';
import ListExtrato from '../../components/extrato';
import FlatlistInfiniteScroll from '../../components/FlatlistInfiniteScroll';
import Loading from '../../components/loading';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ExtratoActions} from '../../store/ducks/extrato';
import {Creators as MedalhasActions} from '../../store/ducks/medalhas';
import {Creators as AssociadosActions} from '../../store/ducks/associado';

import general from '../../config/general';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import images from '../../styles/images';
import metrics from '../../styles/metrics';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 100;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const DiaMes = [];
const jsonCompleto = [];
const DiasJsonFormatados = [];
const ListaMeses = [];

class ItemExtrato extends React.PureComponent {
  render() {
    return <ListExtrato {...this.props} />;
  }
}

var FILTRO_BTN = [];

class meusPontos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      filtro: '',
      pageSelected: 0,
      refreshing: false,
      modalVisible: false,
      meses: [],
      ListRender: [],
      Informacoes: [],
    };
  }

  componentWillUnmount() {
    this.state = {
      modalVisible: false,
    };
  }

  nextPage = async () => {
    await this.setState({page: this.state.page + 1});
  };
  _onRefresh2 = async () => {
    //console.log('refresh')
    let token = await AsyncStorage.getItem('UserData');
    this.props.getExtratoRequest(token);
    this.props.getMedalhasRequest(token);
    this.setState({refreshing: false});
  };

  filtrarExtrato = async (filtroID) => {
    let token = await AsyncStorage.getItem('UserData');
    this.setState({page: 1});
    if (filtroID == '' || filtroID == 0 || filtroID === undefined)
      this.props.getExtratoRequest(token);
    else this.props.getExtratoRequest(token, filtroID);
  };

  showActionSheet() {
    FILTRO_BTN = ['Todos'];
    FILTRO_BTN = FILTRO_BTN.concat(
      this.props.extrato.data.filtros.map((a) => a.Nome),
    );
    FILTRO_BTN.push('Fechar');

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: FILTRO_BTN,
        cancelButtonIndex: FILTRO_BTN.length - 1,
      },
      (buttonIndex) => {
        if (buttonIndex != FILTRO_BTN.length - 1) {
          this.setState({filtro: buttonIndex});
          var found = this.props.extrato.data.filtros.find(
            (v) => v.Nome == FILTRO_BTN[buttonIndex],
          );
          if (!found) {
            this.filtrarExtrato('');
          } else this.filtrarExtrato(found.Id);
        }
      },
    );
  }

  refreshContent = () => {
    let token = AsyncStorage.getItem('UserData').then((token) => {
      this.props.getExtratoRequest(token);
      this.props.getMedalhasRequest(token);
    });
  };

  componentDidMount = () => {
    this.refreshContent();

    const didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
      (data) => {
        const {params} = data.action;
        if (params) {
          if (params.pageSelected == 'meu_extrato')
            this.setState({pageSelected: 1, page: 1});
          else this.setState({pageSelected: 0, page: 1});
        } else {
          this.setState({pageSelected: 0, page: 1});
        }
      },
    );
  };

  pegaDiaMes() {
    var DiasJson = [];
    var jsonCompleto = this.props.extrato.data;
    for (let index = 0; index < jsonCompleto.length; index++) {
      DiasJson.push(jsonCompleto[index].MesAnoExtenso);
    }
    var result = DiasJson.filter(function (item, index) {
      return DiasJson.indexOf(item) >= index;
    });
    DiasJsonFormatados.push({id: result});
  }

  setModalVisible(a) {
    this.setState({
      modalVisible: true,
      Informacoes: a,
    });
  }

  renderContainer() {
    if (this.state.pageSelected === 0) {
      return this.renderMeusPontos();
    }
    if (this.state.pageSelected === 1) {
      return this.renderExtratoPontos();
    }
  }

  renderMeusPontos() {
    const {navigation} = this.props;
    return (
      <View>
        <View style={stylesMeusPontos.containerMedal}>
          <Image
            source={{
              uri:
                general.imagemMedalha +
                this.props.associado.data.Categoria.Imagem,
            }}
            style={stylesMeusPontos.medal}
          />
          <Text style={stylesMeusPontos.nivelAtual}>
            Nível {this.props.associado.data.Categoria.Nome}
          </Text>
          <Text style={stylesMeusPontos.titleNivel}>
            {`Para mudar de categoria você precisa acumular pontos. Novas categorias liberam novos benefícios para você! `}
            <Text
              style={{fontWeight: 'bold', textDecorationLine: 'underline'}}
              onPress={() => {
                navigation.navigate('regulamento');
              }}>{`Clique aqui e saiba mais.`}</Text>
          </Text>
          {this.props.medalhas.data.map((data, index) => {
            //console.log('AQUI MEDALHAS')

            return (
              <View style={stylesMeusPontos.item} key={index}>
                <View style={stylesMeusPontos.itemBox}>
                  <Image
                    source={{uri: general.imagemMedalha + data.Imagem}}
                    style={stylesMeusPontos.itemMedal}
                  />
                  <Text style={stylesMeusPontos.titulo}>{data.Nome}</Text>
                </View>
                <Text style={stylesMeusPontos.ptsCorte}>
                  + {data.PontosMinimos} PTS
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  renderLista = () =>
    this.props.extrato.cancelado || this.props.extrato.error ? (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.refreshContent()}>
        <Text style={stylesExtratoPontos.txtMensagemVazia}>
          {this.props.extrato.cancelado
            ? 'Operação cancelada.'
            : this.props.extrato.error}
        </Text>
        <Text style={stylesExtratoPontos.txtMensagemVazia}>
          Tentar novamente
        </Text>
      </TouchableOpacity>
    ) : this.props.extrato.data.length == 0 ? (
      <View style={stylesExtratoPontos.containerMensagemVazia}>
        <Image
          style={stylesExtratoPontos.imgSmile}
          source={require('../../assets/smile.png')}
        />
        {this.state.filtro == '' || this.state.filtro == 0 ? (
          <Text style={stylesExtratoPontos.txtMensagemVazia}>
            Não há registros para exibir
          </Text>
        ) : (
          <Text style={stylesExtratoPontos.txtMensagemVazia}>
            Não há registros para essa pesquisa
          </Text>
        )}
      </View>
    ) : (
      <FlatlistInfiniteScroll
        removeClippedSubviews={true}
        initialNumToRender={27}
        itensPorPagina={10}
        colorLoading="#000"
        page={this.state.page}
        data={this.props.extrato.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ItemExtrato
            homeContext={this}
            data={item}
            navigation={this.props.navigation}
          />
        )}
      />
    );

  renderExtratoPontos() {
    this.pegaDiaMes();
    var FILTROS_ANDROID = [{Id: '', Nome: 'Filtre o extrato...'}];

    if (this.props.extrato.data.filtros)
      FILTROS_ANDROID = FILTROS_ANDROID.concat(this.props.extrato.data.filtros);

    console.log('PROPS FILTRO', this.props.extrato.data.filtros); // id e nome dos segmentos
    console.log('FILTRO', this.state.filtro); // id da lista segmentos
    const {navigation} = this.props;
    return (
      <View>
        <Loading
          loading={this.props.extrato.loading}
          actionCancelar={() => {
            this.props.cancelExtratoRequest();
          }}
        />

        <View style={stylesExtratoPontos.containerExtrato}>
          <View style={{height: 120}}>
            <Text style={stylesExtratoPontos.titleH1}>
              CONFIRA O EXTRATO DE PONTOS
            </Text>
            <Text style={stylesExtratoPontos.title}>
              Caso não esteja visualizando pontos referentes a compras
              cadastradas há mais de 30 dias,{' '}
              <Text
                style={stylesExtratoPontos.btnFaleConosco}
                onPress={() => {
                  navigation.navigate('HistoricoFaleconoscoStack');
                }}>
                <Text style={stylesExtratoPontos.btnTitle}>clique aqui</Text>
              </Text>
            </Text>

            {this.props.extrato.data.filtros ? (
              Platform.OS == 'ios' ? (
                <TouchableWithoutFeedback
                  onPress={() => this.showActionSheet()}>
                  <View style={stylesExtratoPontos.containerPick}>
                    <Text style={{paddingLeft: 10, paddingBottom: 15}}>
                      {typeof FILTRO_BTN[this.state.filtro] !== 'undefined' &&
                      this.state.filtro != 0
                        ? FILTRO_BTN[this.state.filtro]
                        : this.state.filtro === 0
                        ? 'Todos'
                        : 'Filtre o extrato no campo..'}
                    </Text>
                    <Icon
                      name="sort-down"
                      size={20}
                      color="black"
                      style={[{right: 18, top: -5, position: 'absolute'}]}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <View style={stylesExtratoPontos.containerPick}>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.filtro}
                    placeholder="Filtre o extrato no campo"
                    style={stylesExtratoPontos.camposSelect}
                    textStyle={{fontSize: 1}}
                    itemTextStyle={{fontSize: 1}}
                    onValueChange={(itemValue, itemIndex) => {
                      this.setState({filtro: itemValue});
                      this.filtrarExtrato(itemValue);
                    }}>
                    {FILTROS_ANDROID.map((v) => (
                      <Picker.Item label={v.Nome} value={v.Id} />
                    ))}
                  </Picker>
                  <Icon
                    name="sort-down"
                    size={20}
                    color="black"
                    style={[{right: 18, top: 10, position: 'absolute'}]}
                  />
                </View>
              )
            ) : null}
          </View>

          <View style={{marginTop: 55, ...ifIphoneX({marginTop: 35})}}>
            {this.renderLista()}
          </View>
        </View>
      </View>
    );
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={stylesExtratoPontos.containerFull}>
        <HeaderUser navigation={navigation} />

        <ScrollView
          style={stylesMeusPontos.containerGeral}
          scrollEventThrottle={500}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && this.state.pageSelected == 1) {
              this.nextPage();
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh2}
            />
          }>
          {general.exibeCategoriaPontos ? (
            <View style={stylesExtratoPontos.menu}>
              <View style={stylesExtratoPontos.container}>
                <TouchableOpacity
                  style={[
                    this.state.pageSelected == 0
                      ? stylesExtratoPontos.btnDestaque
                      : stylesExtratoPontos.btnSemDestaque,
                  ]}
                  onPress={() => {
                    this.setState({pageSelected: 0});
                  }}>
                  <Text
                    style={[
                      this.state.pageSelected == 0
                        ? stylesExtratoPontos.txtDestaque
                        : stylesExtratoPontos.txtSemDestaque,
                    ]}>
                    MEUS PONTOS
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    this.state.pageSelected == 1
                      ? stylesExtratoPontos.btnDestaque
                      : stylesExtratoPontos.btnSemDestaque,
                  ]}
                  onPress={() => {
                    this.setState({pageSelected: 1});
                  }}>
                  <Text
                    style={[
                      this.state.pageSelected == 1
                        ? stylesExtratoPontos.txtDestaque
                        : stylesExtratoPontos.txtSemDestaque,
                    ]}>
                    EXTRATO DE PONTOS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          {this.renderContainer()}
        </ScrollView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({
              modalVisible: false,
            });
          }}>
          <View>
            <View style={stylesExtratoPontos.bgTrasnparent}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={stylesExtratoPontos.btnIconClose}
                onPress={() => {
                  this.setState({
                    modalVisible: false,
                  });
                }}>
                <Icon
                  name="times"
                  color="#000000"
                  style={stylesExtratoPontos.iconClose}
                />
              </TouchableOpacity>
              <View style={stylesExtratoPontos.modalContent}>
                <DetalhesExtrato data={this.state.Informacoes} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

meusPontos.navigationOptions = {
  tabBarLabel: 'PONTOS',
  tabBarIcon: ({focused, tintColor}) =>
    focused ? (
      <Image
        source={images.tabBottomBar.pontos.ativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ) : (
      <Image
        source={images.tabBottomBar.pontos.desativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ),
};

const mapStateToProps = (state) => ({
  extrato: state.extrato,
  medalhas: state.medalhas,
  associado: state.associado,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...ExtratoActions,
      ...AssociadosActions,
      ...MedalhasActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(meusPontos);
