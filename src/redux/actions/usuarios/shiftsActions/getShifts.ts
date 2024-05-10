import axios from 'axios';
import {
  SEARCH_SHIFTS,
  SHIFTS_REQUEST,
  SHIFTS_FAILURE,
  GET_SHIFTS,
} from './actiontypes';

//Get shifts
export const getShiftsAction = () => {
  return async (dispatch) => {
    dispatch({ type: SHIFTS_REQUEST });
    try {
      const response = await axios('https://tomate-server.onrender.com/shifts');
      if (response.status === 200) {
        dispatch({ type: GET_SHIFTS, payload: response.data });
        return;
      }
      dispatch({
        type: SHIFTS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: SHIFTS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search shifts
export const searchShiftsAction = (payload) => ({
  type: SEARCH_SHIFTS,
  payload,
});
