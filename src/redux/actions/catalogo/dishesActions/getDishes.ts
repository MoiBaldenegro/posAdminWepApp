import axios from 'axios';
import {
  DISHES_FAILURE,
  DISHES_REQUEST,
  GET_DISHES,
  SEARCH_DISHES,
} from './actionTypes';

// Get dishes
export function getDishesAction() {
  return async (dispatch) => {
    dispatch({ type: DISHES_REQUEST });
    try {
      const dishesArray = await axios(
        'https://tomate-server.onrender.com/dishes',
      );
      if (dishesArray.status === 200) {
        dispatch({ type: GET_DISHES, payload: dishesArray.data });
        return;
      }
      dispatch({
        type: DISHES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: DISHES_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
}

// search categories
export const searchDishesAction = (payload) => ({
  type: SEARCH_DISHES,
  payload,
});
