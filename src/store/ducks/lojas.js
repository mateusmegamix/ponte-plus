import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'lojas/GET_REQUEST',
  GET_SUCCESS: 'lojas/GET_SUCCESS',
  GET_FAILURE: 'lojas/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function lojas(state = initialState, action) {
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

  getLojasRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getLojasSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getLojasFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
    
  }),

};

markActionsOffline(Creators, ["getLojasRequest"]);
