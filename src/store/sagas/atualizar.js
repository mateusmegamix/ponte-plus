import {call, put, all} from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {navigatorRef} from '../../App';
import general from '../../config/general';
import api from '../../services/api';
import {NavigationActions} from 'react-navigation';
import {Creators as AtualizarActions} from '../ducks/atualizar';
import {Creators as AssociadosActions} from '../ducks/associado';

import queryString from 'query-string';

export function* getAtualizaCadastro(action) {
  const {Usuario} = action.payload;
  const nav = NavigationActions.navigate({
    routeName: 'cadastroConfirmacao',
  });

  const token = Usuario.token.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };
  try {
    var cpfconvert = Usuario.CPF.replace(/[^\d]+/g, '');
  } catch (error) {
    var cpfconvert = '';
  }
  try {
    let data = Usuario.DataNascimento;
    var arr = data.split('/');
    var dataFormata = arr[1] + '/' + arr[0] + '/' + arr[2];
  } catch (error) {
    var dataFormata = null;
  }

  let params = queryString.stringify({
    appId: general.appId,
    Nome: Usuario.Nome,
    Sobrenome: Usuario.Sobrenome,
    DataNascimento: dataFormata,
    RG: Usuario.DataNascimen,
    Sexo: Usuario.Sexo,
    CPF: cpfconvert,
    Email: Usuario.Email,
    Telefone: Usuario.Telefone,
    Celular: Usuario.Celular,
    TelefoneComercial: Usuario.TelefoneComercial,
    EmailAdicional: Usuario.EmailAdicional,
    EnderecoLogradouro: Usuario.EnderecoLogradouro,
    EnderecoNumero: Usuario.EnderecoNumero,
    EnderecoComplemento: Usuario.EnderecoComplemento,
    EnderecoBairro: Usuario.EnderecoBairro,
    EnderecoCidade: Usuario.EnderecoCidade,
    EnderecoEstado: Usuario.EnderecoEstado,
    EnderecoCEP: Usuario.EnderecoCEP,
  });

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Associados/AtualizarCadastro',
      params,
      headers,
    );
    yield all([
      put(AtualizarActions.getAtualizaSuccess(response.data)),
      ,
      put(AssociadosActions.getAssociadoRequest(token)),
    ]);
  } catch (err) {
    console.log(err, 'Erro ao atualizar');
    yield put(AtualizarActions.getAtualizaFailure(err));
  }
}

export function* getFotoAssociado(action) {
  const {Usuario} = action.payload;
  const token = Usuario.token.replace('"', '').replace('"', '');
  //console.log(Usuario)
  const headers = {
    headers: {
      // 'headerParam': 'headerValue',
      // 'appid': general.appId,
      'Content-Type': undefined,
      Authorization: 'bearer ' + token,
    },
  };
  const data2 = new FormData();
  data2.append('name', 'testName'); // you can append anyone.
  // data2.append('photo', {
  //   uri: Usuario.photo,
  //   type: 'image/jpeg', // or photo.type
  //   name: Usuario.namephoto
  // });

  data2.append('photo', {
    uri: 'file://' + Usuario.photo,
    type: 'image/jpeg', // or photo.type
    name: Usuario.namephoto,
  });

  //console.log(data2, 'DATAAA')

  let params = {
    body: data2,
  };
  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Associados/UploadFoto',
      params.body,
      headers,
    );
    yield put(AtualizarActions.getAtualizaFotoSuccess(response.data));
    const storeAndNavigate = async () => {
      await AsyncStorage.setItem('IsDadosUpdate', 'true');
    };
    setTimeout(storeAndNavigate, 0);
    console.log(response.data, 'OK RESPONSE');
  } catch (err) {
    yield put(AtualizarActions.getAtualizaFotoFailure(err));
    console.log(err.response, 'ERRO PHOTO');
  }
}

export function* getAtualizaSenha(action) {
  const {Usuario} = action.payload;

  const token = Usuario.token.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  let params = queryString.stringify({
    grant_type: 'password',
    appId: general.appId,
    SenhaAtual: Usuario.SenhaAtual,
    NovaSenha: Usuario.NovaSenha,
  });

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Associados/AlterarSenha',
      params,
      headers,
    );
    yield put(AtualizarActions.getAtualizaSenhaSuccess(response.data));
  } catch (err) {
    yield put(AtualizarActions.getAtualizaSenhaFailure(err));
  }
}

export function* getExcluir(action) {
  const {Usuario} = action.payload;
  const nav = NavigationActions.navigate({
    routeName: 'LoginStack',
  });

  const token = Usuario.token.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  let params = queryString.stringify({
    CPF: Usuario.CPF,
  });

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Associados/Descadastrar',
      params,
      headers,
    );
    yield put(AtualizarActions.getExcluirSuccess(response.data));

    const storeAndNavigate = async () => {
      navigatorRef.dispatch(nav);
    };
    setTimeout(storeAndNavigate, 0);
  } catch (err) {
    yield put(AtualizarActions.getExcluirFailure(err));
  }
}

export function* getVincularFB(action) {
  const {Usuario} = action.payload;

  const token = Usuario.token.replace('"', '').replace('"', '');
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      appid: general.appId,
      Authorization: 'bearer ' + token,
    },
  };

  let params = queryString.stringify({
    IdFacebook: Usuario.IdFacebook,
  });

  try {
    const response = yield call(
      api.post,
      general.baseURL + '/Associados/AssociarFacebook',
      params,
      headers,
    );
    console.log(response.data, 'DATA VINCULO FACEBOOK');
    yield put(AtualizarActions.getVincularSuccess(response.data));
  } catch (err) {
    yield put(AtualizarActions.getVincularFailure(err));
  }
}
