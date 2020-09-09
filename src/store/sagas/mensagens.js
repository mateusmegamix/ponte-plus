import { call, put } from 'redux-saga/effects';
import general from '../../config/general';
import api from '../../services/api';
import { Creators as MensagensActions } from '../ducks/mensagens';

export function* getMensagens(action) {
  const { Usuario } = action.payload;
  const token = Usuario.replace('"', '').replace('"', '')
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'appid': general.appId,
      'Authorization': 'bearer '+token
    },
  };
  
    try {
      const response = yield call(api.get, general.baseURL+'/Faleconosco', headers);
        yield put(MensagensActions.getMensagensSuccess(response.data));
    } catch (err) {
      yield put(MensagensActions.getMensagensFailure(err));
      //console.log(err)
    }
  }
  