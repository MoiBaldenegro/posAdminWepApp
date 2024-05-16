import axios from '../../../../configs/axios';
import { MODIFIERS_PATH } from '../../../../lib/path.lib';
import {
  DELETE_MODIFIERS,
  MODIFIERS_FAILURE,
  MODIFIERS_REQUEST,
} from './actionTypes';

export function deleteModifiersAction(id) {
  return async (dispatch) => {
    dispatch({ type: MODIFIERS_REQUEST });
    try {
      const deletedModifier = await axios.delete(`${MODIFIERS_PATH}/${id}`);
      dispatch({ type: DELETE_MODIFIERS, payload: deletedModifier });
    } catch (error) {
      dispatch({
        type: MODIFIERS_FAILURE,
        error: 'Hubo un error al eliminar el elemento',
      });
      throw new Error('No se pudo eliminar el modificador');
    }
  };
}
