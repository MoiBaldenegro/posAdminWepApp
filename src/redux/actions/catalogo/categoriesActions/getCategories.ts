import axios from '../../../../configs/axios';
import {
  SEARCH_CATEGORIES,
  CATEGORIES_REQUEST,
  CATEGORIES_FAILURE,
  GET_CATEGORIES,
} from './actionTypes';
import { CATEGORIES_PATH } from '../../../../lib/path.lib';

//Get categories
export const getCategoriesAction = () => {
  return async (dispatch) => {
    dispatch({ type: CATEGORIES_REQUEST });
    try {
      const response = await axios(CATEGORIES_PATH);
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
