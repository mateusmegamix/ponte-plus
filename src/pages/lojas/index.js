import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Alert,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  ActionSheetIOS,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import styles from './styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import general from '../../config/general';
import FlatlistInfiniteScroll from '../../components/FlatlistInfiniteScroll';
import HeaderUser from '../../components/headerUser';
import AsyncStorage from '@react-native-community/async-storage';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {SafeAreaView} from 'react-navigation';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as LojasActions} from '../../store/ducks/lojas';
import metrics from '../../styles/metrics';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 100;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

FILTRO_BTN_IOS = [];

class Lojas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      segmento: '',
      inputSegmento: '',
      filtroAndroid: '',
      loja: '',
      inputLoja: '',
      loading: false,
      modalVisible: false,
    };
  }

  nextPage = async () => {
    await this.setState({page: this.state.page + 1});
  };

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    try {
      this.props.getLojasRequest(token);
    } catch (error) {
      Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
    }
  };

  renderList = () => {
    const {navigation} = this.props;

    var segmento = this.state.segmento;
    var loja = this.state.loja;
    var data = this.props.lojas.data;

    const segmentoSelecionado = segmento !== '' && segmento !== undefined;
    const lojaSelecionada = loja !== '' && loja !== undefined;
    const todosELojaSelecionada = segmento == 'Todos' && loja !== '';
    // console.log('DATAAAA', data)
    // console.log('STATE', this.state)
    // console.log('SEGMENTO', segmento)

    // console.log('array filtroAndroid', this.state.filtroAndroid)

    // BLOCO DO FILTRO
    if (segmento == 'Selecione o segmento')
      this.setState({modalVisible: false});

    if (segmentoSelecionado)
      data = data.filter((d) => d.Segmentos.indexOf(segmento) != -1);

    if (lojaSelecionada)
      data = data.filter(
        (d) => d.Nome.toLowerCase().indexOf(loja.toLowerCase()) != -1,
      );

    if (
      (segmentoSelecionado && lojaSelecionada) ||
      (segmento == 'Selecione o segmento' && lojaSelecionada)
    )
      data = data.filter(
        (d) => d.Nome.toLowerCase().indexOf(loja.toLowerCase()) != -1,
      );

    if (segmento == 'Todos') data = this.props.lojas.data;

    if (todosELojaSelecionada)
      data = data.filter(
        (d) => d.Nome.toLowerCase().indexOf(loja.toLowerCase()) != -1,
      );

    return data.length > 0 ? (
      <FlatlistInfiniteScroll
        itensPorPagina={10}
        page={this.state.page}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.item}
            onPress={() => {
              navigation.navigate('lojasInterna', {loja: item});
            }}>
            <Image
              source={{uri: general.imagemLojas + item.Logo}}
              style={styles.imgItem}
            />
            <Text style={styles.nameItem}>{item.Nome}</Text>
          </TouchableOpacity>
        )}
      />
    ) : (
      <View style={styles.containerMensagemVazia}>
        <Image
          style={styles.imgSmile}
          source={require('../../assets/smile.png')}
        />
        <Text style={styles.txtMensagemVazia}>
          Nenhuma loja encontrada. Filtre novamente.
        </Text>
      </View>
    );
  };

  showActionSheet() {
    if (this.props.lojas.data.segmentos) {
      FILTRO_BTN_IOS = ['Todos'];
      FILTRO_BTN_IOS = FILTRO_BTN_IOS.concat(
        this.props.lojas.data.segmentos.map((s) => s.Segmento),
      );
      FILTRO_BTN_IOS.push('Fechar');
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: FILTRO_BTN_IOS,
        cancelButtonIndex: FILTRO_BTN_IOS.length - 1,
      },
      (buttonIndex) => {
        if (buttonIndex != FILTRO_BTN_IOS.length - 1) {
          this.setState({inputSegmento: FILTRO_BTN_IOS[buttonIndex]});
        }
      },
    );
  }

  render() {
    var FILTROS_ANDROID = [
      {Id: '', Segmento: 'Selecione o segmento'},
      {Id: 0, Segmento: 'Todos'},
    ];

    if (this.props.lojas.data.segmentos)
      FILTROS_ANDROID = FILTROS_ANDROID.concat(this.props.lojas.data.segmentos);

    //console.log(FILTROS_ANDROID,"Filtros android")

    const {navigation} = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={styles.containerFull}>
          <HeaderUser navigation={navigation} />

          <View style={styles.containerSearch}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.buttonSearch}
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <Icon name="search" size={25} style={styles.iconSearch} />
            </TouchableOpacity>
          </View>

          <ScrollView
            ref={(view) => {
              this.scrollView = view;
            }}
            scrollEventThrottle={500}
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                this.nextPage();
              }
            }}>
            <View style={styles.containerDetalhes}>
              <Text style={styles.titlePag}>
                CONFIRA TODAS AS LOJAS QUE PARTICIPAM DO PROGRAMA.
              </Text>

              {/* {
                  Platform.OS == 'ios'
                    ?
                    <View style={styles.containerSearch} >
                      <TouchableOpacity activeOpacity={0.9} style={styles.buttonSearch}
                        onPress={() => {
                          this.setState({ modalVisible: true })
                        }
                        }>
                        <Icon name="search" size={20}
                          style={styles.iconSearch} />
                      </TouchableOpacity>
                    </View>
                    : null
                } */}

              <View style={{paddingBottom: 210, height: 'auto'}}>
                {this.renderList()}
              </View>
            </View>
          </ScrollView>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({
              modalVisible: false,
              inputLoja: '',
              inputSegmento: '',
            });
          }}>
          <KeyboardAwareScrollView
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.modalTopoTransparent}
              onPress={() => {
                this.setState({
                  modalVisible: false,
                  inputLoja: '',
                  inputSegmento: '',
                });
              }}>
              <Icon
                name="times"
                size={15}
                style={styles.iconClose}
                onPress={() => this.setState({modalVisible: false})}
              />
            </TouchableOpacity>
            <View style={styles.modalContent}>
              <View style={styles.boxModal}>
                <Text style={styles.txtH1}>BUSCAR LOJAS</Text>
                <Text style={styles.descricaoModal}>
                  Utilize os campos abaixo para encontrar a loja que procura.
                </Text>

                {Platform.OS == 'ios' ? (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.showActionSheet();
                    }}>
                    <View style={styles.containerPick}>
                      <Icon
                        name="list"
                        size={15}
                        color="black"
                        style={{marginRight: 10, position: 'relative', top: 3}}
                      />
                      <Text style={{height: 30, fontSize: 15.5}}>
                        {this.state.inputSegmento !== ''
                          ? this.state.inputSegmento
                          : 'Selecione o segmento'}
                      </Text>
                      <Icon
                        name="angle-down"
                        size={15}
                        color="black"
                        style={{position: 'absolute', left: '95%'}}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                ) : null}
                {Platform.OS == 'android' ? (
                  <View style={styles.containerPickAndroid}>
                    <Picker
                      mode="dropdown"
                      selectedValue={this.state.inputSegmento}
                      placeholder="Selecione o segmento"
                      style={styles.camposSelect}
                      textStyle={{fontSize: 1}}
                      itemTextStyle={{fontSize: 1}}
                      onValueChange={(itemValue) => {
                        this.setState({inputSegmento: itemValue});
                      }}>
                      {FILTROS_ANDROID.map((v) => (
                        <Picker.Item label={v.Segmento} value={v.Segmento} />
                      ))}
                    </Picker>
                  </View>
                ) : null}

                <View style={[styles.containerPick]}>
                  {Platform.OS == 'ios' ? (
                    <Icon
                      name="shopping-bag"
                      size={15}
                      color="black"
                      style={{marginRight: 0, position: 'relative', top: 3}}
                    />
                  ) : null}
                  <TextInput
                    returnKeyType="next"
                    style={[styles.camposInput, styles.containerPickerIOS]}
                    value={this.state.inputLoja}
                    placeholder="Digite aqui a loja que deseja buscar"
                    autoCapitalize="none"
                    keyboardType="default"
                    autoCorrect={false}
                    textContentType="none"
                    placeholderTextColor={colors.black}
                    onChangeText={(inputLoja) => this.setState({inputLoja})}
                  />
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonEnviar}
                  onPress={() => {
                    this.setState({
                      modalVisible: false,
                      loja: this.state.inputLoja,
                      segmento: this.state.inputSegmento,
                      inputSegmento: '',
                      inputLoja: '',
                    });

                    setTimeout(() => {
                      this.scrollView.scrollTo({x: 0, y: 0, animated: true});
                    }, 1);
                  }}>
                  <Text style={styles.txtButton}> FILTRAR </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonVoltar}
                  onPress={() => {
                    this.setState({
                      modalVisible: false,
                      inputLoja: '',
                      inputSegmento: '',
                    });
                  }}>
                  <Text style={styles.txtButtonVoltar}> VOLTAR </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lojas);
