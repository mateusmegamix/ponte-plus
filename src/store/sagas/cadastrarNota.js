import {call, put, all} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as CadastrarNotaActions} from '../ducks/cadastrarNota';
import {Creators as ExtratoActions} from '../ducks/extrato';

export function* getQrCode(action) {
  const {Usuario} = action.payload;
  const token = Usuario.token.replace('"', '').replace('"', '');
  const onSuccess = Usuario.onSuccess;
  const onFailed = Usuario.onFailed;

  //console.log(Usuario, 'SAGA USUARIO')
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + token,
    },
  };

  let params = {
    QRCode: Usuario.resultQrcode,
  };
  //console.log(params)

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Notas/CadastrarQRCode',
      params,
      headers,
    );
    if (typeof onSuccess === 'function') {
      onSuccess(response);
    }
    yield all([
      put(CadastrarNotaActions.getQrCodeSuccess(response)),
      put(ExtratoActions.getExtratoRequest(token)),
    ]);
  } catch (err) {
    if (typeof onSuccess === 'function') {
      onFailed(err.response);
    }
    yield put(CadastrarNotaActions.getQrCodeFailure(err));
  }
}

export function* getFotoNota(action) {
  const {Usuario} = action.payload;
  const token = Usuario.token.replace('"', '').replace('"', '');
  //console.log(Usuario)
  const headers = {
    headers: {
      headerParam: 'headerValue',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };
  // const foto = ;
  // //console.log(foto)
  const data = new FormData();
  data.append('name', 'testName'); // you can append anyone.
  data.append('FOTO', {
    uri: Usuario.data,
    type: 'image/jpeg', // or photo.type
    name: Usuario.data.substr(Usuario.data.lastIndexOf('/') + 1),
  });

  let params = {
    body: data,
  };

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Notas/CadastrarImagem',
      params.body,
      headers,
    );

    yield all([
      put(CadastrarNotaActions.getFotoSuccess(response.data)),
      put(ExtratoActions.getExtratoRequest(token)),
    ]);
  } catch (err) {
    var error =
      'Houve um erro e não conseguimos processar a sua foto. Tente novamente mais tarde.';
    if (err.response) {
      if (err.response.data) {
        if (err.response.data.Message) error = err.response.data.Message;
      }
    }
    yield put(CadastrarNotaActions.getFotoFailure(error));
  }
}
