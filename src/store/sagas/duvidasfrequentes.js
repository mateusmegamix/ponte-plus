import {call, put} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as DuvidasFrequentesActions} from '../ducks/duvidasfrequentes';

export function* getDuvidasFrequentes(action) {
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
    const response = yield call(api.get, general.baseURL + '/Faq', headers);
    yield put(
      DuvidasFrequentesActions.getDuvidasFrequentesSuccess(response.data),
    );
  } catch (err) {
    yield put(DuvidasFrequentesActions.getDuvidasFrequentesFailure(err));
    //console.log(err)
  }
}
