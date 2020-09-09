import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  Platform,
  SafeAreaView,
} from 'react-native';
// import {SafeAreaView} from 'react-navigation';
import colors from '../../styles/colors';
import HeaderTitulo from '../../components/HeaderTitulo';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as DuvidasFrequentesActions} from '../../store/ducks/duvidasfrequentes';

class duvidasFrequentes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
    this.navigation = this.props.navigation;
  }
  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    try {
      this.props.getDuvidasFrequentesRequest(token);
    } catch (error) {
      Alert.alert('Erro ao carregar a tela. Tente novamente mais tarde.');
    }
  };
  renderList = () => {
    return (
      <FlatList
        data={this.props.duvidasfrequentes.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.itemPergunta}
            onPress={() => {
              this.navigation.push('duvidasFrequentesInterna', {
                duvidafrequente: item,
              });
            }}>
            <Text style={styles.tituloPergunta}>{item.Pergunta}</Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: colors.black}}>
        <HeaderTitulo
          titulo="DÚVIDAS FREQUENTES"
          navigation={this.props.navigation}
        />
        <View style={styles.containerFull}>
          <ScrollView>
            <View style={styles.container}>
              <View style={{marginTop: 20, width: '100%', paddingBottom: 145}}>
                <Text style={styles.dataItem}>VEJA AS PRINCIPAIS DÚVIDAS</Text>
                {this.renderList()}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  duvidasfrequentes: state.duvidasfrequentes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...DuvidasFrequentesActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(duvidasFrequentes);
