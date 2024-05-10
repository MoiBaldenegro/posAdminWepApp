import axios from 'axios';
import {
  CATEGORIES_FAILURE,
  CATEGORIES_REQUEST,
  SAVE_CATEGORIES,
} from './actionTypes';

export function updateCategoriesAction(id, body, path) {
  console.log(id, body, path);
  return async (dispatch) => {
    dispatch({ type: CATEGORIES_REQUEST });
    const newValue = { categoryName: body };

    try {
      const response = await axios.put(
        `https://tomate-server.onrender.com/${path}/${id}`,
        newValue,
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
      dispatch({ type: SAVE_CATEGORIES, payload: response.data });
      console.log(`larespuestafue:${JSON.stringify(response.data)}`);
    } catch (error) {
      dispatch({
        type: CATEGORIES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
      throw new Error(`Ha ocurrido un error inesperado ${error}`);
    }
  };
}
