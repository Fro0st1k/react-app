const filmsState = {
  foundFilmsList: [],
  hasError: false,
  isLoading: false
};

export const filmsReducer = (state = filmsState, action) => {
  switch (action.type) {
    case 'FILMS_NOT_LOADED':
      return {
        ...state,
        hasError: action.hasError
      };
    case 'FILMS_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      };
    case 'FILMS_FETCH_DATA_SUCCESS':
      return {
        hasError: false,
        isLoading: false,
        foundFilmsList: action.filmList
      };
    default:
      return state;
  }
};
