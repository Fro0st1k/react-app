import React from 'react';
import { fetchFilmsAction } from '../actions/films.actions';
import { connect } from 'react-redux';
import { MainPage } from '../../pages/main-page/main-page';
import { changeSearchFilterAction } from '../actions/filter.actions';
import { changeSortAction } from '../actions/sort.actions';

export const MainPageContainer = (props) => {
  return <MainPage {...props} />
};

const mapStateToProps = ({sort, search, films}, routerProps) => {
  const { sortOptionsList, selectedSortOptionId } = sort;
  const { searchOptionsList, selectedFilterOptionId } = search;
  const { foundFilmsList } = films;

  return {
    sortOptionsList,
    selectedSortOptionId,
    searchOptionsList,
    selectedFilterOptionId,
    foundFilmsList,
    searchQuery: {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilms: (options) => dispatch(fetchFilmsAction(options)),
    setInitialState: ({ selectedSortOptionId, selectedFilterOptionId }) => {
      dispatch(changeSortAction(selectedSortOptionId));
      dispatch(changeSearchFilterAction(selectedFilterOptionId));
    }
  };
};

const routerPropsToQuery = (props) => {
  const params = new URLSearchParams(props.location.search) || [];
  let searchQuery = {};
  params.forEach((param, key) => searchQuery[key] = param);
  return searchQuery;
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
