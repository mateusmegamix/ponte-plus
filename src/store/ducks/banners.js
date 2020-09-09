import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'banners/GET_REQUEST',
  GET_SUCCESS: 'banners/GET_SUCCESS',
  GET_FAILURE: 'banners/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function banners(state = initialState, action) {
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

  getBannersRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getBannersSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getBannersFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
    
  }),

};

markActionsOffline(Creators, ["getBannersRequest"]);