import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import Alert from '../../components/Alert';
import images from '../../styles/images';

class cadastroConfirmacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }

  componentDidMount() {}

  render() {
    const {navigation} = this.props;
    const {data} = this.props.navigation.state.params;

    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={images.bgComponentAlert}>
        <View>
          <Alert
            descricaoStyle={{marginTop: 15}}
            descricao={data}
            icon={'check'}
            btnLabel="OK, ENTENDI"
            visible={this.props.modalVisible}
            closeAction={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default cadastroConfirmacao;
