import {call, put} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import queryString from 'query-string';
import {navigatorRef} from '../../App';
import general from '../../config/general';
import {UrlLogin} from '../../config/general';
import api from '../../services/api';
import {NavigationActions, StackActions} from 'react-navigation';
import {Creators as LoginActions} from '../ducks/login';

export function* getLoginFacebookRequest(action) {
  const {Usuario} = action.payload;
  const nav = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'MainRoute',
      }),
    ],
    key: null,
  });

  const cadastronav = NavigationActions.navigate({
    routeName: 'cadastro',
    params: {fbdata: Usuario},
  });

  const params = queryString.stringify({
    username: 'facebook:' + Usuario.user.id,
    password: Usuario.accessToken,
    appid: general.appId,
    grant_type: 'password',
  });

  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
    },
  };

  try {
    const response = yield call(api.post, UrlLogin, params, headers);
    yield put(LoginActions.getLoginFBSuccess(response.data));

    const storeAndNavigate = async () => {
      await AsyncStorage.setItem(
        'UserData',
        JSON.stringify(response.data.access_token),
      );
      navigatorRef.dispatch(nav);
    };
    setTimeout(storeAndNavigate, 0);
  } catch (err) {
    yield put(LoginActions.getLoginFBFailure(err));

    navigatorRef.dispatch(cadastronav);
  }
}

//

export function* getLogin(action) {
  const {Usuario} = action.payload;
  const nav = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'MainRoute',
      }),
    ],
    key: null,
  });

  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  let params = queryString.stringify({
    appid: general.appId,
    grant_type: 'password',
    username: Usuario.email,
    password: Usuario.password,
  });

  const response = yield call(fetchLogin, UrlLogin, params, headers);
  //console.log(response)
  if (response.data.error)
    return yield put(
      LoginActions.getLoginFailure({
        error_message: response.data.error_description,
        icon: 'ALERT',
      }),
    );

  yield put(LoginActions.getLoginSuccess(response.data));
  const storeAndNavigate = async () => {
    await AsyncStorage.setItem(
      'UserData',
      JSON.stringify(response.data.access_token),
    );
    navigatorRef.dispatch(nav);
  };
  setTimeout(storeAndNavigate, 0);
}

function fetchLogin(UrlLogin, params, headers) {
  return new Promise(function (resolve, reject) {
    api
      .post(UrlLogin, params, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        if (!error.response.data.error) {
          return resolve({
            data: {
              error: 'desconhecido',
              error_description: 'Serviço temporariamente indisponível.',
            },
          });
        }
        resolve(error.response);
      });
  });
}
