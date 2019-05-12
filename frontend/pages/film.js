import React from 'react';
import { fetchFilmAction } from '../src/app/store/actions/current-film.actions';
import { fetchFilmsAction } from '../src/app/store/actions/films.actions';
import { connect } from 'react-redux';
import { FilmPage } from '../src/app/pages/film-page/film-page';

const FilmPageContainer = (props) => {
  return <FilmPage {...props} />
};

FilmPageContainer.getInitialProps = async function({ query, store }) {
  const { filmId } = query;
  await store.dispatch(fetchFilmAction({url: `movies/${filmId}`}));
};

const mapStateToProps = ({ sort, currentFilm, films }) => {
  const { sortOptionsList, selectedSortOptionId } = sort;
  const { isLoading, filmInfo } = currentFilm;
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
    fetchFilmsTheSameCategory: (options) => dispatch(fetchFilmsAction(options)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPageContainer);
