import axios from '../../../../configs/axios';
import { PROFILES_PATH } from '../../../../lib/path.lib';
import {
  SEARCH_PROFILES,
  PROFILES_REQUEST,
  PROFILES_FAILURE,
  GET_PROFILES,
} from './actionTypes';

//Get profiles
export const getProfilesAction = () => {
  return async (dispatch) => {
    dispatch({ type: PROFILES_REQUEST });
    try {
      const response = await axios(PROFILES_PATH);
      if (response.status === 200) {
        dispatch({ type: GET_PROFILES, payload: response.data });
        return;
      }
      dispatch({
        type: PROFILES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: PROFILES_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search profiles
export const searchProfilesAction = (payload) => ({
  type: SEARCH_PROFILES,
  payload,
});
