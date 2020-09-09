import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'paginas/GET_REQUEST',
  GET_SUCCESS: 'paginas/GET_SUCCESS',
  GET_FAILURE: 'paginas/GET_FAILURE',
};

const initialState = Immutable({
  data: {TermosUso:{Texto:''},Regulamento:'', SobreOPrograma: '', Recompensa: {Titulo:'',Texto: ''}, Beneficio: {Titulo:'',Texto: ''}},
  loading: false,
  error: [],
});

export default function paginas(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
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

  getPaginasRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getPaginasSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getPaginasFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),

};

markActionsOffline(Creators, ["getPaginasRequest"]);
