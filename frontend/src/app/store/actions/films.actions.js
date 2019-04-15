import { httpService } from '../../http/http.service';

export const filmsHasError = (hasError) => {
  return {
    type: 'FILMS_NOT_LOADED',
    hasError: hasError
  };
};

export const filmsIsLoading = (isLoading) => {
  return {
    type: 'FILMS_IS_LOADING',
    isLoading: isLoading
  };
};

export const filmsFetchDataSuccess = (filmList) => {
  return {
    type: 'FILMS_FETCH_DATA_SUCCESS',
    filmList
  };
};

export const resetFilmList = () => {
  return {
    type: 'CLEAR_FILMS'
  };
};

export const fetchFilmsAction = (config) => {
  return (dispatch) => {
    httpService.fetchFilms(config, dispatch);
  };
};
