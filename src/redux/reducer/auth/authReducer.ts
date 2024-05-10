import {
  LOGIN_USER,
  SET_ERRORS,
  TOGGLE_LOADING,
  TOGGLE_LOADING_REGISTER,
  SET_ERRORS_REGISTER,
  GET_USERS,
} from '../../actions/auth';

const initialState = {
  loginUsers: [],
  allUsers: [],
  isLoading: true,
  errors: [], // Asegúrate de agregar el campo de errores si lo utilizas
  invalidCredentials: false,
  isLoadingRegister: false,
  errorRegister: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case SET_ERRORS_REGISTER:
      return {
        ...state,
        errorsRegister: action.payload,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TOGGLE_LOADING_REGISTER:
      return {
        ...state,
        isLoadingRegister: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUsers: [...state.loginUsers, action.payload],
        auth: 'Auth',
      };

    default:
      return state;
  }
}
