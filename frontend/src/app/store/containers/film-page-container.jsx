import React from 'react';
import { fetchFilmAction } from '../actions/current-film.actions';
import { fetchFilmsAction, resetFilmList } from '../actions/films.actions';
import { connect } from 'react-redux';
import { FilmPage } from '../../pages/film-page/film-page';

export const FilmPageContainer = (props) => {
  return <FilmPage {...props} />
};

const mapStateToProps = ({sort, currentFilm, films}) => {
  const { sortOptionsList, selectedSortOptionId } = sort;
  const { filmInfo, isLoading } = currentFilm;
  const { foundFilmsList } = films;

  return {
    filmInfo,
    filmInfoIsLoading: isLoading,
    sortOptionsList,
    selectedSortOptionId,
    filmsSameGenre: foundFilmsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilm: (options) => dispatch(fetchFilmAction(options)),
    fetchFilmsTheSameCategory: (options) => dispatch(fetchFilmsAction(options)),
    clearFilmList: () => dispatch(resetFilmList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPageContainer);
