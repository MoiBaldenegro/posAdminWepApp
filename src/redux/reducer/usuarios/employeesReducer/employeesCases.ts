import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function employeesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function employeesFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function employeesConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveEmployees(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getEmployees(state, action) {
  return {
    ...state,
    allEmployees: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchEmployees(state, action) {
  const value = action.payload;
  const employeesSearch = state.allEmployees.filter((element) =>
    element.employeeName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allEmployees: employeesSearch,
  };
}
// Update
export function discontinueEmployees(state, action) {
  const newEmployeesArray = toggleStatus(state.allEmployees, action.payload);
  return {
    ...state,
    allEmployees: newEmployeesArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
