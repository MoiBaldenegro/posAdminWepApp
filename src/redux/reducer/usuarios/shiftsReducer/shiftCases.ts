import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function shiftsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function shiftsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function shiftsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveShifts(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getShifts(state, action) {
  return {
    ...state,
    allShifts: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchShifts(state, action) {
  const value = action.payload;
  const shiftsSearch = state.allShifts.filter((element) =>
    element.shiftName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allShifts: shiftsSearch,
  };
}
// Update
export function discontinueShifts(state, action) {
  const newShiftsArray = toggleStatus(state.allShifts, action.payload);
  return {
    ...state,
    allShifts: newShiftsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
