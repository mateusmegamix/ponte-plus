import {call, put, all} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as NotificacoesActions} from '../ducks/notificacoes';

export function* getNotificacoes(action) {
  const {Usuario, Id = ''} = action.payload;

  //console.log(Id)

  const token = Usuario.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };
  //console.log("Iniciando requisicao de notificacoes..")
  try {
    if (Id) {
      const {notificacoes} = yield all({
        notificacao_single: call(
          api.get,
          general.baseURL + '/Notificacoes/' + Id,
          headers,
        ),
        notificacoes: call(
          api.get,
          general.baseURL + '/Notificacoes/',
          headers,
        ),
      });
      yield put(NotificacoesActions.getNotificacoesSuccess(notificacoes.data));
    } else {
      const response = yield call(
        api.get,
        general.baseURL + '/Notificacoes/',
        headers,
      );
      yield put(NotificacoesActions.getNotificacoesSuccess(response.data));
    }
  } catch (err) {
    yield put(NotificacoesActions.getNotificacoesFailure(err));
    //console.log(err)
  }
}
