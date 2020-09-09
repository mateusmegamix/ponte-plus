import React, {Component} from 'react';
import {Linking, PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {Title} from 'native-base';
import {NavigationActions, StackActions} from 'react-navigation';
import {navigatorRef} from '../App';
import {Dropdown} from '../App';
import AsyncStorage from '@react-native-community/async-storage';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../store/ducks/associado';

class PushController extends Component {
  doRouteInterna = (notification) => {
    const {navigation, onStart} = this.props;
    const {userInteraction, data, foreground} = notification;
    const {notificacaoId} = data;

    AsyncStorage.getItem('UserData').then((token) => {
      if (token !== undefined) {
        const nav = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'MainRoute',
              params: {},
              action: NavigationActions.navigate({
                routeName: 'notificacaoInterna',
                params: {Id: notificacaoId},
              }),
            }),
          ],
          key: null,
        });
        navigation.dispatch(nav);
        return true;
      }
    });
  };

  doRoute = (notification) => {
    const {navigation, onStart} = this.props;
    const {userInteraction, data, foreground} = notification;
    const {notificacaoId} = data;

    if (notificacaoId == 0) {
      //console.log('abre só app')
      onStart();
    } else {
      this.doRouteInterna(notification);
    }
  };

  componentDidMount = () => {
    const doRoute = this.doRoute;

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister(token_push) {
        AsyncStorage.setItem('SistemaOp', JSON.stringify(token_push.os));
        AsyncStorage.setItem('HashToken', JSON.stringify(token_push.token));
        console.log('REGISTRANDO', token_push);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        const {foreground, message} = notification;

        if (foreground) {
          Dropdown.do('info', message.title, message.body, (d, v) => {
            doRoute(notification);
          });
        } else {
          doRoute(notification);
        }

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       */
      requestPermissions: true,
    });

    PushNotification.popInitialNotification((notification) => {
      if (!notification) this.props.onStart();
    });
  };

  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  associado: state.associado,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...AssociadosActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PushController);

//export default PushController
