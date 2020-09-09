import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'resgates/GET_REQUEST',
  GET_SUCCESS: 'resgates/GET_SUCCESS',
  GET_FAILURE: 'resgates/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function resgates(state = initialState, action) {
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

    getResgatesRequest: Usuario => ({
        type: Types.GET_REQUEST,
        payload: {
        Usuario,
        },
    }),

    getResgatesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: {
        data,
        },
    }),

    getResgatesFailure: error => ({
        type: Types.GET_FAILURE,
        payload: {
        error,
        },
    }),


};

markActionsOffline(Creators, ["getResgatesRequest"]);