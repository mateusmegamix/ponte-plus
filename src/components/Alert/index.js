import React from 'react';
import {
  View,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import ButtonDefault from '../ButtonDefault';
import images from '../../styles/images';


class Alert extends React.Component {

  constructor() {
    super()
  }

  fecharModal() {
    this.props.closeAction();
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.visible != this.props.visible) {
      if (this.props.visible) {
        // await StatusBar.setHidden(true);
        console.log("Escondeu header")
      }
      else {
        // await StatusBar.setHidden(false);   
        console.log("Apareceu header")
      }
    }
  }

  render() {

    var icon = this.props.icon;
    if (!icon)
      icon = "exclamation";

    var btnLabel = this.props.btnLabel;
    if (!btnLabel)
      btnLabel = "VOLTAR";

    var imgLogo = this.props.imgLogo;
    if (!imgLogo)
      imgLogo = images.logo2;

    var buttonsDirections = this.props.buttonsDirections;
    if (!buttonsDirections)
      buttonsDirections = 'column';

    var buttons = this.props.buttons

    return (
      <Modal
        
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {
          this.fecharModal();
        }}>
        <ImageBackground
          style={styles.imgBackground}
          resizeMode='cover'
          source={images.bgComponentAlert}
        >

          <View>
            <View style={styles.modalContent}>
              <TouchableOpacity activeOpacity={0.8} style={styles.buttonVoltar}
                onPress={() => {
                  this.fecharModal();
                }}>
                <Icon name="times" style={styles.txtButtonVoltar} />
              </TouchableOpacity>

              <View style={styles.modalContainer}>
                <View style={styles.alertCont}>
                  <Image
                    source={imgLogo}
                    style={styles.logo}
                  />

                  {
                    this.props.littie ?

                      <LottieView
                        source={this.props.littie}
                        autoPlay={true}
                        ref={animation => {
                          this.animation = animation;
                        }}
                        loop={false}
                        //autoSize={true}
                        style={{ width: 200, height: 200 }}
                      />

                      :
                        <View style={styles.iconContainer}>
                          <Icon name={icon} style={styles.iconAlert} />
                        </View>
                  }
                  {
                    this.props.littie ?
                      <View></View>
                      : null
                  }
                  {
                    this.props.mensagem ?
                      <Text style={[styles.txtAlertCont, this.props.mensagemStyle]}>{this.props.mensagem}</Text>
                      : null
                  }
                  {
                    this.props.descricao ?
                      <Text style={[styles.txtDescricao, this.props.descricaoStyle]}>{this.props.descricao}</Text>
                      : null
                  }

                  <View style={[styles.buttonContainer2, { flexDirection: buttonsDirections }]}>
                    {
                      buttons ?
                        buttons.map((v) => (
                            
                              v.disableButtonStyle ?
                                <TouchableOpacity
                                  activeOpacity={0.8}
                                  style={ v.style}
                                  onPress={v.acao}>

                                  <Text style={ !v.styleBtn ? styles.txtButton :  v.styleBtn}> {v.btnLabel} </Text>
                                </TouchableOpacity>

                              :   <ButtonDefault 
                                    label={v.btnLabel}
                                    style={!v.style ? styles.buttonEntrar2 : v.style}
                                    txtStyle={!v.styleBtn ? styles.txtButton : v.styleBtn}
                                    onPress={v.acao}
                                  />
                          )) 
                        :
                          <ButtonDefault
                            label={btnLabel}
                            style={styles.buttonEntrar2}
                            onPress={() => {
                              this.fecharModal();
                            }}                        
                          />
                    }


                  </View>
                </View>
              </View>

            </View>
          </View>
        </ImageBackground>
      </Modal>
    )
  }
}

export default Alert;