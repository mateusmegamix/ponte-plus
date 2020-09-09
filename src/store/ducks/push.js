import Immutable from 'seamless-immutable';
import { markActionsOffline } from "redux-offline-queue";

export const Types = {
  GET_REQUEST: 'push/GET_REQUEST',
  GET_SUCCESS: 'push/GET_SUCCESS',
  GET_FAILURE: 'push/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function push(state = initialState, action) {
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

    getPushRequest: Usuario => ({
        type: Types.GET_REQUEST,
        payload: {
        Usuario,
        },
    }),

    getPushSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: {
        data,
        },
    }),

    getPushFailure: error => ({
        type: Types.GET_FAILURE,
        payload: {
        error,
        },
    }),


};

markActionsOffline(Creators, ["getPushRequest"]);
