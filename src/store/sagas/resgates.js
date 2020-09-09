import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import general from '../../config/general';
import queryString from 'query-string';
import api from '../../services/api';
import {Creators as ResgatesActions} from '../ducks/resgates';
import {NavigationActions, StackActions} from 'react-navigation';

export function* getResgates(action) {
  const {Usuario} = action.payload;
  const token = Usuario.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  try {
    const response = yield call(
      api.get,
      general.baseURL + '/Resgates2',
      headers,
    );
    yield put(ResgatesActions.getResgatesSuccess(response.data));
  } catch (err) {
    yield put(ResgatesActions.getResgatesFailure(err));
    //console.log(err)
  }
}
