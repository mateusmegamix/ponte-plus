import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'cadastro/GET_REQUEST',
  GET_SUCCESS: 'cadastro/GET_SUCCESS',
  GET_FAILURE: 'cadastro/GET_FAILURE',
  GET_REQUESTFB: 'cadastrofb/GET_REQUESTFB',
  GET_SUCCESSFB: 'cadastrofb/GET_SUCCESSFB',
  GET_FAILUREFB: 'cadastrofb/GET_FAILUREFB',
  CLOSE_MODAL: 'cadastro/CLOSE_MODAL',
};

export const INITIAL_STATE = Immutable ({
  data: '',
  loading: false,
  error: '',
  alert: false,
});


export default function cadastro(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, error: '' };
    case Types.GET_SUCCESS:
    return {
        ...state,
        data: action.payload.data.data,
        loading: false,
    }
    case Types.GET_FAILURE:
      return {
        ...state,
        error: action.payload.error.response.data, 
        loading: false,
        alert: true,
      };

      case Types.GET_REQUESTFB:
      return { ...state, loading: true, error: '' };
    case Types.GET_SUCCESSFB:
    return {
        ...state,
        data: action.payload.data.data,
        loading: false,
    }
    case Types.GET_FAILUREFB:
      return {
        ...state,
        error: action.payload.error.response.data, 
        loading: false,
      };
    default:
      return state;
  }
}


export const Creators = {

  getCadastroRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getCadastroSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getCadastroFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  getCadastroFBRequest: Usuario => ({
    type: Types.GET_REQUESTFB,
    payload: {
      Usuario,
    },
  }),

  getCadastroFBSuccess: data => ({
    type: Types.GET_SUCCESSFB,
    payload: {
      data,
    },
  }),

  getCadastroFBFailure: error => ({
    type: Types.GET_FAILUREFB,
    payload: { error }
  }),


  closeModal: action => ({
    type: Types.CLOSE_MODAL,
    payload: {
      action,
    },    
  }),

};