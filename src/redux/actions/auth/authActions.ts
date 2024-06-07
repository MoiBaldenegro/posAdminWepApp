import axios from '../../../configs/axios';
import { USERS_PATH, LOGIN_PATH } from '../../../lib/path.lib';

export const LOGIN_USER = 'LOGIN_USER';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_LOADING_REGISTER = 'TOGGLE_LOADING_REGISTER';
export const SET_ERRORS = 'SET_ERRORS';
export const SET_ERRORS_REGISTER = 'SET_ERRORS_REGISTER';
export const GET_USERS = 'GET_USERS';

// Register authentication
export const createUser = (user) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_REGISTER, payload: true });
  try {
    const response = await axios.post(user);
    if (!response.data) {
      dispatch({ type: TOGGLE_LOADING_REGISTER, payload: false });
      dispatch({ type: SET_ERRORS_REGISTER, payload: true });
    }
    dispatch({ type: TOGGLE_LOADING_REGISTER, payload: false });
    dispatch({ type: TOGGLE_LOADING_REGISTER, payload: null });
  } catch (error) {
    dispatch({ type: TOGGLE_LOADING_REGISTER, payload: false });
    dispatch({ type: SET_ERRORS_REGISTER, payload: true });
  }
};

// login authentication
export const loginUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(LOGIN_PATH, user);
    return dispatch({ type: LOGIN_USER, payload: response.data });
  } catch (error) {
    return dispatch({ type: TOGGLE_LOADING, payload: false });
  }
};

export const getUsersAction = () => async (dispatch: any) => {
  try {
    const res = await axios.get(USERS_PATH, {
      timeout: 5000,
    });
    if (res.status < 200 || res.status >= 300) {
      throw new Error(`Error en la petición: ${res.status} ${res.statusText}`);
    }
    if (!res.data) {
      throw new Error(
        'No se pudo resolver la peticion, usuarios no encontrado',
      );
    }
    const usersData = res.data;
    dispatch({ type: GET_USERS, payload: usersData });

    return usersData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      console.error('Tiempo de espera de la solicitud agotado');
      // Realizar acciones específicas, como mostrar un mensaje al usuario
    } else {
      console.error('Error inesperado:', error);
    }
    console.error(
      `No se pudo resolver la peticion debido a un error inesperado ${error}`,
    );
  }
};

export const setErrors = (error) => ({ type: SET_ERRORS, payload: error });
export const toggleLoading = (payload: boolean) => ({
  type: TOGGLE_LOADING,
  payload,
});
