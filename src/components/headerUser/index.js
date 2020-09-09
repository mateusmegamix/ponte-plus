import React from 'react';
import {Alert, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import general from '../../config/general';
//redux
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as NotificacoesActions} from '../../store/ducks/notificacoes';
import {Creators as PushActions} from '../../store/ducks/push';

class headerUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    this.props.getAssociadoRequest(token);

    this.props.getNotificacoesRequest(token);

    let params = {
      idUsuario: await AsyncStorage.getItem('IdUsuario'),
      SistemOp: await AsyncStorage.getItem('SistemaOp'),
      tokenHash: await AsyncStorage.getItem('HashToken'),
    };
    this.props.getPushRequest(params);
  };

  btn_notificacao = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    var notificacoes = this.props.notificacoes.data;
    var total_nao_lidas = notificacoes.filter((obj) => obj.Lido === false)
      .length;
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          {general.exibeCategoriaPontos ? (
            <View style={styles.medalhas}>
              <Image
                style={styles.icoMedal}
                source={{
                  uri:
                    general.imagemMedalha +
                    this.props.associado.data.Categoria?.Imagem,
                }}
              />
            </View>
          ) : (
            <View style={styles.medalhas}></View>
          )}

          <View style={styles.dados}>
            <Text style={styles.nome}>
              {String(this.props.associado.data.Nome).toUpperCase()}
            </Text>
            <Text style={styles.txtPts}>
              Você possui {this.props.associado.data.SaldoPontos} pts
            </Text>
          </View>

          <TouchableOpacity onPress={this.btn_notificacao}>
            <View style={styles.notificacoes}>
              <Image
                style={styles.icoNotificacoes}
                source={require('../../assets/icone_superior.png')}
              />
              {total_nao_lidas > 0 ? (
                <View style={styles.alert}>
                  <Text style={styles.alertNumber}>{total_nao_lidas}</Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  associado: state.associado,
  push: state.push,
  notificacoes: state.notificacoes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...AssociadosActions,
      ...PushActions,
      ...NotificacoesActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(headerUser);
