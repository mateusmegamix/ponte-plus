import React from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {OptimizedFlatList} from 'react-native-optimized-flatlist';
import FlatlistInfiniteScroll from '../../components/FlatlistInfiniteScroll';
import stylesExtratoPontos from '../meusPontos/stylesExtratoPontos';

import stylesRecompensas from './stylesRecompensas';
import stylesMeusResgates from './stylesMeusResgates';

import HeaderUser from '../../components/headerUser';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListResgates from '../../components/resgates';

import DetalhesCupom from '../detalhesCupom';
import ListBeneficios from '../../components/listBeneficios';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as BeneficiosActions} from '../../store/ducks/beneficios';
import {Creators as ResgatesActions} from '../../store/ducks/resgates';

const DiasJsonFormatados = [];

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 100;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

class ItemResgate extends React.PureComponent {
  render() {
    return <ListResgates {...this.props} />;
  }
}

class recompensasDisponiveis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      Informacoes: [],
      refreshing1: false,
      refreshing2: false,
      pageSelected: 0,
      modalVisible: false,
      IdResgate: false,
    };
  }

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

  setModalVisibleInterna(a) {
    this.setState({
      modalVisible: true,
      Informacoes: a,
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible, IdResgate: false});
  }

  setModalVisibleAlert(visible) {
    this.setState({modalVisibleAlert: visible});
  }

  componentDidMount = () => {
    let token = AsyncStorage.getItem('UserData').then((token) => {
      this.props.getBeneficiosRequest(token);
      this.props.getResgatesRequest(token);
    });

    const didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
      (data) => {
        const {params} = data.action;
        if (params) {
          if (params.pageSelected == 'meus_resgates') {
            this.setState({
              pageSelected: 1,
              page: 1,
              IdResgate: params.IdResgate,
            });
          } else this.setState({pageSelected: 0, page: 1});
        } else {
          this.setState({pageSelected: 0, page: 1});
        }
      },
    );
  };

  renderContainer() {
    if (this.state.pageSelected === 0) {
      return this.renderRecompensas();
    }
    if (this.state.pageSelected === 1) {
      return this.renderMeusResgates();
    }
  }
  _onRefresh = async () => {
    let token = await AsyncStorage.getItem('UserData');
    this.props.getBeneficiosRequest(token);
    this.props.getResgatesRequest(token);
    this.setState({refreshing1: false});
  };

  renderRecompensas() {
    const {navigation} = this.props;
    return (
      <View>
        <View style={stylesRecompensas.containerRecompensas}>
          <Text
            style={
              stylesRecompensas.title
            }>{`APROVEITE AS VANTAGENS E TROQUE SEUS PONTOS POR RECOMPENSAS!`}</Text>
          {this.props.beneficios.data != 0 ? (
            this.renderList()
          ) : (
            <View style={stylesMeusResgates.containerMensagemVazia}>
              <Image
                style={stylesMeusResgates.imgSmile}
                source={require('../../assets/smile.png')}
              />
              <Text style={stylesMeusResgates.txtMensagemVazia}>
                Aguarde, em breve novas recompensas estarão disponíveis.
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  renderLista = (data) => {
    return (
      <FlatlistInfiniteScroll
        removeClippedSubviews={true}
        initialNumToRender={27}
        itensPorPagina={10}
        colorLoading="#000"
        page={this.state.page}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ItemResgate
            homeContext={this}
            data={item}
            navigation={this.props.navigation}
          />
        )}
      />
    );
  };

  renderMeusResgates() {
    const renderizarLista = this.renderLista(this.props.resgates.data);

    return (
      <View>
        <View>
          <View style={{marginBottom: 20}}>
            <Text style={stylesMeusResgates.title}>
              VEJA AQUI TODOS OS VOUCHERS DOS ITENS RESGATADOS
            </Text>
            {this.props.resgates.data.length > 0 ? (
              renderizarLista
            ) : (
              <View style={stylesMeusResgates.containerMensagemVazia}>
                <Image
                  style={stylesMeusResgates.imgSmile}
                  source={require('../../assets/smile.png')}
                />
                <Text style={stylesMeusResgates.txtMensagemVazia}>
                  Você ainda não possui histórico de resgates.
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }

  nextPage = async () => {
    await this.setState({page: this.state.page + 1});
  };

  render() {
    const {navigation} = this.props;

    var IdResgate = this.state.IdResgate;
    if (IdResgate && !this.state.modalVisible) {
      var found = this.props.resgates.data.find((t) => t.Id == IdResgate);
      if (found) this.setModalVisibleInterna(found);
    }

    return (
      <View style={stylesMeusResgates.containerFull}>
        <HeaderUser navigation={navigation} />

        <ScrollView
          style={stylesRecompensas.containerGeral}
          scrollEventThrottle={500}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && this.state.pageSelected == 1) {
              this.nextPage();
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing1}
              onRefresh={this._onRefresh}
            />
          }>
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
                  RECOMPENSAS
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
                  MEUS RESGATES
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.renderContainer()}
        </ScrollView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <View>
            <View style={stylesMeusResgates.bgTrasnparent}>
              <TouchableOpacity
                style={stylesMeusResgates.btnIconClose}
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Icon name="times" style={stylesMeusResgates.iconClose} />
              </TouchableOpacity>
              <View style={stylesMeusResgates.modalContent}>
                <DetalhesCupom data={this.state.Informacoes} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  beneficios: state.beneficios,
  resgates: state.resgates,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...BeneficiosActions,
      ...ResgatesActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(recompensasDisponiveis);
