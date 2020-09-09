import { call, put, all, race, take } from 'redux-saga/effects';
import general from '../../config/general';
import api from '../../services/api';
import { Creators as ExtratoActions, Types as ExtratoTypes } from '../ducks/extrato';


export function* getExtrato(action) {

  const { Usuario, filtroID } = action.payload;
  const token = Usuario.replace('"', '').replace('"', '')
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'appid': general.appId,
      'Authorization': 'bearer ' + token
    },
  };
  var url_ext = ""
  if (filtroID)
    url_ext = '?filtro=' + filtroID

  try {
    console.log(general.baseURL + '/Extrato2' + url_ext, "Link extrato")

    const { response, cancel } = yield race({
      response: all({
        extratos: call(api.get, general.baseURL + '/Extrato2' + url_ext, headers),
        filtros: call(api.get, general.baseURL + '/Extrato/ListaFiltro', headers),
      }),
      cancel: take(ExtratoTypes.GET_CANCEL)
    })

    if (response) {
      var { extratos, filtros } = response;
      extratos.data.filtros = filtros.data;
      yield put(ExtratoActions.getExtratoSuccess(extratos.data));
    }

  } catch (err) {
    try {
      yield put(ExtratoActions.getExtratoFailure(err.response.data.Message));
    } catch (err) {
      yield put(ExtratoActions.getExtratoFailure("O extrato não pôde ser atualizado."));
    }
    console.log(err)
  }
}
