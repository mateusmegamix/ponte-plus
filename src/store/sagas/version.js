import {call, put} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as VersionActions} from '../ducks/version';
import {navigatorRef} from '../../App';

import {NavigationActions} from 'react-navigation';

export function* getVersion(action) {
  const nav = NavigationActions.navigate({
    routeName: 'verificaVersao',
  });
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
      general.baseURL + '/Associados/RetornaVersao',
      headers,
    );
    yield put(VersionActions.getVersionSuccess(response.data));

    if (
      response.data.Versao > general.Version_Android &&
      Platform.OS == 'android'
    ) {
      navigatorRef.dispatch(nav);
    } else if (
      response.data.VersaoiOs > general.Version_IOS &&
      Platform.OS == 'ios'
    ) {
      navigatorRef.dispatch(nav);
    }
  } catch (err) {
    yield put(VersionActions.getVersionFailure(err));
    //console.log(err)
  }
}
