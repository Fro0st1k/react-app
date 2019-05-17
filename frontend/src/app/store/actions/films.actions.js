import { httpService } from '../../http/http.service';

export const filmsHasError = hasError => ({
  type: 'FILMS_NOT_LOADED',
  hasError
});

export const filmsIsLoading = isLoading => ({
  type: 'FILMS_IS_LOADING',
  isLoading
});

export const filmsFetchDataSuccess = filmList => ({
  type: 'FILMS_FETCH_DATA_SUCCESS',
  filmList
});

export const resetFilmList = () => ({
  type: 'CLEAR_FILMS'
});

export const fetchFilmsAction = config => (dispatch) => {
  httpService.fetchFilms(config, dispatch);
};
