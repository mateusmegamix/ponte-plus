import { call, put } from 'redux-saga/effects';
import general from '../../config/general';
import api from '../../services/api';
import { Creators as RedesSociaisActions } from '../ducks/redesSociais';

export function* getRedesSociais(action) {
    
    const headers = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'appid': general.appId
        },
    };

    try {
        const response = yield call(api.get, general.baseURL + '/InformacoesGerais', headers);
        yield put(RedesSociaisActions.getRedesSociaisSuccess(response.data));
    } catch (err) {
        yield put(RedesSociaisActions.getRedesSociaisFailure(err));
    }
}
