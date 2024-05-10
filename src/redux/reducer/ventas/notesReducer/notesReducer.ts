import {
  NOTES_REQUEST,
  NOTES_FAILURE,
  NOTES_CONFLICT,
  SAVE_NOTES,
  GET_NOTES,
  SEARCH_NOTES,
  DISCONTINUE_NOTE,
} from '../../../actions/ventas/notesActions/actionTypes';
import {
  searchNotes,
  notesConflict,
  notesFailure,
  notesRequest,
  getNotes,
  saveNotes,
  discontinueNotes,
} from './notesCases';

const initialState = {
  allNotes: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case NOTES_REQUEST:
      return notesRequest(state);
    case NOTES_FAILURE:
      return notesFailure(state, action);
    // Create
    case NOTES_CONFLICT:
      return notesConflict(state, action);
    case SAVE_NOTES:
      return saveNotes(state);
    // Get
    case GET_NOTES:
      return getNotes(state, action);
    // Search
    case SEARCH_NOTES:
      return searchNotes(state, action);
    // Update
    case DISCONTINUE_NOTE:
      return discontinueNotes(state, action);
    default:
      return state;
  }
}
