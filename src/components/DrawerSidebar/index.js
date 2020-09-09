import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {NavigationActions, StackActions} from 'react-navigation';
import {navigatorRef} from '../../App';
import styles from './styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import general from '../../config/general';
import ButtonDefault from '../ButtonDefault';
import images from '../../styles/images';

// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as RedesSociaisActions} from '../../store/ducks/redesSociais';

class DrawerSidebar extends Component {
  logout() {
    const {navigation} = this.props;

    AsyncStorage.removeItem('UserData', () => {
      const nav = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'LoginStack',
          }),
        ],
        key: null,
      });
      navigatorRef.dispatch(nav);
    });
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('UserData');
    this.props.getAssociadoRequest(token);
    this.props.getRedesSociaisRequest();
  };

  render() {
    const {navigation, redesSociais} = this.props;

    var notificacoes = this.props.notificacoes.data;
    var total_nao_lidas = notificacoes.filter((obj) => obj.Lido === false)
      .length;

    return (
      <View style={styles.bgFundo}>
        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => navigation.closeDrawer()}>
          <Text>
            <Icon name="times" color={colors.white} style={styles.iconClose} />
          </Text>
        </TouchableOpacity>

        <View style={styles.headerUsuario}>
          <ImageBackground
            style={{width: '100%', height: 110}}
            resizeMode="cover"
            source={images.menu.backgroundTopo}>
            <View style={styles.containerUsuario}>
              <View style={styles.imgBorda}>
                {this.props.associado.data.Foto === null &&
                this.props.associado.data.CaminhoFoto === '' ? (
                  <Image
                    source={images.avatarPadrao}
                    style={styles.imgUsuario}
                  />
                ) : this.props.associado.data.CaminhoFoto != '' ? (
                  <Image
                    source={{uri: this.props.associado.data.CaminhoFoto}}
                    style={styles.imgUsuario}
                  />
                ) : (
                  <Image
                    source={{
                      uri:
                        general.imagemPerfil + this.props.associado.data.Foto,
                    }}
                    style={styles.imgUsuario}
                  />
                )}
              </View>

              <Text style={styles.nomeUsuario}>
                {String(this.props.associado.data.Nome).toUpperCase()}
              </Text>
              <Text style={styles.txtPontos}>
                Você possui
                <Text style={styles.Pontos}>
                  {' '}
                  {this.props.associado.data.SaldoPontos} pts
                </Text>
              </Text>
              <Text style={styles.txtPontos}>
                {String(
                  this.props.associado.data.Categoria?.Nome,
                ).toUpperCase()}
              </Text>
              <View style={styles.containerBtns}>
                <ButtonDefault
                  label={`MEU PERFIL`}
                  style={[styles.btns, styles.corPerfil]}
                  txtStyle={styles.txtBtns}
                  onPress={() => {
                    navigation.navigate('meuPerfil');
                  }}
                />
                <ButtonDefault
                  label={`SAIR`}
                  style={[styles.btns, styles.corSair]}
                  txtStyle={styles.txtBtns}
                  onPress={() => {
                    this.logout();
                  }}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.listMenu}>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.menuBtns}
            onPress={() => {
              this.props.navigation.closeDrawer();
              navigation.navigate('NotificacaoStack');
            }}>
            <View style={[styles.menuTxtBtns, styles.menuBtnsNotificacoes]}>
              <Text style={styles.corNavegacao}>Notificações</Text>
              {total_nao_lidas > 0 ? (
                <View style={styles.alert}>
                  <Text style={styles.alertNumber}>{total_nao_lidas}</Text>
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.menuBtns}
            onPress={() => {
              this.props.navigation.closeDrawer();
              navigation.navigate('Lojas');
            }}>
            <Text style={[styles.menuTxtBtns, styles.corNavegacao]}>
              Lojas e Benefícios
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.menuBtns}
            onPress={() => {
              this.props.navigation.closeDrawer();
              navigation.navigate('Inicial');
            }}>
            <Text style={[styles.menuTxtBtns, styles.corNavegacao]}>
              O PontePlus
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.menuBtns}
            onPress={() => {
              this.props.navigation.closeDrawer();
              navigation.navigate('regulamento');
            }}>
            <Text style={[styles.menuTxtBtns, styles.corNavegacao]}>
              Regulamento
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.menuBtns}
            onPress={() => {
              this.props.navigation.closeDrawer();
              navigation.navigate('DuvidasFrequentesStack');
            }}>
            <Text style={[styles.menuTxtBtns, styles.corNavegacao]}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.menuBtns}
            onPress={() => {
              this.props.navigation.closeDrawer();
              navigation.navigate('HistoricoFaleconoscoStack');
            }}>
            <Text style={[styles.menuTxtBtns, styles.corNavegacao]}>
              Fale Conosco
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewSocial}>
          {redesSociais.data.URLTwitter ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnSocial}
              onPress={() => Linking.openURL(redesSociais.data.URLTwitter)}>
              <Icon name="twitter" size={20} style={{color: colors.black}} />
            </TouchableOpacity>
          ) : null}
          {redesSociais.data.URLFacebook ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnSocial}
              onPress={() => Linking.openURL(redesSociais.data.URLFacebook)}>
              <Icon name="facebook-f" size={20} style={{color: colors.black}} />
            </TouchableOpacity>
          ) : null}
          {redesSociais.data.URLInstagram ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnSocial}
              onPress={() => Linking.openURL(redesSociais.data.URLInstagram)}>
              <Icon name="instagram" size={22} style={{color: colors.black}} />
            </TouchableOpacity>
          ) : null}
          {redesSociais.data.URLYoutube ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnSocial}
              onPress={() => Linking.openURL(redesSociais.data.URLYoutube)}>
              <Icon name="youtube" size={20} style={{color: colors.black}} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  associado: state.associado,
  notificacoes: state.notificacoes,
  redesSociais: state.redesSociais,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...AssociadosActions,
      ...RedesSociaisActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSidebar);
