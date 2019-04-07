import { httpService } from '../http/http.service';

export const filmHasErrored = (hasError) => {
  return {
    type: 'FILM_NOT_LOADED',
    hasError: hasError
  };
};

export const filmIsLoading = (isLoading) => {
  return {
    type: 'FILM_IS_LOADING',
    isLoading: isLoading
  };
};

export const filmFetchDataSuccess = (filmInfo) => {
  return {
    type: 'FILM_FETCH_DATA_SUCCESS',
    filmInfo
  };
};

export const fetchFilmAction = (config) => {
  return (dispatch) => {
    httpService.fetchFilm(config, dispatch);
  };
};
