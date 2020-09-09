import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';

import Alert from '../../components/Alert';

const styles = {
  nome: {
    fontSize: 25,
  },
  tipo3Mensagem: {
    txtAlertCont: {
      fontWeight: 'bold',
      flexWrap: 'wrap',
      width: '85%',
      textAlign: 'center',
      paddingTop: 30,
      paddingBottom: 10,
      fontSize: metrics.defaultFontSizeTitle,
    },
  },
  tipo3txtEsqueciSenha: {
    // color: colors.greenmoss,
    fontSize: metrics.fontButton,
    marginTop: 15,
    fontWeight: 'bold',
  },
  tipo4btnNo: {
    backgroundColor: colors.corPrincipal1,
    height: metrics.btnHeightAndroid,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipo4btnYes: {
    backgroundColor: colors.btnYes,
    height: metrics.btnHeightAndroid,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class testesAlertas extends React.Component {
  state = {
    tipo: 0,
  };

  abrirModal(n) {
    this.setState({tipo: n});
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.abrirModal(1)}>
          <Text style={styles.nome}>Com titulo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.abrirModal(2)}>
          <Text style={styles.nome}>Sem titulo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.abrirModal(3)}>
          <Text style={styles.nome}>Duplo botao customizado</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.abrirModal(4)}>
          <Text style={styles.nome}>Duplo botao padrão (horizontal)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.abrirModal(5)}>
          <Text style={styles.nome}>Animado!</Text>
        </TouchableOpacity>

        <Alert
          mensagem="Titulo"
          descricao="Descrição Descrição?\nDescrição Descrição Descrição Descrição DescriçãoDescrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição"
          icon={'check'}
          btnLabel="OK, ENTENDI"
          visible={this.state.tipo == 1}
          closeAction={() => this.setState({tipo: 0})}
        />

        <Alert
          descricao="Descrição Descrição?\nDescrição Descrição Descrição Descrição DescriçãoDescrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição"
          icon={'check'}
          btnLabel="OK, ENTENDI"
          visible={this.state.tipo == 2}
          closeAction={() => this.setState({tipo: 0})}
        />

        <Alert
          icon="exclamation"
          visible={this.state.tipo == 3}
          mensagemStyle={styles.tipo3Mensagem}
          mensagem={`JÁ EXISTE UM CADASTRO COM\nESSE E-MAIL OU CPF.`}
          descricao={'Faça seu login ou resete sua senha.'}
          buttons={[
            {
              btnLabel: 'LOGIN',
              acao: () => {
                this.setState({
                  tipo: 0,
                });
              },
            },
            {
              btnLabel: 'ESQUECI A SENHA',
              disableButtonStyle: true,
              styleBtn: styles.tipo3txtEsqueciSenha,
              acao: () => {
                this.setState({
                  tipo: 0,
                });
              },
            },
          ]}
          closeAction={() => {
            this.setState({
              tipo: 0,
            });
          }}
        />

        <Alert
          icon="envelope"
          visible={this.state.tipo == 4}
          mensagem="AVISE-ME"
          descricao={
            <Text>
              Deseja ser alertado por{' '}
              <Text style={{fontWeight: 'bold'}}>e-mail</Text> e{' '}
              <Text style={{fontWeight: 'bold'}}>push</Text> quando essa
              recompensa estiver disponivel?
            </Text>
          }
          descricaoStyle={{marginBottom: 15}}
          buttonsDirections="row"
          buttons={[
            {
              btnLabel: 'NÃO',
              color: colors.graylight,
              acao: () => {
                this.setState({tipo: 0});
              },
            },
            {
              btnLabel: 'SIM',
              acao: () => {
                this.setState({tipo: 0});
              },
            },
          ]}
          closeAction={() => {
            this.setState({tipo: 0});
          }}
        />

        <Alert
          mensagem="Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo "
          littie={require('../../assets/parabens.json')}
          btnLabel="VOLTAR :)"
          visible={this.state.tipo == 5}
          closeAction={() => this.setState({tipo: 0})}
        />
      </View>
    );
  }
}

export default testesAlertas;
