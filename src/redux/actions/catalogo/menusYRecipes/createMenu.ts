import axios from '../../../../configs/axios';
import { MENUS_RECIPES_PATH } from '../../../../lib/path.lib';
import {
  MENUS_FAILURE,
  MENUS_REQUEST,
  SAVE_MENUS,
} from '../menusYRecipes/actionTypes';

export const createMenusAction = (menus) => async (dispatch) => {
  dispatch({ type: MENUS_REQUEST });
  try {
    if (Array.isArray(menus)) {
      const res = await axios.post(MENUS_RECIPES_PATH, menus);
      if (!res.data) {
        dispatch({
          type: MENUS_FAILURE,
          error: 'Respuesta inesperada del servidor',
        });
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      if (res.status === 409) {
        dispatch({
          type: MENUS_FAILURE,
          error: 'Se han encontrado menus duplicados',
        });
        throw new Error('Esta categoria ya se encuentra listada');
      }
      dispatch({ type: SAVE_MENUS });
    } else {
      const response = await axios.post(MENUS_RECIPES_PATH, menus);
      if (!response.data) {
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      dispatch({ type: SAVE_MENUS });
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      dispatch({
        type: MENUS_FAILURE,
        error: 'Solicitud cancelada',
      });
      throw new Error(`La solicitud fue cancelada: ${error}`);
    } else if (error.response && error.response.status === 409) {
      dispatch({
        type: MENUS_FAILURE,
        error: 'Se han encontrado menus duplicados',
      });
      throw new Error('Este menusya se encuentra listado');
    }
    alert(
      'Ha ocurrido algo inesperado, y no se ha podido enviar la informacion',
    );

    dispatch({ type: MENUS_FAILURE, error: 'Error en la solicitud' });
    throw new Error(error);
  }
};
