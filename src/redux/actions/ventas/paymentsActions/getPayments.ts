import axios from '../../../../configs/axios';
import { PAYMENTS_PATH } from '../../../../lib/path.lib';
import {
  SEARCH_PAYMENTS,
  PAYMENTS_REQUEST,
  PAYMENTS_FAILURE,
  GET_PAYMENTS,
} from './actiontypes';

//Get payments
export const getPaymentsAction = () => {
  return async (dispatch) => {
    dispatch({ type: PAYMENTS_REQUEST });
    try {
      const response = await axios(PAYMENTS_PATH);
      if (response.status === 200) {
        dispatch({ type: GET_PAYMENTS, payload: response.data });
        return;
      }
      dispatch({
        type: PAYMENTS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: PAYMENTS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search payments
export const searchPaymentsAction = (payload) => ({
  type: SEARCH_PAYMENTS,
  payload,
});
