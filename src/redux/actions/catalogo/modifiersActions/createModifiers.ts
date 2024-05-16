import axios from '../../../../configs/axios';
import {
  MODIFIERS_FAILURE,
  MODIFIERS_REQUEST,
  SAVE_MODIFIERS,
} from './actionTypes';
import { MODIFIERS_PATH } from '../../../../lib/path.lib';

export const createModifiersAction = (modifiers) => async (dispatch) => {
  dispatch({ type: MODIFIERS_REQUEST });
  console.log(modifiers);
  try {
    if (Array.isArray(modifiers)) {
      const res = await axios.post(MODIFIERS_PATH, modifiers);
      if (!res.data) {
        dispatch({
          type: MODIFIERS_FAILURE,
          error: 'Respuesta inesperada del servidor',
        });
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      if (res.status === 409) {
        dispatch({
          type: MODIFIERS_FAILURE,
          error: 'Se han encontrado complementos duplicados',
        });
        throw new Error('Esta categoria ya se encuentra listada');
      }

      dispatch({ type: SAVE_MODIFIERS });
    } else {
      const response = await axios.post(MODIFIERS_PATH, modifiers);
      if (!response.data) {
        throw new Error(
          'Ha ocurrido algo inesperado, la respuesta no contiene datos',
        );
      }
      dispatch({ type: SAVE_MODIFIERS });
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      dispatch({
        type: MODIFIERS_FAILURE,
        error: 'Solicitud cancelada',
      });
      throw new Error(`La solicitud fue cancelada: ${error}`);
    } else if (error.response && error.response.status === 409) {
      dispatch({
        type: MODIFIERS_FAILURE,
        error: 'Se han encontrado complementos duplicados',
      });
      throw new Error('Este complemento ya se encuentra listado');
    }
    alert(
      'Ha ocurrido algo inesperado, y no se ha podido enviar la informacion',
    );

    dispatch({ type: MODIFIERS_FAILURE, error: 'Error en la solicitud' });
    throw new Error(error);
  }
};
