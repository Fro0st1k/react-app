export const initialFilmState = {
  filmInfo: {
    genres: []
  },
  hasError: false,
  isLoading: false
};

export const currentFilmReducer = (state = initialFilmState, action = {}) => {
  switch (action.type) {
    case 'FILM_NOT_LOADED':
      return {
        ...state,
        hasError: action.hasError,
        isLoading: false
      };
    case 'FILM_IS_LOADING':
      return {
        ...state,
        hasError: false,
        isLoading: action.isLoading
      };
    case 'FILM_FETCH_DATA_SUCCESS':
      return {
        hasError: false,
        isLoading: false,
        filmInfo: action.filmInfo
      };
    default:
      return state;
  }
};
