import axios from 'axios';
import {
  SEARCH_CANCELLATIONS,
  CANCELLATIONS_REQUEST,
  CANCELLATIONS_FAILURE,
  GET_CANCELLATIONS,
} from './actionTypes';

//Get cancellations
export const getCancellationsAction = () => {
  return async (dispatch) => {
    dispatch({ type: CANCELLATIONS_REQUEST });
    try {
      const response = await axios(
        'https://tomate-server.onrender.com/cancellations',
      );
      if (response.status === 200) {
        dispatch({ type: GET_CANCELLATIONS, payload: response.data });
        return;
      }
      dispatch({
        type: CANCELLATIONS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: CANCELLATIONS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search cancellations
export const searchCancellationsAction = (payload) => ({
  type: SEARCH_CANCELLATIONS,
  payload,
});
