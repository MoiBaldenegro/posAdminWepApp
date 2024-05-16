import axios from 'axios';
import {
  GET_TILLS,
  SEARCH_TILLS,
  TILLS_FAILURE,
  TILLS_REQUEST,
} from './actionTypes';
import { TILL_PATH } from '../../../lib/path.lib';

//Get till
export const getTillsAction = () => {
  return async (dispatch) => {
    dispatch({ type: TILLS_REQUEST });
    try {
      const response = await axios(TILL_PATH);
      if (response.status === 200) {
        dispatch({ type: GET_TILLS, payload: response.data });
        return;
      }
      dispatch({
        type: TILLS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: TILLS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search categories
export const searchTillsAction = (payload) => ({
  type: SEARCH_TILLS,
  payload,
});
