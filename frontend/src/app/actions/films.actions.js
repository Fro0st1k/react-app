import Axios from 'axios';

export const filmsHasErrored = (hasError) => {
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

export const fetchFilmsAction = (config) => {
  return (dispatch) => {
    dispatch(filmsIsLoading(true));

    return Axios
      .request(config)
      .then(response => dispatch(filmsFetchDataSuccess(response.data.data)))
      .catch(() => dispatch(filmsHasErrored(true)));
  };
};
