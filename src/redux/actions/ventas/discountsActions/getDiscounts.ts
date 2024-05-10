import axios from 'axios';
import {
  SEARCH_DISCOUNTS,
  DISCOUNTS_REQUEST,
  DISCOUNTS_FAILURE,
  GET_DISCOUNTS,
} from './actionTypes';

//Get discounts
export const getDiscountsAction = () => {
  return async (dispatch) => {
    dispatch({ type: DISCOUNTS_REQUEST });
    try {
      const response = await axios(
        'https://tomate-server.onrender.com/discounts',
      );
      if (response.status === 200) {
        dispatch({ type: GET_DISCOUNTS, payload: response.data });
        return;
      }
      dispatch({
        type: DISCOUNTS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: DISCOUNTS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search discounts
export const searchDiscountsAction = (payload) => ({
  type: SEARCH_DISCOUNTS,
  payload,
});
