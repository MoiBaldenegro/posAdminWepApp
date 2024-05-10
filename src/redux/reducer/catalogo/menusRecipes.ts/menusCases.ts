import { toggleStatus } from '../../utils/toggleStatus';

//public
export function menusRequest(state) {
  return {
    ...state,
    loading: true,
  };
}
export function menusFailure(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

// Create
export function menusConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveMenus(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getMenus(state, action) {
  return {
    ...state,
    allMenus: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}

// Search
export function searchMenus(state, action) {
  const value = action.payload;
  const menusSearch = state.allMenus.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allCategories: menusSearch,
  };
}

// Update
export function discontinueMenus(state, action) {
  const newMenusArray = toggleStatus(state.allMenus, action.payload);
  return {
    ...state,
    allCategories: newMenusArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
