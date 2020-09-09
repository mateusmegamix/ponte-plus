import {call, put, all} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as LojasActions} from '../ducks/lojas';

export function* getLojas(action) {
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
    const {Lojas, Segmentos} = yield all({
      Lojas: call(api.get, general.baseURL + '/Lojas', headers),
      Segmentos: call(api.get, general.baseURL + '/Lojas/Segmentos/', headers),
    });

    var data = Lojas.data;
    data.segmentos = Segmentos.data;

    yield put(LojasActions.getLojasSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(LojasActions.getLojasFailure(err));
  }
}
