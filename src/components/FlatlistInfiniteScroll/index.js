import React, { Component } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';

import {OptimizedFlatList} from 'react-native-optimized-flatlist'


import styles from './styles';

class FlatlistInfiniteScroll extends React.Component {


  render() {
    const {data, itensPorPagina,page = 1, colorLoading='#FFF'} = this.props;
    let limit = page * itensPorPagina
    var items = data.slice(0,limit)
    let total_pages = Math.ceil(data.length / itensPorPagina );
    let props = {...this.props};
    props.data = items;
    
    return (
      <View>
      <OptimizedFlatList {...props} />
      <ActivityIndicator
            style={{marginTop: 22}}
            size="large"
            color={colorLoading}
            animating={total_pages > page} />
      </View>
    )


  }
}

export default FlatlistInfiniteScroll;