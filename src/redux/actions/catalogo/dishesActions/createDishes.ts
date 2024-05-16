import axios from '../../../../configs/axios';
import {
  DISHES_CONFLICT,
  DISHES_FAILURE,
  DISHES_REQUEST,
  SAVE_DISHES,
} from './actionTypes';
import { DISHES_PATH } from '../../../../lib/path.lib';

export const createDishesAction = (dishes) => async (dispatch) => {
  dispatch({ type: DISHES_REQUEST });
  try {
    if (Array.isArray(dishes)) {
      const res = await axios.post(DISHES_PATH, dishes);
      if (!res.data) {
        dispatch({
          type: DISHES_FAILURE,
          error: 'Respuesta inesperada del servidor',
        });
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      if (res.status === 409) {
        dispatch({
          type: DISHES_FAILURE,
          error: 'Se han encontrado complementos duplicados',
        });
        throw new Error('Esta categoria ya se encuentra listada');
      }
      dispatch({ type: SAVE_DISHES });
    } else {
      const response = await axios.post(DISHES_PATH, dishes);
      if (!response.data) {
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      dispatch({ type: SAVE_DISHES });
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      dispatch({
        type: DISHES_FAILURE,
        error: 'Solicitud cancelada',
      });
      throw new Error(`La solicitud fue cancelada: ${error}`);
    } else if (error.response && error.response.status === 409) {
      dispatch({
        type: DISHES_FAILURE,
        error: 'Se han encontrado complementos duplicados',
      });
      throw new Error('Este complemento ya se encuentra listado');
    }
    alert(
      'Ha ocurrido algo inesperado, y no se ha podido enviar la informacion',
    );

    dispatch({ type: DISHES_FAILURE, error: 'Error en la solicitud' });
    throw new Error(error);
  }
};
