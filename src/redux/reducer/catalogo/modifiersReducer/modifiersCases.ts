//public
export function modifiersRequest(state) {
  return {
    ...state,
    loading: true,
  };
}
export function modifiersFailure(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}
export function notFoundModifiers(state) {
  return {
    ...state,
    allModifiers: [],
    loading: false,
    error: null,
    conflict: null,
  };
}

// Create
export function modifiersConflict(state, action) {
  return {
    ...state,
    loading: false,
    conflict: action.error,
  };
}

export function saveModifiers(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getModifiers(state, action) {
  return {
    ...state,
    allModifiers: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}

// Search
export function searchModifiers(state, action) {
  const value = action.payload;
  const modifiersSearch = state.allModifiers.filter((element) =>
    element.modifierName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allModifiers: modifiersSearch,
  };
}
// Delete
export function deletedModifier(state, action) {
  const refreshArray = state.allModifiers.filter(
    (modifier) => modifier._id !== action.payload._id,
  );

  return {
    ...state,
    allModifiers: refreshArray,
    loading: false,
    error: null,
    conflict: null,
  };
}
