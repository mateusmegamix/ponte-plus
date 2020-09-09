import { combineReducers } from "redux";

import { reducer as offline } from "redux-offline-queue";
import login from './login'
import cadastro from './cadastro'
import cadastrarNota from './cadastrarNota'
import forgot from './forgot'
import banners from './banners'
import beneficios from './beneficios'
import associado from './associado'
import version from './version'
import extrato from './extrato'
import medalhas from './medalhas'
import notificacoes from './notificacoes'
import duvidasfrequentes from './duvidasfrequentes'
import lojas from './lojas'
import paginas from './paginas'
import actionsBeneficios from './actionsBeneficios'
import mensagens from './mensagens'
import resgates from './resgates'
import push from './push'
import atualizar from './atualizar'
import redesSociais from './redesSociais'

export default combineReducers({
    offline,
    login,
    cadastro,
    forgot,
    banners,
    beneficios,
    actionsBeneficios,
    associado,
    version,
    extrato,
    notificacoes,
    duvidasfrequentes,
    lojas,
    paginas,
    medalhas,
    mensagens,
    resgates,
    push,
    atualizar,
    cadastrarNota,
    redesSociais
});