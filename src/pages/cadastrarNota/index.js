import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderUser from '../../components/headerUser';

import Permissions from 'react-native-permissions';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CadastrarNotaActions} from '../../store/ducks/cadastrarNota';
import images from '../../styles/images';

class cadastrarNota extends React.Component {
  constructor(props) {
    super(props);
  }

  requestGaleriaPermission = async () => {
    await Permissions.request('photo');
    await Permissions.request('camera');
    await Permissions.request('storage');
  };

  componentDidMount() {
    this.requestGaleriaPermission();
  }

  openBarCode = () => {
    this.props.navigation.navigate('QRCode');
  };

  openCameraFunct = () => {
    this.props.navigation.navigate('FotoNota');
  };

  openAddCod = () => {
    this.props.navigation.navigate('AddCod');
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1}}>
        <HeaderUser navigation={navigation} />
        <ScrollView
          bounces={false}
          contentContainerStyle={{flex: 1, paddingBottom: 10, paddingTop: 10}}>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Image source={images.notas.bgCupom} style={styles.imgCupom} />
            <Text style={styles.title}>
              FAÇA A LEITURA DO QR CODE DA NOTA CLICANDO NO BOTÃO ABAIXO
            </Text>
            <View style={{flexGrow: 0.6, justifyContent: 'space-around'}}>
              <Text style={styles.subTitle}>A nota precisa ter o seu CPF.</Text>

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.btn}
                onPress={this.openBarCode}>
                <Text style={styles.txtBtn}>LER QR CODE</Text>
              </TouchableOpacity>

              <Text
                style={[
                  styles.subTitle,
                  Platform.OS == 'ios' ? styles.subTitleEnvieFoto : null,
                ]}>
                Ou, caso a nota não tenha QR CODE, envie uma foto
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.fotografar}
                onPress={this.openCameraFunct}>
                <Icon name="camera" style={styles.icoCamera} />
                <Text style={styles.txtFotografar}>FOTOGRAFAR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.barras}
                onPress={this.openAddCod}>
                <Icon name="barcode" style={styles.icoBarra} />
                <Text style={styles.txtBarra}>Digitar número da nota</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

cadastrarNota.navigationOptions = {
  tabBarLabel: 'NOTAS',
  tabBarIcon: ({focused, tintColor}) =>
    focused ? (
      <Image
        source={require('../../assets/notas-active.png')}
        style={{width: 21, height: 24}}
      />
    ) : (
      <Image
        source={require('../../assets/notas.png')}
        style={{width: 21, height: 24}}
      />
    ),
};

function mapStateToProps(state) {
  return {
    cadastroNota: state.cadastroNota,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CadastrarNotaActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cadastrarNota);
