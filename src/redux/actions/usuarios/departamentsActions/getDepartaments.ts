import axios from 'axios';
import {
  SEARCH_DEPARTAMENTS,
  DEPARTAMENTS_REQUEST,
  DEPARTAMENTS_FAILURE,
  GET_DEPARTAMENTS,
} from './actionTypes';

//Get departaments
export const getDepartamentsAction = () => {
  return async (dispatch) => {
    dispatch({ type: DEPARTAMENTS_REQUEST });
    try {
      const response = await axios(
        'https://tomate-server.onrender.com/departaments',
      );
      if (response.status === 200) {
        dispatch({ type: GET_DEPARTAMENTS, payload: response.data });
        return;
      }
      dispatch({
        type: DEPARTAMENTS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: DEPARTAMENTS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search departaments
export const searchDepartamentsAction = (payload) => ({
  type: SEARCH_DEPARTAMENTS,
  payload,
});
