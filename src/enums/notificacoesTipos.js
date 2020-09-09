import general from '../config/general';

var NotificacaoTipos = {
    0 : {route: undefined, name:'Nenhuma acão'},
    1 : {route: 'lojas',                btn_label:'Lista de Lojas'},
    2 : {route: 'lojasInterna',         btn_label:'Loja'},
    3 : {route: 'Recompensas',          btn_label:'Lista de Recompensas'},
    4 : {route: 'RecompensaInterna',    btn_label:'Recompensa'},
    5 : {route: 'Inicial',              btn_label:'Sobre'},
    6 : {route: 'Home',                 btn_label:'Home'},
    7 : {route: 'meuPerfil',            btn_label:'Meu Perfil'},
    8 : {route: 'Recompensas', params: {pageSelected: 'meus_resgates'},       btn_label:'Meus Resgates'},
    9 : {route: 'MeusPontos',params: {pageSelected:'meu_extrato'},           btn_label:'Extrato de Pontos'},
    10 :{route: 'historico',            btn_label:'Fale Conosco'},
}

export default NotificacaoTipos
