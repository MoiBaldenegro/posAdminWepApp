import axios from '../../../../configs/axios';
import { MENUS_RECIPES_PATH } from '../../../../lib/path.lib';
import { MENUS_FAILURE, MENUS_REQUEST, GET_MENUS } from './actionTypes';

// Get menus
export function getMenusAction() {
  return async (dispatch) => {
    dispatch({ type: MENUS_REQUEST });
    try {
      const menusArray = await axios(MENUS_RECIPES_PATH);
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
