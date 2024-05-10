//dependencies
import axios from 'axios';
// Actions consts
import {
  CATEGORIES_REQUEST,
  CATEGORIES_FAILURE,
  CATEGORIES_CONFLICT,
  SAVE_CATEGORIES,
} from './actionTypes';

// Create Categories
export const createCategoryAction = (category) => async (dispatch) => {
  dispatch({ type: CATEGORIES_REQUEST });
  try {
    if (Array.isArray(category)) {
      const res = await axios.post(
        'https://tomate-server.onrender.com/categories',
        category,
      );
      if (!res.data) {
        dispatch({
          type: CATEGORIES_FAILURE,
          error: 'Respuesta inesperada del servidor',
        });
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      if (res.status === 409) {
        dispatch({
          type: CATEGORIES_FAILURE,
          error: 'Se han encontrado categorias duplicadas',
        });
        throw new Error('Esta categoria ya se encuentra listada');
      }
      dispatch({ type: SAVE_CATEGORIES });
    } else {
      const response = await axios.post(
        'https://tomate-server.onrender.com/categories',
        category,
      );
      if (!response.data) {
        dispatch({
          type: CATEGORIES_FAILURE,
          error: 'Respuesta inesperada del servidor',
        });
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      dispatch({ type: SAVE_CATEGORIES });
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      dispatch({
        type: CATEGORIES_FAILURE,
        error: 'Solicitud cancelada',
      });
      throw new Error(`La solicitud fue cancelada: ${error}`);
    } else if (error.response && error.response.status === 409) {
      dispatch({
        type: CATEGORIES_FAILURE,
        error: 'Se han encontrado categorias duplicadas',
      });
      throw new Error('Esta categoria ya se encuentra listada');
    }
    dispatch({ type: CATEGORIES_FAILURE, error: 'Error en la solicitud' });
    throw new Error(error);
  }
};
