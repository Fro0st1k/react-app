import React from 'react';
import { fetchFilmsAction } from '../actions/films.actions';
import { connect } from 'react-redux';
import { MainPage } from '../../pages/main-page/main-page';

export const MainPageContainer = (props) => {
  return <MainPage {...props} />
};

const mapStateToProps = ({sort, search, films}) => {
  const { sortOptionsList, selectedSortOptionId } = sort;
  const { searchOptionsList, selectedFilterOptionId } = search;
  const { foundFilmsList } = films;

  return {
    sortOptionsList,
    selectedSortOptionId,
    searchOptionsList,
    selectedFilterOptionId,
    foundFilmsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilms: (options) => dispatch(fetchFilmsAction(options))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
