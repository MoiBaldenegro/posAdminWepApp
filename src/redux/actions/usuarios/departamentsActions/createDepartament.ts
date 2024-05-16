import axios from '../../../../configs/axios';
import {
  DEPARTAMENTS_FAILURE,
  DEPARTAMENTS_REQUEST,
  SAVE_DEPARTAMENTS,
} from './actionTypes';
import { DEPARTAMENTS_PATH } from '../../../../lib/path.lib';

export const createDepartamentAction =
  (departament: any) => async (dispatch: any) => {
    dispatch({ type: DEPARTAMENTS_REQUEST });
    try {
      const res = await axios.post(DEPARTAMENTS_PATH, departament);
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
