import axios from 'axios';
import { DISCONTINUE_MENUS, MENUS_FAILURE, MENUS_REQUEST } from './actionTypes';

export function discontinueMenusAction(id, body) {
  console.log(`depurando action: ${id}, ${body}`);
  return async (dispatch) => {
    dispatch({ type: MENUS_REQUEST });
    const bodyValue = body === 'enabled' ? 'disabled' : 'enabled';
    const solicitud = { status: bodyValue };
    try {
      const response = await axios.put(
        `https://tomate-server.onrender.com/menus-yrecetas/${id}`,
        solicitud,
      );
      if (!response.data) {
        dispatch({
          type: MENUS_FAILURE,
          error: 'Respuesta inesperada del servidor',
        });
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      dispatch({ type: DISCONTINUE_MENUS, payload: response.data });
    } catch (error) {
      dispatch({
        type: MENUS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
      throw new Error(`Ha ocurrido un error inesperado ${error}`);
    }
  };
}
