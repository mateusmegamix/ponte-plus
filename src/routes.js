import React from 'react';
import {Image} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  DrawerNavigator,
} from 'react-navigation';
import {fromTop, fromLeft} from 'react-navigation-transitions';
import {FluidNavigator} from 'react-navigation-fluid-transitions';

import colors from './styles/colors';
import images from './styles/images';
import metrics from './styles/metrics';

import DrawerSidebar from './components/DrawerSidebar';
import TabBottomBar from './components/TabBottomBar';

import Tutorial from './pages/tutorial';
import Splash from './pages/splash';
import Login from './pages/login';
import esqueciSenha from './pages/esqueciSenha';
import EsqueciSenhaConfirmacao from './pages/esqueciSenhaConfirmacao';
import termosUso from './pages/termosUso';
import cadastro from './pages/cadastro';
import cadastroConfirmacao from './pages/cadastroConfirmacao';
import duvidasFrequentes from './pages/duvidasFrequentes';
import duvidasFrequentesInterna from './pages/duvidasFrequentesInterna';
import verificaVersao from './pages/verificaVersao';
import semInternet from './pages/semInternet';
import Home from './pages/home';
import Regulamento from './pages/Regulamento';
import notificacao from './pages/notificacao';
import notificacaoInterna from './pages/notificacaoInterna';
import meusPontos from './pages/meusPontos';
import recompensasDisponiveis from './pages/recompensasDisponiveis';
import meuPerfilDadosPessoais from './pages/meuPerfilDadosPessoais';
import meuPerfilSenha from './pages/meuPerfilSenha';
import historico from './pages/historico';
import mensagens from './pages/mensagens';
import meuPerfil from './pages/meuPerfil';
import cadastrarNota from './pages/cadastrarNota';
import recompensaInterna from './pages/recompensaInterna';
import lojasInterna from './pages/lojasInterna';
import lojas from './pages/lojas';
import enviarMensagem from './pages/enviarMensagem';
import FotoNota from './pages/cadastrarNota/foto';
import QRCode from './pages/cadastrarNota/qrcode';
import Inicial from './pages/inicial';
import AddCod from './pages/AddCodBarra';

const defaultTransaction = fromTop;

const RecompensaStackNavigator = FluidNavigator(
  {
    Recompensa: {screen: recompensasDisponiveis},
    RecompensaInterna: {screen: recompensaInterna},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

const HomePStackNavigator = FluidNavigator(
  {
    Home: {screen: Home},
    RecompensaInterna: {screen: recompensaInterna},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

const CadastrarNotaStack = createStackNavigator(
  {
    cadastrarNota: {
      screen: cadastrarNota,
    },
    QRCode: {
      screen: QRCode,
    },
    FotoNota: {
      screen: FotoNota,
    },
    AddCod: {
      screen: AddCod,
    },
  },
  {
    transitionConfig: () => defaultTransaction(),
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

LojasStack = createStackNavigator(
  {
    lojas: {screen: lojas},
    lojasInterna: {screen: lojasInterna},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

LojasStack.navigationOptions = {
  transitionConfig: () => defaultTransaction(),
  tabBarLabel: metrics.tabBottom.labelLoja,
  tabBarIcon: ({focused, tintColor}) =>
    focused ? (
      <Image
        source={images.tabBottomBar.lojas.ativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ) : (
      <Image
        source={images.tabBottomBar.lojas.desativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ),
};
// Configurações da TabBar

const TabBarMain = createBottomTabNavigator(
  {
    Home: {
      screen: HomePStackNavigator,
    },
    MeusPontos: {
      screen: meusPontos,
    },
    cadastrarNota: {
      screen: CadastrarNotaStack,
      navigationOptions: {
        transitionConfig: () => defaultTransaction(),
        tabBarLabel: 'NOTAS',
        tabBarIcon: ({focused, tintColor}) =>
          focused ? (
            <Image
              source={images.tabBottomBar.notas.ativado}
              style={{
                width: metrics.tabBottom.iconWidth,
                height: metrics.tabBottom.iconHeight,
              }}
            />
          ) : (
            <Image
              source={images.tabBottomBar.notas.desativado}
              style={{
                width: metrics.tabBottom.iconWidth,
                height: metrics.tabBottom.iconHeight,
              }}
            />
          ),
      },
    },
    Recompensas: {
      screen: RecompensaStackNavigator,
      navigationOptions: {
        transitionConfig: () => fromLeft(),
      },
    },
    Lojas: {
      screen: LojasStack,
      navigationOptions: {
        transitionConfig: () => fromLeft(),
      },
    },
  },
  {
    transitionConfig: () => defaultTransaction(),
    animationEnabled: false,
    tabBarComponent: TabBottomBar,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: colors.tabbar.activeText,
      inactiveTintColor: colors.tabbar.deactiveText,
      labelStyle: {
        fontSize: 8,
      },
      style: {
        backgroundColor: colors.white,
        borderTopColor: '#000',
        fontSize: 13,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: {height: 0, width: 0},
      },
    },
  },
);

RecompensaStackNavigator.navigationOptions = {
  transitionConfig: () => defaultTransaction(),
  tabBarLabel: 'RECOMPENSAS',
  tabBarIcon: ({focused, tintColor}) =>
    focused ? (
      <Image
        source={images.tabBottomBar.recompensas.ativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ) : (
      <Image
        source={images.tabBottomBar.recompensas.desativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ),
};
HomePStackNavigator.navigationOptions = {
  tabBarLabel: 'INÍCIO',
  tabBarIcon: ({focused, tintColor}) =>
    focused ? (
      <Image
        source={images.tabBottomBar.inicio.ativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ) : (
      <Image
        source={images.tabBottomBar.inicio.desativado}
        style={{
          width: metrics.tabBottom.iconWidth,
          height: metrics.tabBottom.iconHeight,
        }}
      />
    ),
};

const HomeStackNavigator = createStackNavigator(
  {
    TabBarMain: {screen: TabBarMain},
    // BeneficioInterna: { screen: recompensasDisponiveis },
    recompensaInterna: {screen: recompensaInterna},
    verificaVersao: {screen: verificaVersao},
  },
  {
    headerMode: 'none',
    transitionConfig: () => defaultTransaction(),
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

LoginStack = createStackNavigator(
  {
    // teste: { screen: Tutorial },
    Login,
    cadastro,
    cadastroConfirmacao,
    esqueciSenha,
    EsqueciSenhaConfirmacao,
  },
  {
    transitionConfig: () => defaultTransaction(),
    headerMode: 'none',
  },
);

HistoricoFaleconoscoStack = createStackNavigator(
  {
    historico: {screen: historico},
    mensagens: {screen: mensagens},
    novoFaleConosco: {screen: enviarMensagem},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

DuvidasFrequentesStack = createStackNavigator(
  {
    duvidasFrequentes: {screen: duvidasFrequentes},
    duvidasFrequentesInterna: {screen: duvidasFrequentesInterna},
  },
  {
    headerMode: 'none',
  },
);

NotificacaoStack = createStackNavigator(
  {
    notificacao: {screen: notificacao},
    notificacaoInterna: {screen: notificacaoInterna},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

const MainRoute = DrawerNavigator(
  {
    // teste: { screen: meuPerfil },
    HomeStackNavigator: {screen: HomeStackNavigator},
    DuvidasFrequentesStack: {screen: DuvidasFrequentesStack},
    meuPerfil: {screen: meuPerfil},
    NotificacaoStack: {screen: NotificacaoStack},
    regulamento: {screen: Regulamento},
    Inicial: {screen: Inicial},
    meuPerfilDadosPessoais: {screen: meuPerfilDadosPessoais},
    meuPerfilSenha: {screen: meuPerfilSenha},
    LojasStack: {screen: LojasStack},
    HistoricoFaleconoscoStack: {screen: HistoricoFaleconoscoStack},
  },
  {
    transitionConfig: () => defaultTransaction(),

    drawerPosition: 'right',
    contentComponent: (props) => <DrawerSidebar {...props} />,
  },
);

const Routes = createStackNavigator(
  {
    //testeAlertas: {screen: testeAlertas},
    tutorial: {screen: Tutorial},
    Splash,
    LoginStack,
    semInternet: {screen: semInternet},
    esqueciSenha: {screen: esqueciSenha},
    termosUso: {screen: termosUso},
    MainRoute: {screen: MainRoute},
    meuPerfil: {screen: meuPerfil},
    meuPerfilDadosPessoais: {screen: meuPerfilDadosPessoais},
    meuPerfilSenha: {screen: meuPerfilSenha},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      transitionConfig: () => defaultTransaction(),
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomColor: 'transparent',
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
    headerTintColor: colors.black,
    headerBackTitle: null,
  },
);

const AppContainer = Routes;

export default AppContainer;
