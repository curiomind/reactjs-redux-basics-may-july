import { RESET, SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_PHONE, SET_PASSWORD, SET_CONFIRM_PASSWORD, SET_DISABLED } from './action';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  isDiabled: true,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case RESET: {
      return { ...initialState };
    }
    case SET_FIRST_NAME: {
      return { ...state, firstname: action.payload };
    }
    case SET_LAST_NAME: {
      return { ...state, lastname: action.payload };
    }
    case SET_EMAIL: {
      return { ...state, email: action.payload };
    }
    case SET_PHONE: {
      return { ...state, phone: action.payload };
    }
    case SET_PASSWORD: {
      return { ...state, password: action.payload };
    }
    case SET_CONFIRM_PASSWORD: {
      return { ...state, confirmPassword: action.payload };
    }
    case SET_DISABLED: {
      return { ...state, isDiabled: action.payload };
    }
    default:
      return state;
  }
}
