import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'login/GET_REQUEST',
  GET_SUCCESS: 'login/GET_SUCCESS',
  GET_FAILURE: 'login/GET_FAILURE',
  GET_FACEBOOK_REQUEST: 'loginfb/GET_REQUEST',
  GET_FACEBOOK_SUCCESS: 'loginfb/GET_SUCCESS',
  GET_FACEBOOK_FAILURE: 'loginfb/GET_FAILURE',
  CLOSE_MODAL: 'login/CLOSE_MODAL',
};

const initialState = Immutable({
  data: [],
  loading: false,
  alert: false,
  message: '',
  icon: '',
  error:false,
  error_message:''
});


export default function login(state = initialState, action) {
  switch (action.type) {
    case Types.CLOSE_MODAL:
    return { ...state, error: false };

    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
        error: false,
      };
    case Types.GET_FAILURE:
      //console.log(action.payload)
      return { ...state, loading: false, alert: true, error:true, error_message: action.payload.error_message, icon: action.payload.icon };

    case Types.GET_FACEBOOK_REQUEST:
      return { ...state, loading: true };
    case Types.GET_FACEBOOK_SUCCESS:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case Types.GET_FACEBOOK_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}


export const Creators = {

  getLoginRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),


  getLoginSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getLoginFailure: error => ({

    type: Types.GET_FAILURE,
    payload: error,
  }),

  getLoginFBRequest: Usuario => ({
    type: Types.GET_FACEBOOK_REQUEST,
    payload: {
      Usuario,
    },
  }),
  closeModal: error => ({
    type: Types.CLOSE_MODAL
  }),

  getLoginFBSuccess: data => ({
    type: Types.GET_FACEBOOK_SUCCESS,
    payload: {
      data,
    },
  }),

  getLoginFBFailure: error => ({
    type: Types.GET_FACEBOOK_FAILURE,
    payload: {
      error,
    },
  }),



};