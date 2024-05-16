import axios from '../../../../configs/axios';
import { PROFILES_PATH } from '../../../../lib/path.lib';

import {
  PROFILES_FAILURE,
  PROFILES_REQUEST,
  SAVE_PROFILES,
} from './actionTypes';

export const createProfileAction =
  (profileArray: any) => async (dispatch: any) => {
    console.log('ARRAY DE PROFILES');
    console.log(profileArray);
    dispatch({ type: PROFILES_REQUEST });
    try {
      for (const element of profileArray) {
        const data = {
          profileName: element.profileName,
          departament: element.departament._id,
        };
        console.log(data);
        try {
          const response = await axios.post(PROFILES_PATH, data);
          if (!response.data) {
            dispatch({
              type: PROFILES_FAILURE,
            });
            throw new Error(
              'Ha ocurrido algo inesperado, la respuesta no contiene datos',
            );
          }
          dispatch({ type: SAVE_PROFILES });
          // Puedes manejar la respuesta aquí si es necesario
        } catch (error: any) {
          dispatch({ type: PROFILES_FAILURE });
          throw new Error(error);
        }
      }
      // Si llega aquí, significa que todas las peticiones se completaron correctamente
      return;
    } catch (error) {
      dispatch({ type: PROFILES_FAILURE });
    }
  };

/*  
export const createProfileAction = (profile: any) => async (dispatch: any) => {
  dispatch({ type: PROFILES_REQUEST });
  try {
    const response = await axios.post(
      'https://tomate-server.onrender.com/profiles',
      profile,
    );
    if (!response.data) {
      dispatch({
        type: PROFILES_FAILURE,
      });
      throw new Error(
        'Ha ocurrido algo inesperado, la respuesta no contiene datos',
      );
    }
    dispatch({ type: SAVE_PROFILES });
    return response;
  } catch (error: any) {
    dispatch({ type: PROFILES_FAILURE });
    throw new Error(error);
  }
};


*/
