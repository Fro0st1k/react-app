export const initialFilmsState = {
  foundFilmsList: [],
  hasError: false,
  isLoading: false
};

export const filmsReducer = (state = initialFilmsState, action = {}) => {
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
    case 'CLEAR_FILMS':
      return {
        ...state,
        foundFilmsList: []
      };
    default:
      return state;
  }
};
