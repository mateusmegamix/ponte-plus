import React from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
import Loading from '../../components/loading';

import Icon from 'react-native-vector-icons/FontAwesome';

import HTML from 'react-native-render-html';


//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PaginasActions } from '../../store/ducks/paginas';
import images from '../../styles/images';

class termosUso extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  async componentDidMount() {
    this.props.getPaginasRequest()
  }

  render() {
    const { paginas, navigation } = this.props;
    const { goBack } = navigation;

    const Termos = "<regulamento>" + paginas.data.TermosUso.Texto + "</regulamento>";

    return (
      <View style={styles.container}>
        <Loading loading={this.props.paginas.loading} />
        <ScrollView>
          <Text style={styles.iconTimes} onPress={() => goBack()}>
            <Icon name="times" size={25} />
          </Text>

          <View style={styles.conteudo}>
            <Image
              source={images.logo2}
              style={styles.logo}
            />
            <Text style={styles.txtEsquecisenha}>TERMO DE USO E POLÍTICA DE PRIVACIDADE</Text>

            <HTML tagsStyles={{
              h1: { color: colors.cadastro.termosUso.h1, fontSize: metrics.defaultFontSizeTitle, marginBottom: 10 },
              h2: { color: colors.corPrincipal1, fontSize: metrics.defaultFontSizeTitle },
              div: { textAlign: 'left', paddingBottom: 15, paddingTop: 15 }
            }} html={Termos} imagesMaxWidth={Dimensions.get('window').width} />

            <View style={styles.footer}>
              <Text style={styles.iconBack} onPress={() => goBack()} >
                <Icon name="arrow-left" size={20} color={colors.cadastro.termosUso.iconeVoltar} />
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  paginas: state.paginas,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...PaginasActions,
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(termosUso);
