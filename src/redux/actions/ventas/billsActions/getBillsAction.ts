import axios from '../../../../configs/axios';
import {
  SEARCH_BILLS,
  BILLS_REQUEST,
  BILLS_FAILURE,
  GET_BILLS,
} from './actionTypes';
import { BILLS_PATH } from '../../../../lib/path.lib';

//Get bills
export const getBillsAction = () => {
  return async (dispatch) => {
    dispatch({ type: BILLS_REQUEST });
    try {
      const response = await axios(BILLS_PATH);
      if (response.status === 200) {
        dispatch({ type: GET_BILLS, payload: response.data });
        return;
      }
      dispatch({
        type: BILLS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: BILLS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search bills
export const searchBillsAction = (payload) => ({
  type: SEARCH_BILLS,
  payload,
});
