import React from 'react';
import { connect } from 'react-redux';
import { fetchFilmsAction } from '../actions/films.actions';
import { MainPage } from '../../pages/main-page/main-page';
import { changeSearchFilterAction } from '../actions/filter.actions';
import { changeSortAction } from '../actions/sort.actions';
import { sortedFilms } from '../selections/sort-selection';

export const MainPageContainer = props => <MainPage {...props} />;

const routerPropsToQuery = (props) => {
  const params = new URLSearchParams(props.location.search) || [];
  const searchQuery = {};
  // eslint-disable-next-line no-return-assign
  params.forEach((param, key) => searchQuery[key] = param);
  return searchQuery;
};

const mapStateToProps = (state, routerProps) => {
  const { sortOptionsList, selectedSortOptionId } = state.sort;
  const { searchOptionsList, selectedFilterOptionId } = state.search;

  return {
    searchOptionsList,
    selectedFilterOptionId,
    sortOptionsList,
    selectedSortOptionId,
    foundFilmsList: sortedFilms(state),
    searchQuery: routerPropsToQuery(routerProps)
  };
};

const mapDispatchToProps = dispatch => ({
  getFilms: options => dispatch(fetchFilmsAction(options)),
  setInitialState: ({ selectedSortOptionId, selectedFilterOptionId }) => {
    dispatch(changeSortAction(selectedSortOptionId));
    dispatch(changeSearchFilterAction(selectedFilterOptionId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
