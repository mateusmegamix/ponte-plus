import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'associado/GET_REQUEST',
  GET_SUCCESS: 'associado/GET_SUCCESS',
  GET_FAILURE: 'associado/GET_FAILURE',
  REGISTRO_ACESSO_REQUEST: 'associado/REGISTRO_ACESSO_REQUEST',
  REGISTRO_ACESSO_SUCCESS: 'associado/REGISTRO_ACESSO_SUCCESS',
  CLOSE_MODAL: 'login/CLOSE_MODAL',
  CLOSE_MODAL_BONUS: 'login/CLOSE_MODAL_BONUS',
};

const initialState = Immutable({
  data: {Nome:'Carregando..',Categoria:''},
  loading: false,
  error: [],
  alert: false,
  alert_bonus: false,
  message_bonus: "",
  message: '',
});


export default function associado(state = initialState, action) {
  switch (action.type) {
    case Types.CLOSE_MODAL:
    return { ...state, alert: false,message:"" };
    case Types.CLOSE_MODAL_BONUS:
    return { ...state, alert_bonus: false, message_bonus: "" };
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.REGISTRO_ACESSO_SUCCESS:
    //console.log('Q Q VEM DO PAYLOAD!!!!')
    //console.log(action.payload);
      return { ...state, loading: false, alert_bonus: action.payload.data.alert, message_bonus: action.payload.data.message };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      }
    case Types.GET_FAILURE:
      return {
        ...state,
        error: action.payload.error.error,
        loading: false
      };
    default:
      return state;
  }
}


export const Creators = {

  registraAcessoRequest: Usuario => ({
    type: Types.REGISTRO_ACESSO_REQUEST,
    payload: {
      Usuario,
    },
  }),
  registraAcessoSuccess: data => ({
    type: Types.REGISTRO_ACESSO_SUCCESS,
    payload: {
      data,
    },
  }),
  closeModal: error => ({
    type: Types.CLOSE_MODAL
  }),
  closeModalBonus: error => ({
    type: Types.CLOSE_MODAL_BONUS
  }),
  getAssociadoRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getAssociadoSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getAssociadoFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },

  }),

};

