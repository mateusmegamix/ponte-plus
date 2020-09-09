import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  ImageBackground,
  NetInfo,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import general from '../../config/general';
import Icon from 'react-native-vector-icons/FontAwesome';

import Alerts from '../../components/Alert';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as actionsBeneficiosActions} from '../../store/ducks/actionsBeneficios';
import ButtonDefault from '../ButtonDefault';

class ListBeneficios extends Component {
  state = {
    modalVisibleAlert: false,
    semconexao: '',
    modalVisibleAlertJaSolicitou: false,
    setModalVisibleAlert: false,
    modalVisibleAlertConcluido: false,
  };

  setModalVisibleAlert(visible) {
    this.setState({modalVisibleAlert: visible});
  }

  setModalVisibleAlertConcluido(visible) {
    this.setState({modalVisibleAlert: false});
    this.setState({modalVisibleAlertConcluido: visible});
  }

  openAlert = async (e) => {
    // this.setState({ modalVisibleAlert: true });
    let getItemJaSelecionou = await AsyncStorage.getItem('jaselecionou');

    var total = getItemJaSelecionou != null ? getItemJaSelecionou.length : 0;
    var itemparseado = JSON.parse(getItemJaSelecionou);
    //console.log(getItemJaSelecionou, 'GET ITEM')
    var getItemJaSelecionouTeste = false;
    if (itemparseado) {
      var result = itemparseado.find((obj) => {
        return obj.id === e.Id;
      });
      //console.log(itemparseado, 'itemparseado')
      //console.log(result, 'RESULTADO')
      if (result) {
        this.setState({
          modalVisibleAlertJaSolicitou: true,
        });
      } else {
        this.setState({
          modalVisibleAlert: true,
        });
      }
    } else {
      this.setState({
        modalVisibleAlert: true,
      });
    }
  };

  ConfirmarAviso = async () => {
    let getItemJaSelecionou = [];
    if (getItemJaSelecionou != null) {
      getItemJaSelecionou.push({id: this.props.data.Id});
    } else {
      getItemJaSelecionou = [{id: this.props.data.Id}];
    }
    await AsyncStorage.setItem(
      'jaselecionou',
      JSON.stringify(getItemJaSelecionou),
    );

    let token = await AsyncStorage.getItem('UserData');
    let params = {
      token,
      idrecompensa: this.props.data.Id,
    };
    this.setState({modalVisibleAlert: false});
    this.setState({modalVisibleAlertConcluido: true});
    this.props.getBeneficiosAvisaRequest(params);
  };
  onInterna = () => {
    this.props.actionsBeneficios.data == '';
    this.props.navigation.push('RecompensaInterna', {
      recompensa: this.props.data,
    });
  };

  componentWillUnmount() {}

  render() {
    const {data, navigation, homeContext} = this.props;

    var descricao_pura = '';

    if (data.Descricao)
      descricao_pura = data.Descricao.replace(/<(?:.|\n)*?>/gm, '');

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.item}
        onPress={() => {
          this.onInterna();
        }}>
        <Image
          source={{uri: general.imagemBeneficio + data.Imagem}}
          style={styles.imageItem}
        />
        <View style={styles.content}>
          <Text style={styles.titleItem}>
            {String(data.Nome).toUpperCase()}
          </Text>
          <Text style={styles.descriptionItem} numberOfLines={2}>
            {descricao_pura}
          </Text>
          <View style={styles.footer}>
            <View style={styles.containerPontos}>
              <Text style={styles.pontos}>{data.Pontuacao}</Text>
              <Text style={styles.ptsLower}>PTS</Text>
            </View>
            {data.StatusApp == 'Avise-me' ? (
              <View style={[styles.containerBtns, {marginTop: 5}]}>
                <Text style={styles.indisponivel}>INDISPONÍVEL</Text>

                <ButtonDefault
                  label={`AVISE-ME`}
                  style={[styles.buttonGeneric, styles.buttonAviseMe]}
                  txtStyle={styles.txtButton}
                  onPress={() => {
                    this.openAlert(data);
                  }}
                />
              </View>
            ) : null}
            {data.StatusApp == 'Disponível' ? (
              <View style={styles.containerBtns}>
                <ButtonDefault
                  label={`RESGATAR`}
                  style={[styles.buttonGeneric, styles.buttonResgatar]}
                  txtStyle={styles.txtButton}
                  onPress={() => {
                    navigation.push('RecompensaInterna', {recompensa: data});
                  }}
                />
              </View>
            ) : null}
            {data.StatusApp == 'Saldo Insuficiente' ? (
              <View style={styles.containerBtns}>
                <ButtonDefault
                  label={`INSUFICIENTE`}
                  style={[styles.buttonGeneric, styles.buttonIndisponivel]}
                  txtStyle={styles.txtButton}
                />
              </View>
            ) : null}
            {data.StatusApp == 'Indisponível' ? (
              <View style={styles.containerBtns}>
                <ButtonDefault
                  label={`INDISPONÍVEL`}
                  style={[styles.buttonGeneric, styles.buttonIndisponivel]}
                  txtStyle={styles.txtButton}
                />
              </View>
            ) : null}
          </View>
        </View>

        <Alerts
          icon="envelope"
          visible={this.state.modalVisibleAlert}
          mensagem="AVISE-ME"
          descricao={
            <Text>
              Deseja ser alertado por{' '}
              <Text style={{fontWeight: 'bold'}}>e-mail</Text> e{' '}
              <Text style={{fontWeight: 'bold'}}>push</Text> quando essa
              recompensa estiver disponivel?
            </Text>
          }
          descricaoStyle={{marginBottom: 15}}
          buttonsDirections="row"
          buttons={[
            {
              style: styles.btnNo,
              btnLabel: 'NÃO',
              acao: () => {
                this.setModalVisibleAlert(false);
              },
            },
            {
              style: styles.btnYes,
              btnLabel: 'SIM',
              acao: () => {
                this.ConfirmarAviso();
              },
            },
          ]}
          closeAction={() => {
            this.setModalVisibleAlert(false);
          }}
        />

        <Alerts
          visible={this.state.modalVisibleAlertConcluido}
          icon="check"
          mensagem="ALERTA CRIADO COM SUCESSO!"
          closeAction={() =>
            this.setState({
              modalVisibleAlertConcluido: false,
            })
          }
        />

        <Alerts
          visible={this.state.modalVisibleAlertJaSolicitou}
          mensagem="ALERTA JÁ SOLICITADO"
          descricao="Você já solicitou alerta para essa recompensa."
          closeAction={() =>
            this.setState({
              modalVisibleAlertJaSolicitou: false,
            })
          }
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({
  actionsBeneficios: state.actionsBeneficios,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...actionsBeneficiosActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ListBeneficios);
