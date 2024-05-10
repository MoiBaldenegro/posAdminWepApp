import axios from 'axios';
import {
  DISCONTINUE_DISHES,
  DISHES_FAILURE,
  DISHES_REQUEST,
} from './actionTypes';

export function discontinueDishesAction(id, body) {
  return async (dispatch) => {
    dispatch({ type: DISHES_REQUEST });
    const bodyValue = body === 'enabled' ? 'disabled' : 'enabled';
    const solicitud = { status: bodyValue };
    try {
      const response = await axios.put(
        `https://tomate-server.onrender.com/dishes/${id}`,
        solicitud,
      );
      if (!response.data) {
        dispatch({
          type: DISHES_FAILURE,
          error: 'Respuesta inesperada del servidor',
        });
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      dispatch({ type: DISCONTINUE_DISHES, payload: response.data });
    } catch (error) {
      dispatch({
        type: DISHES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
      throw new Error(`Ha ocurrido un error inesperado ${error}`);
    }
  };
}
