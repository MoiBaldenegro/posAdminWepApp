import axios from '../../../../configs/axios';
import { EMPLOYEES_PATH } from '../../../../lib/path.lib';
import {
  SEARCH_EMPLOYEES,
  EMPLOYEES_REQUEST,
  EMPLOYEES_FAILURE,
  GET_EMPLOYEES,
} from './actionTypes';

//Get employees
export const getEmployeesAction = () => {
  return async (dispatch) => {
    dispatch({ type: EMPLOYEES_REQUEST });
    try {
      const response = await axios(EMPLOYEES_PATH);
      if (response.status === 200) {
        dispatch({ type: GET_EMPLOYEES, payload: response.data });
        return;
      }
      dispatch({
        type: EMPLOYEES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEES_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search employees
export const searchEmployeesAction = (payload) => ({
  type: SEARCH_EMPLOYEES,
  payload,
});
