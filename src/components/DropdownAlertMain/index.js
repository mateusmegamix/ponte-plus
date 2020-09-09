import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';

import colors from '../../styles/colors';
import * as Animatable from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import Icon from 'react-native-vector-icons/FontAwesome';


const image = ()=>(
    <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', marginTop: 10 }}>
        <Icon name="exclamation" style={{fontSize: 35,color:colors.white}} />
    </Animatable.Text>)

class DropdownAlertMain extends React.Component {

  

  constructor(){
    super()
    this.callback;
  }

  do(type, title, message, callback = false ){
    this.callback = callback;
    this.dropdown.alertWithType("info", title, message);
  }

  btnClick(data){
    if (data.action == "tap" && typeof this.callback === "function")  // O usuario clicou pra abrir
      this.callback(data);
  }

  render() {

    return (
      <DropdownAlert showCancel={true} renderImage={image}  onClose={(data) => this.btnClick(data) } infoColor={colors.corPrincipal1}  ref={dropdown => { this.dropdown = dropdown; } }  />
    )
  }
}

export default DropdownAlertMain;