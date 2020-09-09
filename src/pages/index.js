import React from 'react';
import {View, Alert, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import QRCode from 'react-native-qrcode';
import moment from 'moment';

class detalhesCupom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const horario = this.props.data.DataValidadeVoucher;
    const dataFormatada = moment(horario).format('DD/MM/YYYY hh:mm');

    const horarioResgate = this.props.data.DataResgate;
    const dataFormatadaResgate = moment(horarioResgate).format(
      'DD/MM/YYYY hh:mm',
    );
    //console.log(data, 'DETALHES VOUCHER!!!!!!')
    return (
      <ScrollView style={styles.detalheCupom}>
        <Text style={styles.title}>DETALHES DE UM CUPOM</Text>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.Expirado == true &&
          data.DescricaoValidadeResgate === 'Voucher expirado' ? (
            <Image
              source={require('../../assets/cupom-expirado.png')}
              style={styles.logo}
            />
          ) : null}
          {data.Expirado == false &&
          data.DescricaoValidadeResgate === 'Voucher usado' ? (
            <Image
              source={require('../../assets/cupom-resgatado.png')}
              style={styles.logo}
            />
          ) : null}
          {data.Expirado == false &&
          data.DescricaoValidadeResgate != 'Voucher usado' &&
          data.DescricaoValidadeResgate != 'Voucher expirado' ? (
            <View style={{zIndex: -1}}>
              <QRCode
                value={data.NumeroVoucher}
                size={200}
                bgColor="#000"
                fgColor="white"
              />
            </View>
          ) : null}
        </View>

        <View style={styles.info}>
          <Text style={styles.txtInfo}>Data do resgate</Text>
          <Text style={styles.txtDestaque}>{dataFormatadaResgate}</Text>
        </View>
        <View style={styles.info}>
          {data.DescricaoValidadeResgate == 'Voucher expirado' ? (
            <View>
              <Text style={styles.txtInfo}>Válido até</Text>
              <Text style={styles.txtDestaque}>Expirado</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.txtInfo}>Valido até</Text>
              <Text style={styles.txtDestaque}>{dataFormatada}</Text>
            </View>
          )}
        </View>
        <View style={styles.infoDesc}>
          <Text style={styles.txtInfoDesc}>{data.Beneficio.Nome}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <View style={styles.vIcone}>
              <Icon name="plus" style={styles.icon} />
            </View>

            <View style={styles.pontos}>
              <Text style={styles.pontosInfo}>PONTOS UTILIZADOS</Text>
              <Text style={styles.pontosDestaque}>{data.Pontos} PONTOS</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default detalhesCupom;
