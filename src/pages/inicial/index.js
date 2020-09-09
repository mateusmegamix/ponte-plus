import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';
import HTML from 'react-native-render-html';
// import {SafeAreaView} from 'react-navigation';
import colors from '../../styles/colors';
import HeaderTitulo from '../../components/HeaderTitulo';
//redux
import {connect} from 'react-redux';
import Loader from '../../components/loading';
import {bindActionCreators} from 'redux';
import {Creators as PaginasActions} from '../../store/ducks/paginas';

import {View} from 'native-base';
import metrics from '../../styles/metrics';
import ButtonDefault from '../../components/ButtonDefault';
import images from '../../styles/images';
import AsyncStorage from '@react-native-community/async-storage';

class Inicial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder', activeSections: []};
  }

  _renderHeader = (section, i) => {
    return (
      <View>
        <View style={i != 0 ? styles.titacordBorder : styles.titacord}>
          <Text style={styles.textacord}>{section.title}</Text>
          <Icon name="angle-down" style={styles.icoSeta} />
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <HTML
          tagsStyles={{sobre: styles.txtConteudo}}
          html={section.content}
          imagesMaxWidth={Dimensions.get('window').width}
        />
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({activeSections});
  };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('UserData');
    this.props.getPaginasRequest(token);
  }

  render() {
    const {navigation, paginas} = this.props;
    const Sobre = '<sobre>' + paginas.data.SobreOPrograma + '</sobre>';
    const Sobre_Topo =
      '<sobre>' + paginas.data.SobreOPrograma_topo + '</sobre>';
    const Recompensa = '<sobre>' + paginas.data.Recompensa + '</sobre>';
    const Beneficio = '<sobre>' + paginas.data.Beneficios + '</sobre>';

    var SECTIONS = [];

    if (paginas.data.Recompensa)
      SECTIONS.push({
        title: paginas.data.Recompensa.Titulo,
        content: paginas.data.Recompensa.Texto,
      });

    if (paginas.data.Beneficios)
      SECTIONS.push({
        title: paginas.data.Beneficios.Titulo,
        content: paginas.data.Beneficios.Texto,
      });

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.black, marginBottom: 1}}>
        <View
          style={{
            flex: 1,
            height: metrics.screenHeight,
            backgroundColor: colors.grayrow,
          }}>
          <Loader loading={this.props.paginas.loading} />

          <HeaderTitulo
            titulo="O PONTEPLUS"
            navigation={this.props.navigation}
          />

          <ScrollView>
            <View style={styles.container}>
              <Image source={images.inicial.logo} style={styles.logo} />
              {paginas.data.SobreOPrograma_topo ? (
                <HTML
                  tagsStyles={{sobre: styles.txtChamada}}
                  html={Sobre_Topo}
                  imagesMaxWidth={Dimensions.get('window').width}
                />
              ) : null}

              <View style={styles.buttonContainer}>
                <ButtonDefault
                  label={`REGULAMENTO`}
                  style={styles.buttonRegulamento}
                  txtStyle={styles.txtButton}
                  onPress={() => {
                    navigation.navigate('regulamento');
                  }}
                />

                <ButtonDefault
                  label={`DÚVIDAS`}
                  style={styles.buttonDuvidas}
                  txtStyle={styles.txtButton}
                  onPress={() => {
                    navigation.navigate('DuvidasFrequentesStack');
                  }}
                />
              </View>
              <Text style={styles.titleConteudo}>PONTEPLUS</Text>
              <View style={styles.containerTxt}>
                {paginas.data.SobreOPrograma ? (
                  <HTML
                    tagsStyles={{sobre: styles.txtConteudo}}
                    html={Sobre}
                    imagesMaxWidth={Dimensions.get('window').width}
                  />
                ) : null}

                {SECTIONS.length > 0 ? (
                  <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                  />
                ) : null}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  paginas: state.paginas,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...PaginasActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Inicial);
