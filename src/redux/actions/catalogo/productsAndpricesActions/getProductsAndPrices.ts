import axios from 'axios';
import {
  PRODUCTSANDPRICES_FAILURE,
  PRODUCTSANDPRICES_REQUEST,
  GET_PRODUCTSANDPRICES,
  SEARCH_PRODUCTSANDPRICES,
} from './actionTypes';

// Get productsAndPrices
export function getProductsAndPricesAction() {
  return async (dispatch) => {
    dispatch({ type: PRODUCTSANDPRICES_REQUEST });
    try {
      const productsAndPricesArray = await axios(
        'https://tomate-server.onrender.com/products',
      );
      if (productsAndPricesArray.status === 200) {
        dispatch({
          type: GET_PRODUCTSANDPRICES,
          payload: productsAndPricesArray.data,
        });
        return;
      }
      dispatch({
        type: PRODUCTSANDPRICES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: PRODUCTSANDPRICES_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
}

// search products
export const searchProductsAndPricesAction = (payload) => ({
  type: SEARCH_PRODUCTSANDPRICES,
  payload,
});
