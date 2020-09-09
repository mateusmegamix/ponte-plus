import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST_AVISA: 'beneficios/GET_REQUEST_AVISA',
  GET_SUCCESS_AVISA: 'beneficios/GET_SUCCESS_AVISA',
  GET_FAILURE_AVISA: 'beneficios/GET_FAILURE_AVISA',
  GET_REQUEST_RESGATE: 'beneficios/GET_REQUEST_RESGATE',
  GET_SUCCESS_RESGATE: 'beneficios/GET_SUCCESS_RESGATE',
  GET_FAILURE_RESGATE: 'beneficios/GET_FAILURE_RESGATE',
};

const initialState = Immutable({
  data: '',
  data2: '',
  loading: false,
  resgatado:false,
  error: [],
});


export default function actionsBeneficios(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST_AVISA:
    return { ...state, loading: true };
  case Types.GET_SUCCESS_AVISA:
  return {
      ...state,
      data: action.payload.data,
      loading: false,
  }
  case Types.GET_FAILURE_AVISA:
    return { 
      ...state,
      error: action.payload.error.error, 
      loading: false 
    };
    case Types.GET_REQUEST_RESGATE:
      return { ...state, loading: true,error:false };
    case Types.GET_SUCCESS_RESGATE:
    return {
        ...state,
        data2: action.payload.data,
        resgatado: action.payload.data.IdResgate,
        loading: false,
        error:false,
    }
    case Types.GET_FAILURE_RESGATE:
      return { 
        ...state,
        error: action.payload.error.error, 
        loading: false,
      };
    default:
      return state;
  }
}


export const Creators = {
  getBeneficiosResgateRequest: Usuario => ({
    type: Types.GET_REQUEST_RESGATE,
    payload: {
      Usuario,
    },
  }),

  getBeneficiosResgateSuccess: data => ({
    type: Types.GET_SUCCESS_RESGATE,
    payload: {
      data,
    },
  }),

  getBeneficiosResgateFailure: error => ({
    type: Types.GET_FAILURE_RESGATE,
    payload: {
      error,
    },
  }),

  getBeneficiosAvisaRequest: Usuario => ({
    type: Types.GET_REQUEST_AVISA,
    payload: {
      Usuario,
    },
  }),

  getBeneficiosAvisaSuccess: data => ({
    type: Types.GET_SUCCESS_AVISA,
    payload: {
      data,
    },
  }),

  getBeneficiosAvisaFailure: error => ({
    type: Types.GET_FAILURE_AVISA,
    payload: {
      error,
    },
  }),

};

markActionsOffline(Creators, ["getBannersRequest"]);