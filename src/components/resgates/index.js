import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import stylesMeusResgates from '../../pages/recompensasDisponiveis/stylesMeusResgates'
import general from '../../config/general';
import moment from 'moment';

import EStyleSheet from 'react-native-extended-stylesheet';

class ListResgates extends Component {
  render() {
    const { data, navigation, homeContext } = this.props;
   
    const horarioResgate = data.DataResgate;
    const dataFormatadaResgate = moment(horarioResgate).format("DD/MM/YYYY hh:mm")
      
    const horarioValida = data.DataValidadeVoucher;
    const dataFormatadaValida = moment(horarioValida).format("DD/MM/YYYY hh:mm")
    return (
    <View>
        <View style={stylesMeusResgates.containerItens}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={stylesMeusResgates.item}
                onPress={() => {
                    homeContext.setModalVisibleInterna(data);
                }}>
                <Image
                    source={{uri: general.imagemBeneficio+data.Beneficio.Imagem}}
                    style={
                        stylesMeusResgates.imageItem
                    }
                />
                <View style={stylesMeusResgates.dados}>
                    <Text style={stylesMeusResgates.dataItem}>
                        {data.DataExtenso}
                    </Text>

                    <Text style={stylesMeusResgates.nomeItem}>
                    {data.Beneficio.Nome}
                    </Text>
                    
                    {
                        <Text style={stylesMeusResgates.validadeItem}>
                            {data.DescricaoValidadeResgate}
                        </Text>
                    }
                    {/* <Text style={stylesMeusResgates.validadeItem}>
                        {data.DescricaoValidadeResgate}
                    </Text> */}
                </View>

                <View style={stylesMeusResgates.ptsItem}>
                    <Text style={stylesMeusResgates.pts}>{data.Pontos} PTS</Text>
                    <Icon name="info-circle" size={17} style={stylesMeusResgates.iconItem} />
                </View>
            </TouchableOpacity>
        </View>
        <View style={stylesMeusResgates.row}></View>
    </View>

    )
  }
}

export default ListResgates