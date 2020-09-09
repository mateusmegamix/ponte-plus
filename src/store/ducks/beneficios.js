import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'beneficios/GET_REQUEST',
  GET_SUCCESS: 'beneficios/GET_SUCCESS',
  GET_FAILURE: 'beneficios/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function beneficios(state = initialState, action) {
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
        error: action.payload.error.response.data, 
        loading: false 
      };
   
    default:
      return state;
  }
}


export const Creators = {

  getBeneficiosRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getBeneficiosSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getBeneficiosFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
    
  }),


};

markActionsOffline(Creators, ["getBeneficiosRequest"]);
