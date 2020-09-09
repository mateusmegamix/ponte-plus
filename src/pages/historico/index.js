import React from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderTitulo from '../../components/HeaderTitulo';
// import {SafeAreaView} from 'react-navigation';
import colors from '../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as MensagensActions} from '../../store/ducks/mensagens';
import metrics from '../../styles/metrics';
import ButtonDefault from '../../components/ButtonDefault';

class HistoricoMensagens extends React.Component {
  constructor(props) {
    super(props);
  }

  _onRefresh = async () => {
    let user = await AsyncStorage.getItem('UserData');
    let token = user.replace('"', '').replace('"', '');

    try {
      this.props.getMensagensRequest(token);
    } catch (error) {
      Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
    }
  };

  componentDidMount = async () => {
    let user = await AsyncStorage.getItem('UserData');
    let token = user.replace('"', '').replace('"', '');

    try {
      this.props.getMensagensRequest(token);
    } catch (error) {
      Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
    }
  };

  renderList = () => {
    const {navigation} = this.props;
    //console.log(this.props.mensagens.data)
    return (
      <FlatList
        data={this.props.mensagens.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          let nao_lidas = item.MensagemInteracoes.filter(
            (b) => b.Status == 0 && b.OrigemAdm == true,
          ).length;
          let total_mensagens = item.MensagemInteracoes.filter(
            (b) => b.OrigemAdm == true,
          ).length;

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.item]}
              onPress={() => {
                navigation.navigate('mensagens', {Id: item.Id});
              }}>
              <Text style={styles.tituloItem}>
                {item.Assunto.toUpperCase()}
              </Text>
              <Text style={styles.descricaoItme}>{item.MensagemEnviada}</Text>
              {nao_lidas > 0 ? (
                <View style={[styles.status, styles.bgRespostaNaoVisualizada]}>
                  <Text style={styles.statusTxt}>
                    {nao_lidas} RESPOSTA NÃO VISUALIZADA
                  </Text>
                </View>
              ) : total_mensagens == 0 ? (
                <View style={[styles.status, styles.bgNenhumaResposta]}>
                  <Text style={styles.statusTxt}>NENHUMA RESPOSTA</Text>
                </View>
              ) : (
                <View style={[styles.status, styles.bgNenhumaResposta]}>
                  <Text style={styles.statusTxt}>
                    {total_mensagens}{' '}
                    {total_mensagens > 1 ? 'MENSAGENS' : 'MENSAGEM'} LIDA
                    {total_mensagens > 1 ? 'S' : ''}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black, marginBottom: 1}}>
        <View style={{flex: 1, backgroundColor: colors.grayrow}}>
          <HeaderTitulo titulo="HISTÓRICO" navigation={this.props.navigation} />

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.props.mensagens.loading}
                onRefresh={this._onRefresh}
              />
            }>
            <View style={styles.container}>
              <Text style={styles.txtInicial}>
                Veja abaixo seu histórico de mensagens ou clique no botão abaixo
                para entrar em contato.
              </Text>

              <ButtonDefault
                label={`ADICIONAR NOVA MENSAGEM`}
                style={styles.buttonContainer}
                textStyle={styles.txtButton}
                onPress={() => {
                  navigation.push('novoFaleConosco');
                }}
              />
            </View>
            <View style={styles.container}>
              <View style={styles.itens}>
                {this.props.mensagens.data.length > 0 ? (
                  this.renderList()
                ) : (
                  <View style={styles.containerMensagemVazia}>
                    <Image
                      style={styles.imgSmile}
                      source={require('../../assets/smile.png')}
                    />
                    <Text style={styles.txtMensagemVazia}>
                      Você ainda não possui histórico de mensagens.
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  mensagens: state.mensagens,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...MensagensActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoMensagens);
