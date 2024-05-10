import {
  EMPLOYEES_REQUEST,
  EMPLOYEES_FAILURE,
  EMPLOYEES_CONFLICT,
  SAVE_EMPLOYEES,
  GET_EMPLOYEES,
  SEARCH_EMPLOYEES,
  DISCONTINUE_EMPLOYEE,
} from '../../../actions/usuarios/employeesActions/actionTypes';
import {
  searchEmployees,
  employeesConflict,
  employeesFailure,
  employeesRequest,
  getEmployees,
  saveEmployees,
  discontinueEmployees,
} from './employeesCases';

const initialState = {
  allEmployees: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function employeesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case EMPLOYEES_REQUEST:
      return employeesRequest(state);
    case EMPLOYEES_FAILURE:
      return employeesFailure(state, action);
    // Create
    case EMPLOYEES_CONFLICT:
      return employeesConflict(state, action);
    case SAVE_EMPLOYEES:
      return saveEmployees(state);
    // Get
    case GET_EMPLOYEES:
      return getEmployees(state, action);
    // Search
    case SEARCH_EMPLOYEES:
      return searchEmployees(state, action);
    // Update
    case DISCONTINUE_EMPLOYEE:
      return discontinueEmployees(state, action);
    default:
      return state;
  }
}
