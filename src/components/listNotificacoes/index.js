import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, } from 'react-native'

import styles from './styles';
//import general from '../../config/general';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListNotificacoes extends Component {

  gotoDetail(notificacao)
  {

      this.props.navigation.navigate('notificacaoInterna', {
        notificacao: notificacao,
      });
  }

  render() {
    const { data, navigation } = this.props;

    return (
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.gotoDetail(data)}>
          <View style={styles.item}>
            <View style={styles.content}>
              <Text style={styles.itemTitle}>{data.Titulo}</Text>
              <Text style={styles.itemDescription}>{data.Data}</Text>
            </View>
            <Icon name="check" size={25} style={ data.Lido ? styles.iconCheck : styles.iconBan  } />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


export default ListNotificacoes;