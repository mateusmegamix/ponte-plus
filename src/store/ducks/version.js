import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'version/GET_REQUEST',
  GET_SUCCESS: 'version/GET_SUCCESS',
  GET_FAILURE: 'version/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: [],
});


export default function version(state = initialState, action) {
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

    getVersionRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getVersionSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getVersionFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
    
  }),

};