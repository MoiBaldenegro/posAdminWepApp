import axios from '../../../../configs/axios';
import { PRODUCTS_PATH } from '../../../../lib/path.lib';
import {
  PRODUCTSANDPRICES_CONFLICT,
  PRODUCTSANDPRICES_FAILURE,
  PRODUCTSANDPRICES_REQUEST,
  SAVE_PRODUCTSANDPRICES,
} from './actionTypes';

export const createProductsAndPrices =
  (productsAndPrices) => async (dispatch) => {
    dispatch({ type: PRODUCTSANDPRICES_REQUEST });
    try {
      if (Array.isArray(productsAndPrices)) {
        const res = await axios.post(PRODUCTS_PATH, productsAndPrices);
        if (!res.data) {
          dispatch({
            type: PRODUCTSANDPRICES_FAILURE,
            error: 'Respuesta inesperada del servidor',
          });
          throw new Error(
            'Ha ocurrido algo inesperado, la respuesta no contiene datos',
          );
        }
        if (res.status === 409) {
          dispatch({
            type: PRODUCTSANDPRICES_FAILURE,
            error: 'Se han encontrado productos duplicados',
          });
          throw new Error('Este producto ya se encuentra listada');
        }
        dispatch({ type: SAVE_PRODUCTSANDPRICES });
      } else {
        const response = await axios.post(PRODUCTS_PATH, productsAndPrices);
        if (!response.data) {
          throw new Error(
            'Ha ocurrido algo inesperado, la respuesta no contiene datos',
          );
        }
        dispatch({ type: SAVE_PRODUCTSANDPRICES });
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        dispatch({
          type: PRODUCTSANDPRICES_FAILURE,
          error: 'Solicitud cancelada',
        });
        throw new Error(`La solicitud fue cancelada: ${error}`);
      } else if (error.response && error.response.status === 409) {
        dispatch({
          type: PRODUCTSANDPRICES_FAILURE,
          error: 'Se han encontrado productos duplicados',
        });
        throw new Error('Este producto ya se encuentra listado');
      }
      alert(
        'Ha ocurrido algo inesperado, y no se ha podido enviar la informacion',
      );

      dispatch({
        type: PRODUCTSANDPRICES_FAILURE,
        error: 'Error en la solicitud',
      });
      throw new Error(error);
    }
  };
