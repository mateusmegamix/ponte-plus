import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'medalhas/GET_REQUEST',
  GET_SUCCESS: 'medalhas/GET_SUCCESS',
  GET_FAILURE: 'medalhas/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function medalhas(state = initialState, action) {
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

getMedalhasRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
}),

getMedalhasSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
}),

getMedalhasFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
}),

};

markActionsOffline(Creators, ["getMedalhasRequest"]);
