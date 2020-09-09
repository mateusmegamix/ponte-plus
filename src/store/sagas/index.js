import { all, takeLatest, spawn, takeEvery  } from 'redux-saga/effects';

import { Types as NotificacoesTypes } from '../ducks/notificacoes';
import { Types as LoginTypes } from '../ducks/login';
import { Types as CadastroTypes } from '../ducks/cadastro';
import { Types as ForgotTypes } from '../ducks/forgot';
import { Types as BannersTypes } from '../ducks/banners';
import { Types as BeneficiosTypes } from '../ducks/beneficios';
import { Types as actionsBeneficiosTypes } from '../ducks/actionsBeneficios';
import { Types as AssociadoTypes } from '../ducks/associado';
import { Types as CadastrarNotaTypes } from '../ducks/cadastrarNota';
import { Types as VersionTypes } from '../ducks/version';
import { Types as ExtratoTypes } from '../ducks/extrato';
import { Types as MedalhasTypes } from '../ducks/medalhas';
import { Types as DuvidasFrequentesTypes } from '../ducks/duvidasfrequentes';
import { Types as LojasTypes } from '../ducks/lojas';
import { Types as PaginasTypes } from '../ducks/paginas';
import { Types as MensagensTypes } from '../ducks/mensagens';
import { Types as ResgatesTypes } from '../ducks/resgates';
import { Types as PushTypes } from '../ducks/push';
import { Types as AtualizarTypes } from '../ducks/atualizar';
import { Types as RedesSociaisTypes } from '../ducks/redesSociais'

import { startWatchingNetworkConnectivity } from "./offline";
import { getNotificacoes } from './notificacoes';
import { getLoginFacebookRequest, getLogin } from './login';
import { getCadastroSenha } from './cadastro';
import { getForgot } from './forgot';
import { getBanners } from './banners';
import { getBeneficios, getBeneficiosResgate, getBeneficiosAvisa } from './beneficios';
import { getAssociado, registroAcesso } from './associado';
import { getQrCode, getFotoNota } from './cadastrarNota';
import { getVersion } from './version'
import { getExtrato} from './extrato'
import { getMedalhas } from './medalhas'
import { getDuvidasFrequentes} from './duvidasfrequentes'
import { getLojas} from './lojas'
import { getPaginas} from './paginas'
import { getMensagens} from './mensagens'
import { getResgates } from './resgates'
import { getRegisterPush } from './push'
import { getAtualizaCadastro, getFotoAssociado, getAtualizaSenha, getExcluir, getVincularFB } from './atualizar'
import { getRedesSociais } from './redesSociais'

export default function* rootSaga() {
  return yield all([
    spawn(startWatchingNetworkConnectivity),
    takeLatest(MensagensTypes.GET_REQUEST, getMensagens),
    takeLatest(PaginasTypes.GET_REQUEST, getPaginas),
    takeLatest(LojasTypes.GET_REQUEST, getLojas),
    takeLatest(DuvidasFrequentesTypes.GET_REQUEST, getDuvidasFrequentes),
    takeLatest(NotificacoesTypes.GET_REQUEST, getNotificacoes),
    takeLatest(VersionTypes.GET_REQUEST, getVersion),
    takeLatest(LoginTypes.GET_FACEBOOK_REQUEST, getLoginFacebookRequest),
    takeLatest(LoginTypes.GET_REQUEST, getLogin),
    takeLatest(CadastroTypes.GET_REQUEST, getCadastroSenha),
    takeLatest(ForgotTypes.GET_REQUEST, getForgot),
    takeLatest(BannersTypes.GET_REQUEST, getBanners),
    takeLatest(BeneficiosTypes.GET_REQUEST, getBeneficios),
    takeLatest(actionsBeneficiosTypes.GET_REQUEST_RESGATE, getBeneficiosResgate),
    takeLatest(actionsBeneficiosTypes.GET_REQUEST_AVISA, getBeneficiosAvisa),
    takeLatest(AssociadoTypes.GET_REQUEST, getAssociado),
    takeLatest(CadastrarNotaTypes.GET_REQUEST, getQrCode),
    takeLatest(CadastrarNotaTypes.GET_REQUESTFOTO, getFotoNota),
    takeLatest(ExtratoTypes.GET_REQUEST, getExtrato),
    takeLatest(MedalhasTypes.GET_REQUEST, getMedalhas),
    takeLatest(AssociadoTypes.REGISTRO_ACESSO_REQUEST, registroAcesso),
    takeLatest(ResgatesTypes.GET_REQUEST, getResgates),
    takeLatest(AtualizarTypes.GET_REQUEST, getAtualizaCadastro),
    takeLatest(AtualizarTypes.GET_REQUEST_FOTO, getFotoAssociado),
    takeLatest(AtualizarTypes.GET_REQUEST_SENHA, getAtualizaSenha),
    takeLatest(AtualizarTypes.GET_REQUEST_EXCLUIR, getExcluir),
    takeLatest(AtualizarTypes.GET_REQUEST_VINCULARFB, getVincularFB),
    takeLatest(PushTypes.GET_REQUEST, getRegisterPush),
    takeLatest(RedesSociaisTypes.GET_REQUEST, getRedesSociais),
  ]);
}