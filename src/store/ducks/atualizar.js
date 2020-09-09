import Immutable from 'seamless-immutable';

export const Types = {
  RESET: 'atualizar/RESET',
  GET_REQUEST: 'atualizar/GET_REQUEST',
  GET_SUCCESS: 'atualizar/GET_SUCCESS',
  GET_FAILURE: 'atualizar/GET_FAILURE',
  GET_REQUEST_FOTO: 'foto/GET_REQUEST_FOTO',
  GET_SUCCESS_FOTO: 'foto/GET_SUCCESS_FOTO',
  GET_FAILURE_FOTO: 'foto/GET_FAILURE_FOTO',
  GET_REQUEST_SENHA: 'senha/GET_REQUEST_SENHA',
  GET_SUCCESS_SENHA: 'senha/GET_SUCCESS_SENHA',
  GET_FAILURE_SENHA: 'senha/GET_FAILURE_SENHA',
  GET_REQUEST_EXCLUIR: 'excluir/GET_REQUEST_EXCLUIR',
  GET_SUCCESS_EXCLUIR: 'excluir/GET_SUCCESS_EXCLUIR',
  GET_FAILURE_EXCLUIR: 'excluir/GET_FAILURE_EXCLUIR',
  GET_REQUEST_VINCULARFB: 'vincular/GET_REQUEST_VINCULARFB',
  GET_SUCCESS_VINCULARFB: 'vincular/GET_SUCCESS_VINCULARFB',
  GET_FAILURE_VINCULARFB: 'vincular/GET_FAILURE_VINCULARFB',
};

export const INITIAL_STATE = Immutable ({
  data: '',
  loading: false,
  alert: false,
  alert_error: false,
  alert_message: false,
  error: false,
  success: false,
  facebookAction:false
});


export default function atualizar(state = INITIAL_STATE, action) {
  switch (action.type) {

    case Types.RESET:
      return { ...state, alert: false,error:false,data: '',success: false,facebookAction: false  };


    case Types.GET_REQUEST:
      return { ...state, loading: true, error: '', data: '', alert:false };

    case Types.GET_SUCCESS:
    return {
        ...state,
        data: action.payload.data,
        loading: false,
        alert:true
    }
    case Types.GET_FAILURE:
      return {
        ...state,
        error: action.payload.error.response.data, 
        loading: false,
        alert: true,
      };
      case Types.GET_REQUEST_FOTO:
        return { ...state, loading: true, error: '' };
      case Types.GET_SUCCESS_FOTO:
      return {
          ...state,
          data: action.payload.data,
          loading: false,
      }
      case Types.GET_FAILURE_FOTO:
        return {
          ...state,
          error: action.payload.error.response.data, 
          loading: false,
          alert: true,
        };
        case Types.GET_REQUEST_SENHA:
          return { ...state, loading: true, error: '' };
        case Types.GET_SUCCESS_SENHA:
        return {
            ...state,
            data: action.payload.data,
            loading: false,
            alert: true
        }
        case Types.GET_FAILURE_SENHA:
          return {
            ...state,
            error: action.payload.error.response.data, 
            loading: false,
            alert: true
          };
          case Types.GET_REQUEST_EXCLUIR:
            return { ...state, loading: true, error: '' };
          case Types.GET_SUCCESS_EXCLUIR:
          return {
              ...state,
              data: action.payload.data,
              loading: false,
          }
          case Types.GET_FAILURE_EXCLUIR:
            return {
              ...state,
              error: action.payload.error.response.data, 
              loading: false,
            };
            case Types.GET_REQUEST_VINCULARFB:
              return { ...state, loading: true, error: '',facebookAction: true };
            case Types.GET_SUCCESS_VINCULARFB:
            return {
                ...state,
                data: action.payload.data,
                alert:true,
                loading: false,
                success: true,
                facebookAction: true
            }
            case Types.GET_FAILURE_VINCULARFB:
              return {
                ...state,
                error: action.payload.error.response.data, 
                loading: false,
                alert: true,
                success: false,
                facebookAction: true
              };
    default:
      return state;
  }
}


export const Creators = {
  doAtualizaCloseModal: action => ({
    type: Types.RESET
  }),

  getAtualizaRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getAtualizaSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getAtualizaFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  getAtualizaFotoRequest: Usuario => ({
    type: Types.GET_REQUEST_FOTO,
    payload: {
      Usuario,
    },
  }),

  getAtualizaFotoSuccess: data => ({
    type: Types.GET_SUCCESS_FOTO,
    payload: {
      data,
    },
  }),

  getAtualizaFotoFailure: error => ({
    type: Types.GET_FAILURE_FOTO,
    payload: { error }
  }),


  getAtualizaSenhaRequest: Usuario => ({
    type: Types.GET_REQUEST_SENHA,
    payload: {
      Usuario,
    },
  }),

  getAtualizaSenhaSuccess: data => ({
    type: Types.GET_SUCCESS_SENHA,
    payload: {
      data,
    },
  }),

  getAtualizaSenhaFailure: error => ({
    type: Types.GET_FAILURE_SENHA,
    payload: { error }
  }),

  getExcluirRequest: Usuario => ({
    type: Types.GET_REQUEST_EXCLUIR,
    payload: {
      Usuario,
    },
  }),

  getExcluirSuccess: data => ({
    type: Types.GET_SUCCESS_EXCLUIR,
    payload: {
      data,
    },
  }),

  getExcluirFailure: error => ({
    type: Types.GET_FAILURE_EXCLUIR,
    payload: { error }
  }),


  getVincularRequest: Usuario => ({
    type: Types.GET_REQUEST_VINCULARFB,
    payload: {
      Usuario,
    },
  }),

  getVincularSuccess: data => ({
    type: Types.GET_SUCCESS_VINCULARFB,
    payload: {
      data,
    },
  }),

  getVincularFailure: error => ({
    type: Types.GET_FAILURE_VINCULARFB,
    payload: { error }
  }),


};