import axios from 'axios';
import {
  MODIFIERS_FAILURE,
  MODIFIERS_REQUEST,
  GET_MODIFIERS,
  SEARCH_MODIFIERS,
} from './actionTypes';

// Get modifiers
export function getModifiersAction() {
  return async (dispatch) => {
    dispatch({ type: MODIFIERS_REQUEST });
    try {
      const modifiersArray = await axios(
        'https://tomate-server.onrender.com/modifications',
      );
      if (modifiersArray.status === 200) {
        dispatch({ type: GET_MODIFIERS, payload: modifiersArray.data });
        return;
      }
      dispatch({
        type: MODIFIERS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: MODIFIERS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
}

// search categories
export const searchModifiersAction = (payload) => ({
  type: SEARCH_MODIFIERS,
  payload,
});
