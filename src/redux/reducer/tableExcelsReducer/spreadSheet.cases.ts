export function updateCellCase(state, action) {
  const { row, col, value } = action.payload;
  const newData = state.data.map((rowData, rowIndex) =>
    rowIndex === row
      ? rowData.map((cell, colIndex) => (colIndex === col ? value : cell))
      : rowData,
  );
  return {
    ...state,
    data: newData,
  };
}

export function selectCellCase(state, action) {
  return {
    ...state,
    selectedCell: action.payload,
  };
}
