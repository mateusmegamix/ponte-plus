import React from 'react';
import {
  Text,
  FlatList,
  View,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import {NavigationActions, StackActions} from 'react-navigation';
import {navigatorRef} from '../../App';
import colors from '../../styles/colors';
import HeaderTitulo from '../../components/HeaderTitulo';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as NotificacoesActions} from '../../store/ducks/notificacoes';

import ListNotificacoes from '../../components/listNotificacoes';
import Icon from 'react-native-vector-icons/FontAwesome';

class Notificacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');

    try {
      this.props.getNotificacoesRequest(token);
      this.props.getAssociadoRequest(token);
    } catch (error) {
      Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
    }
  };
  logout() {
    const {navigation} = this.props;

    AsyncStorage.removeItem('UserData', () => {
      const nav = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'LoginStack',
          }),
        ],
        key: null,
      });
      navigatorRef.dispatch(nav);
    });
  }

  renderList = () => (
    <FlatList
      data={this.props.notificacoes.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <ListNotificacoes data={item} navigation={this.props.navigation} />
      )}
    />
  );

  render() {
    const {navigation} = this.props;
    //console.log('ASSOCIADO NOTF')
    //console.log(this.props.associado.data)
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black}}
        forceInset={{bottom: 'never'}}>
        <HeaderTitulo
          titulo="NOTIFICAÇÕES"
          navigation={this.props.navigation}
        />

        <View style={{flex: 1, backgroundColor: colors.grayrow}}>
          <Text style={styles.titlePag}>CONFIRA AS ÚLTIMAS NOTIFICAÇÕES.</Text>

          <View style={styles.listNotification}>
            {this.props.notificacoes.data != 0 ? (
              this.renderList()
            ) : (
              <View style={styles.containerMensagemVazia}>
                <Image
                  style={styles.imgSmile}
                  source={require('../../assets/smile.png')}
                />
                <Text style={styles.txtMensagemVazia}>
                  Aguarde novas notificações.
                </Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  associado: state.associado,
  notificacoes: state.notificacoes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...NotificacoesActions,
      ...AssociadosActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Notificacao);
