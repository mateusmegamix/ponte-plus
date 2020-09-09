import { call, put } from 'redux-saga/effects';
import general from '../../config/general';
import api from '../../services/api';
import { Creators as PushActions } from '../ducks/push';

export function* getRegisterPush(action) {
  const { Usuario } = action.payload;
  try {
    const sistemOp = Usuario.SistemOp.replace('"', '').replace('"', '')
    const hashToken = Usuario.tokenHash.replace('"', '').replace('"', '')
    
    const response = yield call(api.get, 'http://www.pontueme.com.br/Admin/PushRegister/Index/' + general.codCliente + '?usuarioid=' + Usuario.idUsuario + '&token=' + hashToken + '&plataforma=' + sistemOp);
      yield put(PushActions.getPushSuccess(response.data));
      //console.log('FOI')
  } catch (err) {
    yield put(PushActions.getPushFailure(err));
    //console.log(err)
  }
}
  