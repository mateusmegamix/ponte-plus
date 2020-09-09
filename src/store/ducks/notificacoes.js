import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'notificacoes/GET_REQUEST',
  GET_SUCCESS: 'notificacoes/GET_SUCCESS',
  GET_FAILURE: 'notificacoes/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function notificacoes(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      //console.log(state);
      return { ...state, loading: true };
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

  getNotificacoesRequest: (Usuario, Id) => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
      Id
    },
  }),

  getNotificacoesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getNotificacoesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
    
  }),

};

markActionsOffline(Creators, ["getNotificacoesRequest"]);