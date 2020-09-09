import {call, put, all} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import general from '../../config/general';
import api from '../../services/api';
import {Creators as PaginasActions} from '../ducks/paginas';

export function* getPaginas(action) {
  const {Usuario} = action.payload;
  const headers_anonymous = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
    },
  };
  if (Usuario) {
    const token = Usuario.replace('"', '').replace('"', '');
    const headers = {
      validateStatus: function (status) {
        return true; // default
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        appid: general.appId,
        Authorization: 'bearer ' + token,
      },
    };
    try {
      const {
        Regulamento,
        SobreOPrograma,
        SobreOPrograma_topo,
        TermosUso,
        Recompensa,
        Beneficios,
      } = yield all({
        Regulamento: call(
          api.get,
          general.baseURL + '/Paginas/' + general.IDPagina_Regulamento,
          headers,
        ),
        SobreOPrograma: call(
          api.get,
          general.baseURL + '/Paginas/' + general.IDPagina_SobreOPrograma,
          headers,
        ),
        SobreOPrograma_topo: call(
          api.get,
          general.baseURL + '/Paginas/' + general.IDPagina_SobreOPrograma_topo,
          headers,
        ),
        Recompensa: call(
          api.get,
          general.baseURL +
            '/Paginas/' +
            general.IDPagina_SobreOPrograma_recompensas,
          headers,
        ),
        Beneficios: call(
          api.get,
          general.baseURL +
            '/Paginas/' +
            general.IDPagina_SobreOPrograma_beneficios,
          headers,
        ),
        TermosUso: call(
          api.get,
          general.baseURL + '/termo/mobile',
          headers_anonymous,
        ),
      });
      let data = {
        TermosUso: TermosUso.data,
        SobreOPrograma_topo: SobreOPrograma_topo.data.Texto,
        SobreOPrograma: SobreOPrograma.data.Texto,
        Regulamento: Regulamento.data.Texto,
        Recompensa: Recompensa.data,
        Beneficios: Beneficios.data,
      };
      yield put(PaginasActions.getPaginasSuccess(data));
    } catch (err) {
      console.log(err.response, 'ERRO EM PAGINAS');
      yield put(PaginasActions.getPaginasFailure(err));
    }
  } else {
    try {
      const {
        Regulamento,
        SobreOPrograma,
        SobreOPrograma_topo,
        TermosUso,
      } = yield all({
        TermosUso: call(
          api.get,
          general.baseURL + '/termo/mobile',
          headers_anonymous,
        ),
      });
      let data = {TermosUso: TermosUso.data};
      yield put(PaginasActions.getPaginasSuccess(data));
    } catch (err) {
      yield put(PaginasActions.getPaginasFailure(err));
      //console.log(err)
    }
  }
}
