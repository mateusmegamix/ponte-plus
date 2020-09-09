import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import STATUS_RESGATE from '../../enums/StatusResgate';

import QRCode from 'react-native-qrcode';
import {ifIphoneX} from 'react-native-iphone-x-helper';

class detalhesCupom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const horarioResgate = this.props.data.DataHoraResgate;
    const horarioValidade = this.props.data.DataHora;

    return (
      <View style={styles.viewcupom}>
        <ScrollView style={styles.detalheCupom} bounces={ifIphoneX(false)}>
          <Text style={styles.title}>DETALHES DA OPERAÇÃO</Text>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {data.Expirado ? (
              <Image
                source={require('../../assets/cupom-expirado.png')}
                style={styles.logo}
              />
            ) : null}
            {data.Status === STATUS_RESGATE.Estornado ? (
              <Image
                source={require('../../assets/cupom-estornado.png')}
                resizeMode="contain"
                style={styles.logo}
              />
            ) : null}
            {data.Expirado == false && data.Status == STATUS_RESGATE.Trocado ? (
              <Image
                source={require('../../assets/cupom-resgatado.png')}
                resizeMode="contain"
                style={styles.logo}
              />
            ) : null}
            {data.Expirado == false &&
            data.Status !== STATUS_RESGATE.Estornado &&
            data.Status != STATUS_RESGATE.Trocado ? (
              <View style={{zIndex: -1}}>
                <QRCode
                  value={data.NumeroVoucher}
                  size={100}
                  bgColor="#000"
                  fgColor="white"
                />
              </View>
            ) : null}
          </View>

          <View style={styles.info}>
            <Text style={styles.txtInfo}>Data do resgate</Text>
            <Text style={styles.txtDestaque}>{horarioResgate}</Text>
          </View>
          <View style={styles.info}>
            {data.Status === STATUS_RESGATE.Trocado ? (
              <View>
                <Text style={styles.txtInfo}>Troca do voucher efetuada em</Text>
                <Text style={styles.txtDestaque}>{horarioValidade}</Text>
              </View>
            ) : data.Expirado == true ? (
              <View>
                <Text style={styles.txtInfo}>Válido até</Text>
                <Text style={styles.txtDestaque}>{horarioValidade}</Text>
              </View>
            ) : data.Status == STATUS_RESGATE.Estornado ? (
              <View>
                <Text style={styles.txtInfo}>Válido até</Text>
                <Text style={styles.txtDestaque}>Estornado</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.txtInfo}>Valido até</Text>
                <Text style={styles.txtDestaque}>{horarioValidade}</Text>
              </View>
            )}
          </View>
          {this.props.data.Orientacao ? (
            <View style={styles.infoDesc}>
              <Text style={styles.txtInfoDesc}>
                {this.props.data.Orientacao}
              </Text>
            </View>
          ) : null}
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
      </View>
    );
  }
}

export default detalhesCupom;
