const searchState = {
  searchOptionsList: ['title', 'genres'],
  selectedFilterOptionId: 0,
};

export const searchReducer = (state = searchState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_FILTER':
      return {
        ...state,
        selectedFilterOptionId: action.selectedFilterOptionId
      };
    default:
      return state;
  }
};
