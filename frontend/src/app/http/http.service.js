import Axios from 'axios';
import { filmsFetchDataSuccess, filmsHasError, filmsIsLoading } from '../store/actions/films.actions';
import { filmFetchDataSuccess, filmHasError, filmIsLoading } from '../store/actions/current-film.actions';

class HttpService {

  constructor() {
    this.baseURL = 'http://react-cdp-api.herokuapp.com/';
    this.defaultOptions = {
      method: 'GET',
      url: '',
      params: {
        limit: 20
      }
    };
  }

  createOptions(optionsData) {
    return {
      ...this.defaultOptions,
      url: `${this.baseURL}${optionsData.url}`,
      params: {
        ...this.defaultOptions.params,
        ...optionsData.params
      }
    };
  }

  makeRequest(optionsData) {
    const config = this.createOptions(optionsData);
    return Axios.request(config);
  }

  fetchFilms(optionsData, dispatch) {
    dispatch(filmsIsLoading(true));

    return this.makeRequest(optionsData)
      .then(response => dispatch(filmsFetchDataSuccess(response.data.data)))
      .catch(() => dispatch(filmsHasError(true)));
  }

  fetchFilm(optionsData, dispatch) {
    dispatch(filmIsLoading(true));

    return this.makeRequest(optionsData)
      .then(response => dispatch(filmFetchDataSuccess(response.data)))
      .catch(() => dispatch(filmHasError(true)));
  }
}

export const httpService = new HttpService();
