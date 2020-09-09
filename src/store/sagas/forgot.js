import {call, put} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {navigatorRef} from '../../App';
import general from '../../config/general';
import api from '../../services/api';
import {NavigationActions} from 'react-navigation';
import {Creators as ForgotActions} from '../ducks/forgot';
import queryString from 'query-string';

export function* getForgot(action) {
  const {Usuario} = action.payload;

  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appId: general.appId,
    },
  };

  let params = queryString.stringify({
    Email: Usuario.Email,
  });

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Associados/RecuperarSenha',
      params,
      headers,
    );
    yield put(ForgotActions.getForgotSuccess(response.data));
  } catch (err) {
    yield put(ForgotActions.getForgotFailure(err.response.data));
  }
}
