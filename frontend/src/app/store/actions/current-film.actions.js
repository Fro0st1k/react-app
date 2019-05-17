import { httpService } from '../../http/http.service';

export const filmHasError = hasError => ({
  type: 'FILM_NOT_LOADED',
  hasError
});

export const filmIsLoading = isLoading => ({
  type: 'FILM_IS_LOADING',
  isLoading
});

export const filmFetchDataSuccess = filmInfo => ({
  type: 'FILM_FETCH_DATA_SUCCESS',
  filmInfo
});

export const fetchFilmAction = config => (dispatch) => {
  httpService.fetchFilm(config, dispatch);
};
