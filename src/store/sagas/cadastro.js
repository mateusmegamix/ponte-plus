import {call, put} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {navigatorRef} from '../../App';
import general from '../../config/general';
import api from '../../services/api';
import {NavigationActions} from 'react-navigation';
import {Creators as CadastroActions} from '../ducks/cadastro';
import queryString from 'query-string';

export function* getCadastroSenha(action) {
  const {Usuario} = action.payload;

  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appId: general.appId,
    },
  };

  let cpfconvert = Usuario.CPF.replace(/[^\d]+/g, '');

  let params = queryString.stringify({
    appId: general.appId,
    Nome: Usuario.Nome,
    Sobrenome: Usuario.Sobrenome,
    Email: Usuario.Email,
    CPF: cpfconvert,
    IdFacebook: Usuario.IdFacebook,
    DataNascimento: Usuario.DataNascimento,
    Celular: Usuario.Celular,
    Senha: Usuario.Senha,
    ConfirmarSenha: Usuario.ConfirmarSenha,
  });

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Associados/CadastroComSenha2',
      params,
      headers,
    );
    yield put(CadastroActions.getCadastroSuccess(response.data));

    const nav = NavigationActions.navigate({
      routeName: 'cadastroConfirmacao',
      params: {data: response.data},
    });
    const storeAndNavigate = async () => {
      navigatorRef.dispatch(nav);
    };
    setTimeout(storeAndNavigate, 0);
  } catch (err) {
    yield put(CadastroActions.getCadastroFailure(err));
  }
}
