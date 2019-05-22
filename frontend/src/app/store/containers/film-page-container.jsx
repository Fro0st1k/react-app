import React from 'react';
import { connect } from 'react-redux';
import { fetchFilmAction } from '../actions/current-film.actions';
import { fetchFilmsAction, resetFilmList } from '../actions/films.actions';
import { FilmPage } from '../../pages/film-page/film-page';
import { sortedFilms } from '../selections/sort-selection';

export const FilmPageContainer = props => <FilmPage {...props} />;

const mapStateToProps = (state) => {
  const { filmInfo, isLoading } = state.currentFilm;

  return {
    filmInfo,
    filmInfoIsLoading: isLoading,
    filmsSameGenre: sortedFilms(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFilm: options => dispatch(fetchFilmAction(options)),
  fetchFilmsTheSameCategory: options => dispatch(fetchFilmsAction(options)),
  clearFilmList: () => dispatch(resetFilmList())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmPageContainer);
