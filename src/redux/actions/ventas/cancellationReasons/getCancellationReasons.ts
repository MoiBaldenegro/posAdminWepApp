import axios from '../../../../configs/axios';
import { CANCELATION_REASONS_PATH } from '../../../../lib/path.lib';
import {
  SEARCH_CANCELLATIONREASONS,
  CANCELLATIONREASONS_REQUEST,
  CANCELLATIONREASONS_FAILURE,
  GET_CANCELLATIONREASONS,
} from './actionTypes';

//Get cancellationReasons
export const getCancellationReasonsAction = () => {
  return async (dispatch) => {
    dispatch({ type: CANCELLATIONREASONS_REQUEST });
    try {
      const response = await axios(CANCELATION_REASONS_PATH);
      if (response.status === 200) {
        dispatch({ type: GET_CANCELLATIONREASONS, payload: response.data });
        return;
      }
      dispatch({
        type: CANCELLATIONREASONS_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: CANCELLATIONREASONS_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search cancellationReasons
export const searchCancellationReasonsAction = (payload) => ({
  type: SEARCH_CANCELLATIONREASONS,
  payload,
});
