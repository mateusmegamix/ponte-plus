import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'forgot/GET_REQUEST',
  GET_SUCCESS: 'forgot/GET_SUCCESS',
  GET_FAILURE: 'forgot/GET_FAILURE',
  CLOSE_MODAL: 'forgot/CLOSE_MODAL',
};

const initialState = Immutable({
  data: "",
  loading: false,
  error: "",
  success:false,
  alert: false,
});


export default function forgot(state = initialState, action) {
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
        alert:true,
        error:"",
        success:true
    }
    case Types.GET_FAILURE:
      return { 
        ...state,
        data:"",
        error: action.payload.error, 
        loading: false,
        alert: true,
        success:false
      };
    default:
      return state;
  }
}


export const Creators = {

  getForgotRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getForgotSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getForgotFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
    
  }),

  closeModal: action => ({
    type: Types.CLOSE_MODAL,
  }),

};