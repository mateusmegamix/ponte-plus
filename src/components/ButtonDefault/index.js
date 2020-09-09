import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class ButtonDefault extends React.PureComponent {

  render() {
    
    const icon = this.props.icon
    
    return (

      icon == true ?
      <TouchableOpacity
        style={[styles.buttonEntrar, this.props.style]}
        activeOpacity={0.8}
        onPress={this.props.onPress}
      >
        <Icon style={[styles.icone, this.props.iconeStyle]} name={this.props.icone} size={20}/>
        <Text style={[styles.txtButton, this.props.txtStyle]}>{this.props.label}</Text>
      </TouchableOpacity>

      :

      <TouchableOpacity
        style={[styles.buttonEntrar, this.props.style]}
        activeOpacity={0.8}
        onPress={this.props.onPress}>
        <Text style={[styles.txtButton, this.props.txtStyle]}>{this.props.label}</Text>
      </TouchableOpacity>

    )
  }
}

export default ButtonDefault;
