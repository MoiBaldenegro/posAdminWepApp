import axios from 'axios';
import { MENUS_FAILURE, MENUS_REQUEST, GET_MENUS } from './actionTypes';

// Get menus
export function getMenusAction() {
  return async (dispatch) => {
    dispatch({ type: MENUS_REQUEST });
    try {
      const menusArray = await axios(
        'https://tomate-server.onrender.com/menus-yrecetas',
      );
      if (menusArray.status === 200) {
        dispatch({ type: GET_MENUS, payload: menusArray.data });
        return;
      }
      dispatch({
        type: MENUS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: MENUS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
}
