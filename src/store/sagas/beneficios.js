import {call, put, all} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import general from '../../config/general';
import queryString from 'query-string';
import api from '../../services/api';
import {Creators as BeneficiosActions} from '../ducks/beneficios';
import {Creators as actionsBeneficiosActions} from '../ducks/actionsBeneficios';
import {Creators as ResgatesActions} from '../ducks/resgates';

import {NavigationActions, StackActions} from 'react-navigation';

export function* getBeneficios(action) {
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
      general.baseURL + '/Beneficios3',
      headers,
    );
    yield put(BeneficiosActions.getBeneficiosSuccess(response.data));
  } catch (err) {
    yield put(BeneficiosActions.getBeneficiosFailure(err));
    //console.log(err)
  }
}

export function* getBeneficiosResgate(action) {
  const {Usuario} = action.payload;
  var qnt = {Quantidade: 1};
  const params = queryString.stringify({
    Quantidade: 1,
  });
  paramsnothing = {};
  const onSuccess = Usuario.onSuccess;
  const token = Usuario.token.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Beneficios/Resgatar3/' + Usuario.idrecompensa,
      params,
      headers,
    );
    if (typeof onSuccess === 'function') onSuccess(response);

    yield all([
      put(actionsBeneficiosActions.getBeneficiosResgateSuccess(response.data)),
      ,
      put(ResgatesActions.getResgatesRequest(token)),
      ,
      put(BeneficiosActions.getBeneficiosRequest(token)),
    ]); //
  } catch (err) {
    if (typeof onSuccess === 'function')
      onSuccess({
        data: {
          Titulo: 'Erro',
          Success: false,
          Mensagem:
            'Por favor, verifique a sua conexão com a internet e tente novamente.',
        },
      });
    yield put(actionsBeneficiosActions.getBeneficiosResgateFailure(err));
  }
}

export function* getBeneficiosAvisa(action) {
  const {Usuario} = action.payload;
  var qnt = {Quantidade: 1};
  const params = {
    data: qnt,
  };

  const token = Usuario.token.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Beneficios/Aviseme/' + Usuario.idrecompensa,
      params,
      headers,
    );
    console.log(response, 'response avisa');
    yield put(
      actionsBeneficiosActions.getBeneficiosAvisaSuccess(response.data),
    );
  } catch (err) {
    yield put(actionsBeneficiosActions.getBeneficiosAvisaFailure(err));
    //console.log(err)
  }
}
