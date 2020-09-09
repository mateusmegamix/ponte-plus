import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderTitulo from '../../components/HeaderTitulo';
import HTML from 'react-native-render-html';
import Loading from '../../components/loading';
import enums from '../../enums';
import general from '../../config/general';

// import {SafeAreaView} from 'react-navigation';
import colors from '../../styles/colors';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as NotificacoesActions} from '../../store/ducks/notificacoes';

class NotificacaoInterna extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
    };
  }
  componentDidMount() {
    const {navigation} = this.props;
    const {notificacao, Id} = navigation.state.params;

    let token = AsyncStorage.getItem('UserData').then((token) => {
      if (notificacao) this.props.getNotificacoesRequest(token, notificacao.Id);

      if (Id) this.props.getNotificacoesRequest(token, Id);
    });
  }

  btnNotificacao(route, Id, params = {}) {
    if (route !== undefined) {
      const {navigation} = this.props;
      if (Id) {
        params = Object.assign(params, {Id});
      }

      navigation.navigate(route, params);
    }
  }

  render() {
    const {navigation} = this.props;
    const {notificacao, Id} = navigation.state.params;

    if (notificacao) this.notificacao = notificacao;

    if (Id) {
      found = this.props.notificacoes.data.find((b) => b.Id == Id);
      if (found !== undefined) {
        this.notificacao = found;
      }
    }

    if (this.notificacao) {
      var Data = this.notificacao.Data;
      var Imagem = this.notificacao.Imagem;
      var Mensagem =
        '<notificacao>' + this.notificacao.Mensagem + '</notificacao>';
      var Titulo = this.notificacao.Titulo;
      var ConteudoId = this.notificacao.ConteudoDirecionamento;
      var acao_obj = enums.NotificacoesTipos[this.notificacao.Conteudo];
    } else {
      var Data = '';
      var Imagem = '';
      var Mensagem = '';
      var Titulo = '';
      var ConteudoId = '';
      var acao_obj = {btn_label: undefined, route: undefined, params: {}};
    }
    // Teste
    // notificacao.Conteudo = 2;
    // ConteudoId = 70;

    if (!acao_obj)
      acao_obj = {btn_label: undefined, route: undefined, params: {}};

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black}}
        forceInset={{bottom: 'never'}}>
        <View style={{flex: 1, backgroundColor: colors.grayrow}}>
          <HeaderTitulo
            titulo="NOTIFICAÇÕES"
            navigation={this.props.navigation}
          />

          <Loading loading={!this.notificacao} />

          <ScrollView>
            {Imagem ? (
              <Image
                source={{uri: general.imagemNotificacoes + Imagem}}
                style={styles.imgItem}
              />
            ) : (
              <View style={{marginTop: 30}}></View>
            )}

            <View style={styles.containerDestalhes}>
              <Text style={styles.titulo}>{Titulo}</Text>
              <Text style={styles.data}>{Data}</Text>
              {Mensagem != '' ? (
                <HTML
                  tagsStyles={{notificacao: styles.descricao}}
                  html={Mensagem}
                  imagesMaxWidth={Dimensions.get('window').width}
                />
              ) : null}
            </View>
            {acao_obj.btn_label !== undefined ? (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnResgate}
                onPress={() => {
                  this.btnNotificacao(
                    acao_obj.route,
                    ConteudoId,
                    acao_obj.params,
                  );
                }}>
                <Text style={styles.txtResgate}>
                  Ir para {acao_obj.btn_label}
                </Text>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  notificacoes: state.notificacoes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...NotificacoesActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(NotificacaoInterna);
