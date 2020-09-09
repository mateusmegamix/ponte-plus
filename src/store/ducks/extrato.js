import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'extrato/GET_REQUEST',
  GET_SUCCESS: 'extrato/GET_SUCCESS',
  GET_FAILURE: 'extrato/GET_FAILURE',
  GET_CANCEL: 'extrato/GET_CANCEL',
};

const initialState = Immutable({
  data: [],
  loading: false,
  cancelado: false,
  error: false,
});

export default function extrato(state = initialState, action) {
  switch (action.type) {
    case Types.GET_CANCEL:
      return { ...state, loading: false, cancelado: true };
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        cancelado: false
      }
    case Types.GET_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        cancelado: false
      };
    default:
      return state;
  }
}


export const Creators = {
  cancelExtratoRequest: () => ({
    type: Types.GET_CANCEL,
    payload: {}
  }),

  getExtratoRequest: (Usuario, filtroID) => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
      filtroID
    },
  }),

  getExtratoSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getExtratoFailure: error => ({
    type: Types.GET_FAILURE,
    payload: error,
  }),

};

markActionsOffline(Creators, ["getExtratoRequest"]);