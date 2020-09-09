import React from 'react';
import './config/ReactotronConfig';
import {Provider} from 'react-redux';
import store from './store';
import AppContainer from './routes';
import {StatusBar, Platform, View, StyleSheet} from 'react-native';
import colors from './styles/colors';
import DropdownAlertMain from './components/DropdownAlertMain';

// import PushNotification from 'react-native-push-notification';
import {ifIphoneX} from 'react-native-iphone-x-helper';

// NetInfo.isConnected.addEventListener('connectionChange', console.log);

export let navigatorRef;
export let Dropdown;

if (Platform.OS === 'ios') {
  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(colors.black, true);
}
if (Platform.OS === 'android') {
  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(colors.black, true);
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    navigatorRef = this.navigatorRef;
    Dropdown = this.DropdownAlertMain;
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <AppContainer
            ref={(nav) => {
              this.navigatorRef = nav;
            }}
          />
          <DropdownAlertMain
            ref={(dropdown) => {
              this.DropdownAlertMain = dropdown;
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  statusBarIphone: {
    height: 20,
    marginBottom: -20,
    zIndex: 9999,
    backgroundColor: colors.corPrincipal1,
  },
});

export default App;
