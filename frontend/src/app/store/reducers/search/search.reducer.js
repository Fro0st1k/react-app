export const initialSearchState = {
  searchOptionsList: ['title', 'genres'],
  selectedFilterOptionId: 0
};

export const searchReducer = (state = initialSearchState, action = {}) => {
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
