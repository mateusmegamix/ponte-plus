
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class headerPerfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    const { navigation, perfilContext } = this.props;
    return (
        <View style={styles.header}>
            <View style={styles.container}>       
                <TouchableOpacity >                    
                    <Icon name="chevron-left" size={20} style={styles.iconBack} 
                    onPress={() => navigation.navigate('meuPerfil', {
                        onNavigateBack: this.handleOnNavigateBack
                      })} />
                </TouchableOpacity>
                <Text style={styles.title}>MEU PERFIL</Text>                
            </View> 
        </View>  
    );
  }
}


export default headerPerfil;
