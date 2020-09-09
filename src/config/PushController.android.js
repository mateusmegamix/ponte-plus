import React, {Component} from 'react';
import {Linking} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {Title} from 'native-base';
import {NavigationActions, StackActions} from 'react-navigation';
import {navigatorRef} from '../App';
import AsyncStorage from '@react-native-community/async-storage';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../store/ducks/associado';

class PushController extends Component {
  componentDidMount = () => {
    const {registraAcessoRequest, navigation, onStart} = this.props;

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister(token_push) {
        AsyncStorage.setItem('SistemaOp', JSON.stringify(token_push.os));
        AsyncStorage.setItem('HashToken', JSON.stringify(token_push.token));

        let token = AsyncStorage.getItem('UserData').then((token) => {
          let params = {
            token: token,
            sistemOp: JSON.stringify(token_push.os),
            hashToken: JSON.stringify(token_push.token),
          };
          console.log(params, 'Registrou');

          //registraAcessoRequest(params)
        });
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        const {userInteraction, notificacaoId} = notification;
        if (notificacaoId == 0) {
          //console.log('abre só app')
          onStart();
        } else {
          if (userInteraction) {
            //console.log('Abrindo push com notificacao')
            let token_check = AsyncStorage.getItem('UserData').then((token) => {
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
          }
        }

        //just ios
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: '791758445360',

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
