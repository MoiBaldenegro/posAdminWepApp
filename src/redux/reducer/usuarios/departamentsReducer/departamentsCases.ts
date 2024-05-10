import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function departamentsRequest(state) {
  return {
    ...state,
    loadingDepartament: true,
  };
}

export function departamentsFailure(state) {
  return {
    ...state,
    loadingDepartament: false,
    errorDepartament: true,
  };
}
// Create
export function departamentsConflict(state) {
  return {
    ...state,
    loadingDepartament: true,
    conflict: true,
  };
}

export function saveDepartaments(state) {
  return {
    ...state,
    errorDepartament: null,
    conflict: null,
    loadingDepartament: false,
  };
}

// Get
export function getDepartaments(state, action) {
  return {
    ...state,
    allDepartaments: action.payload,
    loadingDepartament: false,
    errorDepartament: null,
    conflict: null,
  };
}
// Search
export function searchDepartaments(state, action) {
  const value = action.payload;
  const departamentsSearch = state.allDepartaments.filter((element) =>
    element.departamentName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allDepartaments: departamentsSearch,
  };
}
// Update
export function discontinueDepartaments(state, action) {
  const newDepartamentsArray = toggleStatus(
    state.allDepartaments,
    action.payload,
  );
  return {
    ...state,
    allDepartament: newDepartamentsArray,
    errorDepartament: null,
    conflict: null,
    loadingDepartament: false,
  };
}
