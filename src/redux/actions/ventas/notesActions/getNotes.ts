import axios from 'axios';
import {
  SEARCH_NOTES,
  NOTES_REQUEST,
  NOTES_FAILURE,
  GET_NOTES,
} from './actionTypes';

//Get notes
export const getNotesAction = () => {
  return async (dispatch) => {
    dispatch({ type: NOTES_REQUEST });
    try {
      const response = await axios('https://tomate-server.onrender.com/notes');
      if (response.status === 200) {
        dispatch({ type: GET_NOTES, payload: response.data });
        return;
      }
      dispatch({
        type: NOTES_FAILURE,
        error: 'Respuesta inesperada del servidor',
      });
    } catch (error) {
      dispatch({
        type: NOTES_FAILURE,
        error: 'Error en la solicitud',
      });
    }
  };
};

// search notes
export const searchNotesAction = (payload) => ({
  type: SEARCH_NOTES,
  payload,
});
