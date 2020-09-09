import {call, put} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as AssociadosActions} from '../ducks/associado';

import queryString from 'query-string';
import DeviceInfo from 'react-native-device-info';

export function* getAssociado(action) {
  const {Usuario} = action.payload;
  const token = Usuario.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  //console.log(token,'token')

  try {
    const response = yield call(
      api.get,
      general.baseURL + '/Associados',
      headers,
    );
    yield put(AssociadosActions.getAssociadoSuccess(response.data));
    const storeAndNavigate = async () => {
      await AsyncStorage.setItem('IdUsuario', JSON.stringify(response.data.Id));
    };
    setTimeout(storeAndNavigate, 0);
  } catch (err) {
    console.log(err);
    yield put(AssociadosActions.getAssociadoFailure(err));
  }
}

export function* registroAcesso(action) {
  const {Usuario} = action.payload;
  const token = Usuario.token.replace('"', '').replace('"', '');
  const sistemOp = Usuario.sistemOp.replace('"', '').replace('"', '');
  const hashToken = Usuario.hashToken.replace('"', '').replace('"', '');

  var versao = '';

  if (Platform.OS === 'ios') {
    versao = general.Version_IOS;
  } else {
    versao = general.Version_Android;
  }

  deviceName = Platform.Version;

  try {
    if (Platform.OS === 'ios') {
      deviceName = Platform.Version;
    } else {
      deviceName += ' - ' + DeviceInfo.getBrand() + ' ' + DeviceInfo.getModel();
    }
  } catch {
    deviceName = '';
  }
  console.log('dispositivo: ' + deviceName);

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      appid: general.appId,
      token: hashToken,
      plataforma: sistemOp,
      versaoapp: versao,
      versaoso: deviceName,
      Authorization: 'bearer ' + token,
    },
  };

  let params = queryString.stringify({
    token: hashToken,
    plataforma: sistemOp,
    versaoapp: general.Version,
    versaoso: general.Version,
    Authorization: 'bearer ' + token,
  });

  try {
    const response = yield call(
      api.get,
      general.baseURL + '/Associados/RegistrarAcesso',
      headers,
    );
    if (response.data) {
      var message = '';
      if (response.data.pontos === 1) {
        message = 'PARABÉNS, VOCÊ GANHOU\n' + response.data.pontos + ' PONTO';
        //console.log(response.data.pontos);
      } else {
        message = 'PARABÉNS, VOCÊ GANHOU\n' + response.data.pontos + ' PONTOS';
        //console.log(response.data.pontos);
      }
      yield put(
        AssociadosActions.registraAcessoSuccess({alert: true, message}),
      );
    }
  } catch (err) {
    //console.log(err.response);
    // yield put(NotificacoesActions.getNotificacoesFailure(err));
    // //console.log(err)
  }
}
