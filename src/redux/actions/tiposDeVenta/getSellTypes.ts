import axios from '../../../configs/axios';
import {
  GET_SELLTYPES,
  SEARCH_SELLTYPES,
  SELLTYPES_FAILURE,
  SELLTYPES_REQUEST,
} from './actionTypes';
import { SELLTYPES_PATH } from '../../../lib/path.lib';

//Get sellType
export const getSellTypesAction = () => {
  return async (dispatch) => {
    dispatch({ type: SELLTYPES_REQUEST });
    try {
      const response = await axios(SELLTYPES_PATH);
      if (response.status === 200) {
        dispatch({ type: GET_SELLTYPES, payload: response.data });
        return;
      }
      dispatch({
        type: SELLTYPES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: SELLTYPES_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search categories
export const searchSellTypesAction = (payload) => ({
  type: SEARCH_SELLTYPES,
  payload,
});
