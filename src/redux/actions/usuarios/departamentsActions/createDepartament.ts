import axios from 'axios';
import {
  DEPARTAMENTS_FAILURE,
  DEPARTAMENTS_REQUEST,
  SAVE_DEPARTAMENTS,
} from './actionTypes';

export const createDepartamentAction =
  (departament: any) => async (dispatch: any) => {
    dispatch({ type: DEPARTAMENTS_REQUEST });
    try {
      const res = await axios.post(
        'https://tomate-server.onrender.com/departaments',
        departament,
      );
      if (!res) {
        dispatch({ type: DEPARTAMENTS_FAILURE });
        throw new Error('No se pudo completar');
      }
      if (res.data.length < 1) {
        dispatch({ type: DEPARTAMENTS_FAILURE });
        throw new Error('No se pudo completar');
      }
      const departamentArray = res.data;
      dispatch({ type: SAVE_DEPARTAMENTS, payload: departamentArray });
      return res;
    } catch (error) {
      console.log(error);
      dispatch({ type: DEPARTAMENTS_FAILURE });
    }
  };
