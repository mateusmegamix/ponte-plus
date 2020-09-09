import React from 'react';
import {Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';
import {View} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {SafeAreaView} from 'react-navigation';

import HeaderTitulo from '../../components/HeaderTitulo';
import colors from '../../styles/colors';
class DuvidasFrequentesInterna extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }

  retirandoHtml(_params) {
    let regex = /(<([^>]+)>)/;
    let body = _params;

    return body.replace(regex, '');
  }

  render() {
    const {navigation} = this.props;
    const {goBack} = navigation;
    const {duvidafrequente} = navigation.state.params;

    return (
      <SafeAreaView
        style={{backgroundColor: colors.black}}
        forceInset={{bottom: 'never'}}>
        <View style={styles.containerFull}>
          <HeaderTitulo
            titulo="DÚVIDAS FREQUENTES"
            navigation={this.props.navigation}
          />

          <ScrollView style={{height: '100%'}}>
            <View style={styles.container}>
              <Text style={styles.txtTitle}>{duvidafrequente.Pergunta}</Text>

              <Text style={styles.txtDescripion}>
                {this.retirandoHtml(duvidafrequente.Resposta)}
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default DuvidasFrequentesInterna;
