import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function notesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function notesFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function notesConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveNotes(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getNotes(state, action) {
  return {
    ...state,
    allNotes: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchNotes(state, action) {
  const value = action.payload;
  const notesSearch = state.allNotes.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allNotes: notesSearch,
  };
}
// Update
export function discontinueNotes(state, action) {
  const newNotesArray = toggleStatus(state.allNotes, action.payload);
  return {
    ...state,
    allNotes: newNotesArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
