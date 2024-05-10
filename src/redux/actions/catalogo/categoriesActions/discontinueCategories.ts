import axios from 'axios';
import {
  CATEGORIES_FAILURE,
  CATEGORIES_REQUEST,
  DISCONTINUE_CATEGORY,
} from './actionTypes';

export function discontinueCategoriesAction(id, body, path) {
  return async (dispatch) => {
    dispatch({ type: CATEGORIES_REQUEST });
    const bodyValue = body === 'enabled' ? 'disabled' : 'enabled';
    const solicitud = { status: bodyValue };

    try {
      const response = await axios.put(
        `https://tomate-server.onrender.com/${path}/discontinue/${id}`,
        solicitud,
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
      dispatch({ type: DISCONTINUE_CATEGORY, payload: response.data });
    } catch (error) {
      dispatch({
        type: CATEGORIES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
      throw new Error(`Ha ocurrido un error inesperado ${error}`);
    }
  };
}
