import Immutable from 'seamless-immutable';

export const Types = {
  CLOSE_MODAL: 'cadastrarFoto/CLOSE_MODAL',
  GET_REQUEST: 'cadastrarQrCode/GET_REQUEST',
  GET_SUCCESS: 'cadastrarQrCode/GET_SUCCESS',
  GET_FAILURE: 'cadastrarQrCode/GET_FAILURE',
  GET_REQUESTFOTO: 'cadastrarFoto/GET_REQUEST',
  GET_SUCCESSFOTO: 'cadastrarFoto/GET_SUCCESS',
  GET_FAILUREFOTO: 'cadastrarFoto/GET_FAILURE',
};

const initialState = Immutable({
  data: '',
  alert: false,
  loading: false,
  error: false,
  message: '',
});


export default function cadastrarNota(state = initialState, action) {
  switch (action.type) {

    case Types.CLOSE_MODAL:
      return { ...state, alert: false };

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
        error: action.payload.error.response.data.Message,
        loading: false
      };
    case Types.GET_REQUESTFOTO:
      return { ...state, loading: true };
    case Types.GET_SUCCESSFOTO:
      return {
        ...state,
        alert: true,
        error: false,
        message: action.payload.data,
        loading: false,
      }
    case Types.GET_FAILUREFOTO:
      return {
        ...state,
        alert: true,
        error: true,
        message: action.payload,
        loading: false
      };
    default:
      return state;
  }
}


export const Creators = {
  doCadastrarNotaCloseModal: action => ({
    type: Types.CLOSE_MODAL,
    payload: {
      action,
    },
  }),

  getQrCodeRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getQrCodeSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getQrCodeFailure: error => ({
    type: Types.GET_FAILURE,

    payload: { error }

  }),

  getFotoRequest: Usuario => ({
    type: Types.GET_REQUESTFOTO,
    payload: {
      Usuario,
    },
  }),

  getFotoSuccess: data => ({
    type: Types.GET_SUCCESSFOTO,
    payload: {
      data,
    },
  }),

  getFotoFailure: error => ({
    type: Types.GET_FAILUREFOTO,
    payload: error,

  }),

};