import {call, put} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as MedalhasActions} from '../ducks/medalhas';

export function* getMedalhas(action) {
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
      general.baseURL + '/CategoriasPontos',
      headers,
    );
    //console.log('CONSOLE DO RESPONSE DATA MEDALINHA')
    //console.log(response.data);
    yield put(MedalhasActions.getMedalhasSuccess(response.data));
  } catch (err) {
    yield put(MedalhasActions.getMedalhasFailure(err));
    //console.log(err)
  }
}
