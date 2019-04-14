const sortState = {
  sortOptionsList: ['rating', 'date'],
  selectedSortOptionId: 0
};

export const sortReducer = (state = sortState, action) => {
  switch (action.type) {
    case 'CHANGE_SORT':
      return {
        ...state,
        selectedSortOptionId: action.selectedSortOptionId
      };
    default:
      return state;
  }
};
