import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import HTML from 'react-native-render-html';

// import {SafeAreaView} from 'react-navigation';
import Loader from '../../components/loading';
import HeaderTitulo from '../../components/HeaderTitulo';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as PaginasActions} from '../../store/ducks/paginas';

class Regulamento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }

  async componentDidMount() {
    //let token = await AsyncStorage.getItem("UserData");
    let user = await AsyncStorage.getItem('UserData');
    let token = user.replace('"', '').replace('"', '');
    this.props.getPaginasRequest(token);
  }

  render() {
    const {navigation, paginas} = this.props;
    const Regulamento =
      '<regulamento>' + paginas.data.Regulamento + '</regulamento>';
    console.log(paginas, 'PAGINAS');
    console.log(Regulamento, 'REGULAMENTO');

    return Platform.OS == 'ios' ? (
      <SafeAreaView style={{backgroundColor: colors.black}}>
        <View style={{backgroundColor: colors.grayrow}}>
          <Loader loading={this.props.paginas.loading} />

          <HeaderTitulo
            titulo="REGULAMENTO"
            navigation={this.props.navigation}
          />

          <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <View style={styles.container}>
              <HTML
                tagsStyles={{
                  h1: {
                    color: colors.black,
                    fontSize: metrics.defaultFontSizeTitle,
                    marginBottom: 10,
                  },
                  h2: {
                    color: colors.corPrincipal1,
                    fontSize: metrics.defaultFontSizeTitle,
                  },
                  div: {textAlign: 'left', paddingBottom: 50, paddingTop: 15},
                }}
                html={Regulamento}
                imagesMaxWidth={Dimensions.get('window').width}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    ) : (
      <ScrollView>
        <View style={styles.header}>
          <Loader loading={this.props.paginas.loading} />
          <HeaderTitulo
            titulo="REGULAMENTO"
            navigation={this.props.navigation}
          />
        </View>

        <View style={styles.container}>
          <HTML
            tagsStyles={{
              h1: {
                color: colors.black,
                fontSize: metrics.defaultFontSizeTitle,
                marginBottom: 10,
              },
              h2: {
                color: colors.corPrincipal1,
                fontSize: metrics.defaultFontSizeTitle,
              },
              div: {textAlign: 'left', paddingBottom: 50, paddingTop: 15},
            }}
            html={Regulamento}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Regulamento);
