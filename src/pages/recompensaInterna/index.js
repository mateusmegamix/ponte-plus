import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import general from '../../config/general';

import {Transition} from 'react-navigation-fluid-transitions';
import Loading from '../../components/loading';
import HeaderTitulo from '../../components/HeaderTitulo';

import Alerts from '../../components/Alert';
// import {SafeAreaView} from 'react-navigation';
import HTML from 'react-native-render-html';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as BeneficiosActions} from '../../store/ducks/beneficios';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as actionsBeneficiosActions} from '../../store/ducks/actionsBeneficios';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import ButtonDefault from '../../components/ButtonDefault';

class RecompensaInterna extends React.Component {
  constructor(props) {
    super(props);
    this.recompensa = {Nome: ''};

    this.state = {
      text: 'Useless Placeholder',
      modalVisible: false,
      modalVisibleAlert: false,
      modalVisibleResgateConcluido: false,
      modalVisibleResgateConcluido_IdResgate: '',
      modalVisibleResgateConcluido_success: false,
      modalVisibleResgateConcluido_message: '',
      modalVisibleResgateConcluido_titulo: '',
      modalVisibleError: false,
      modalVisibleAlertJaSolicitou: false,
      modalVisibleAlertConcluido: false,
    };
  }

  async componentDidMount() {
    navigatorRef = this.navigatorRef;
    let token = await AsyncStorage.getItem('UserData');
    this.props.getBeneficiosRequest(token);
    this.props.getAssociadoRequest(token);
    //console.log(this.props.beneficios, 'BENEFICIOS')
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisibleAlert(visible) {
    this.setState({modalVisibleAlert: visible});
  }

  ConfirmarCompra = async () => {
    let token = await AsyncStorage.getItem('UserData');
    let params = {
      token,
      idrecompensa: this.props.navigation.state.params.recompensa.Id,
      onSuccess: (response) => {
        var data = response.data;

        console.log(data);
        this.setState({modalVisibleResgateConcluido_IdResgate: data.IdResgate});
        this.setState({modalVisibleResgateConcluido_success: data.Success});
        this.setState({modalVisibleResgateConcluido_message: data.Mensagem});
        this.setState({modalVisibleResgateConcluido_titulo: data.Titulo});

        this.setModalVisible(false);
        this.setState({
          modalVisibleAlert: false,
          modalVisibleResgateConcluido: true,
        });
      },
    };
    this.props.getBeneficiosResgateRequest(params);
  };

  openAlert = async (e) => {
    // this.setState({ modalVisibleAlert: true });
    let getItemJaSelecionou = await AsyncStorage.getItem('jaselecionou');

    var total = getItemJaSelecionou != null ? getItemJaSelecionou.length : 0;
    var itemparseado = JSON.parse(getItemJaSelecionou);
    var getItemJaSelecionouTeste = false;
    if (itemparseado) {
      var result = itemparseado.find((obj) => {
        return obj.id === e.Id;
      });
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
    console.log(
      this.props.navigation.state.params,
      'this.props.navigation.state.params',
    );
    if (getItemJaSelecionou != null) {
      getItemJaSelecionou.push({
        id: this.props.navigation.state.params.recompensa.Id,
      });
    } else {
      getItemJaSelecionou = [
        {id: this.props.navigation.state.params.recompensa.Id},
      ];
    }
    await AsyncStorage.setItem(
      'jaselecionou',
      JSON.stringify(getItemJaSelecionou),
    );

    let token = await AsyncStorage.getItem('UserData');
    let params = {
      token,
      idrecompensa: this.props.navigation.state.params.recompensa.Id,
    };
    this.setState({modalVisibleAlert: false});
    this.setState({modalVisibleAlertConcluido: true});
    this.props.getBeneficiosAvisaRequest(params);
  };

  async componentWillReceiveProps(props) {
    if (props.actionsBeneficios.data == 'Sucesso') {
      //console.log('entrou sucesso')
      this.setModalVisibleAlertConcluido(true);
    } else if (props.beneficios.error.Message == '') {
      this.setState({modalVisibleError: true});
    }
  }

  renderDiaseHours() {
    return (
      <View style={{marginTop: 0}}>
        {this.recompensa.Status != 4 && this.recompensa.Status != 6 ? ( // 4= indisponivel  6 = avise-me
          this.recompensa.ValidadeVoucher != 0 ? (
            <View style={styles.prazo}>
              <Icon
                name="calendar"
                size={15}
                color={colors.black}
                style={styles.iconePrazo}
              />
              {this.recompensa.Status == 5 ? ( // 5 = Saldo insuficiente
                this.recompensa.ValidadeVoucher === 1 ? (
                  <Text style={styles.txtPrazo}>
                    Resta apenas {this.recompensa.ValidadeVoucher} dia para essa
                    recompensa expirar.
                  </Text>
                ) : (
                  <Text style={styles.txtPrazo}>
                    Restam apenas {this.recompensa.ValidadeVoucher} dias para
                    essa recompensa expirar.
                  </Text>
                )
              ) : this.recompensa.ValidadeVoucher === 1 ? (
                <Text style={styles.txtPrazo}>
                  Você tem {this.recompensa.ValidadeVoucher} dia para efetuar o
                  resgate.
                </Text>
              ) : (
                <Text style={styles.txtPrazo}>
                  Você tem {this.recompensa.ValidadeVoucher} dias para efetuar o
                  resgate.
                </Text>
              )}
            </View>
          ) : null
        ) : null}
        {this.recompensa.Status != 4 && this.recompensa.Status != 6 ? ( // 4= indisponivel  6 = avise-me
          this.recompensa.ValidadeVoucher == 0 &&
          this.recompensa.TempoTroca != 0 ? (
            <View style={styles.prazo}>
              <Icon
                name="clock-o"
                size={15}
                color={colors.black}
                style={styles.iconePrazo}
              />
              {this.recompensa.Status == 5 ? ( // 5 = Saldo insuficiente
                this.recompensa.ValidadeVoucher === 1 ? (
                  <Text style={styles.txtPrazo}>
                    Resta apenas {this.recompensa.TempoTroca} hora para essa
                    recompensa expirar.
                  </Text>
                ) : (
                  <Text style={styles.txtPrazo}>
                    Restam apenas {this.recompensa.TempoTroca} horas para essa
                    recompensa expirar.
                  </Text>
                )
              ) : this.recompensa.TempoTroca === 1 ? (
                <Text style={styles.txtPrazo}>
                  Você tem {this.recompensa.TempoTroca} hora para efetuar o
                  resgate.
                </Text>
              ) : (
                <Text style={styles.txtPrazo}>
                  Você tem {this.recompensa.TempoTroca} horas para efetuar o
                  resgate.
                </Text>
              )}
            </View>
          ) : null
        ) : null}
      </View>
    );
  }

  render() {
    const {navigation} = this.props;
    const {recompensa, Id} = navigation.state.params;
    console.log(navigation.state.params, 'navigation.state.params');

    var descricao = '';

    if (this.recompensa.Descricao)
      descricao =
        '<recompensa>' +
        this.recompensa.Descricao.replace(/\n/g, '<br>') +
        '</recompensa>';

    var Id_encontrado = Id;
    if (recompensa) Id_encontrado = recompensa.Id;

    if (Id_encontrado) {
      found = this.props.beneficios.data.find((b) => b.Id == Id_encontrado);
      if (found !== undefined) {
        this.recompensa = found;
      }
    }

    if (this.state.modalVisibleResgateConcluido_success)
      botoesFeedbackResgate = [
        {
          btnLabel: 'VER VOUCHER',
          acao: () => {
            this.props.navigation.navigate('Recompensa', {
              pageSelected: 'meus_resgates',
              IdResgate: this.state.modalVisibleResgateConcluido_IdResgate,
            });
            this.setState({modalVisibleResgateConcluido: false});
          },
        },
        {
          btnLabel: 'FECHAR',
          acao: () => {
            this.setState({modalVisibleResgateConcluido: false});
          },
        },
      ];
    else
      botoesFeedbackResgate = [
        {
          btnLabel: 'FECHAR',
          acao: () => {
            this.setState({modalVisibleResgateConcluido: false});
          },
        },
      ];

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black}}
        forceInset={{bottom: 'never'}}>
        <View style={styles.containerFull}>
          {/* <Loading loading={this.props.actionsBeneficios.loading} /> */}

          <HeaderTitulo
            titulo="RESGATAR RECOMPENSA"
            navigation={this.props.navigation}
          />

          <ScrollView bounces={ifIphoneX(false)}>
            <Image
              source={{uri: general.imagemBeneficio + this.recompensa.Imagem}}
              style={styles.imgItem}
            />

            <Transition appear="horizontal">
              <View style={[styles.containerDetalhes, styles.transitionWidth]}>
                <View style={styles.containerTitle}>
                  <Text style={styles.titulo}>
                    {String(this.recompensa.Nome).toUpperCase()}
                  </Text>
                  <View style={styles.containerPontos}>
                    <Text style={styles.pontos}>
                      {this.recompensa.Pontuacao}
                    </Text>
                    <Text style={styles.txtPontos}>PTS</Text>
                  </View>
                </View>
                <HTML
                  tagsStyles={{recompensa: styles.descricao}}
                  html={descricao}
                  imagesMaxWidth={Dimensions.get('window').width}
                />
              </View>
            </Transition>

            {this.recompensa.StatusApp == 'Indisponível'
              ? null
              : this.renderDiaseHours()}

            {this.recompensa.QuantidadeDisponivel == 0 ? null : (
              <View style={styles.btnUnidades}>
                <Text style={styles.txtUnidades}>
                  {this.recompensa.QuantidadeDisponivel} UNIDADES PARA RESGATE
                </Text>
              </View>
            )}
            {this.recompensa.StatusApp == 'Avise-me' ? (
              <View>
                <Text style={styles.txtIndisponivel}>INDISPONÍVEL</Text>
                <ButtonDefault
                  label={`AVISE-ME`}
                  style={styles.btnAviseme}
                  textStyle={styles.fontButton}
                  onPress={() => {
                    this.openAlert(this.recompensa);
                  }}
                />
              </View>
            ) : null}

            {this.recompensa.StatusApp == 'Disponível' &&
            this.props.associado.data.SaldoPontos >
              this.recompensa.Pontuacao ? (
              <ButtonDefault
                label={`RESGATAR AGORA`}
                style={styles.btnResgate}
                txtStyle={styles.fontButton}
                onPress={() => {
                  this.setModalVisible(true);
                }}
              />
            ) : null}

            {this.recompensa.StatusApp == 'Saldo Insuficiente' ? (
              <ButtonDefault
                label={`INSUFICIENTE`}
                style={styles.btnIndisponivel}
                textStyle={styles.fontButton}
              />
            ) : null}

            {this.recompensa.StatusApp == 'Indisponível' ? (
              <ButtonDefault
                label={`INDISPONÍVEL`}
                style={styles.btnIndisponivel}
                textStyle={styles.fontButton}
              />
            ) : null}

            <Alerts
              icon="gift"
              visible={this.state.modalVisible}
              mensagem="CONFIRMAR RESGATE"
              descricao={`Ao confirmar o resgate,\n${this.recompensa.Pontuacao} pontos dos seus ${this.props.associado.data.SaldoPontos} pontos serão debitados automaticamente.`}
              descricaoStyle={{marginBottom: 15}}
              buttonsDirections="row"
              buttons={[
                {
                  style: styles.btnRecusar,
                  btnLabel: 'RECUSAR',
                  acao: () => {
                    this.setModalVisible(false);
                  },
                },
                {
                  style: styles.btnAceitar,
                  btnLabel: 'CONTINUAR',
                  acao: () => {
                    this.ConfirmarCompra();
                  },
                },
              ]}
              closeAction={() => {
                this.setModalVisible(false);
              }}
            />

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
              icon={
                this.state.modalVisibleResgateConcluido_success
                  ? 'check'
                  : 'times'
              }
              visible={this.state.modalVisibleResgateConcluido}
              mensagem={this.state.modalVisibleResgateConcluido_titulo.toUpperCase()}
              descricao={this.state.modalVisibleResgateConcluido_message}
              buttons={botoesFeedbackResgate}
              closeAction={() => {
                this.setState({modalVisibleResgateConcluido: false});
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
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  beneficios: state.beneficios,
  associado: state.associado,
  actionsBeneficios: state.actionsBeneficios,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...BeneficiosActions,
      ...AssociadosActions,
      ...actionsBeneficiosActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecompensaInterna);
