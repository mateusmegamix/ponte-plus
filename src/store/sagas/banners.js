import {call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import general from '../../config/general';
import api from '../../services/api';
import {Creators as BannersActions} from '../ducks/banners';

export function* getBanners(action) {
  const {Usuario} = action.payload;
  const token = Usuario.replace('"', '').replace('"', '');
  console.log(token, 'token');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  try {
    const response = yield call(api.get, general.baseURL + '/Banners', headers);
    yield put(BannersActions.getBannersSuccess(response.data));
  } catch (err) {
    yield put(BannersActions.getBannersFailure(err));
    //console.log(err)
  }
}
