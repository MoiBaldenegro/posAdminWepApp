import axios from 'axios';
import {
  SEARCH_CATEGORIES,
  CATEGORIES_REQUEST,
  CATEGORIES_FAILURE,
  GET_CATEGORIES,
} from './actionTypes';

//Get categories
export const getCategoriesAction = () => {
  return async (dispatch) => {
    dispatch({ type: CATEGORIES_REQUEST });
    try {
      const response = await axios(
        'https://tomate-server.onrender.com/categories',
      );
      if (response.status === 200) {
        dispatch({ type: GET_CATEGORIES, payload: response.data });
        return;
      }
      dispatch({
        type: CATEGORIES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: CATEGORIES_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search categories
export const searchCategoriesAction = (payload) => ({
  type: SEARCH_CATEGORIES,
  payload,
});
