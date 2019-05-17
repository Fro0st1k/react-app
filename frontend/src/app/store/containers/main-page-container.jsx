import React from 'react';
import { connect } from 'react-redux';
import { fetchFilmsAction } from '../actions/films.actions';
import { MainPage } from '../../pages/main-page/main-page';
import { changeSearchFilterAction } from '../actions/filter.actions';
import { changeSortAction } from '../actions/sort.actions';

export const MainPageContainer = props => <MainPage {...props} />;

const routerPropsToQuery = (props) => {
  const params = new URLSearchParams(props.location.search) || [];
  const searchQuery = {};
  // eslint-disable-next-line no-return-assign
  params.forEach((param, key) => searchQuery[key] = param);
  return searchQuery;
};

const mapStateToProps = ({ sort, search, films }, routerProps) => {
  const { sortOptionsList, selectedSortOptionId } = sort;
  const { searchOptionsList, selectedFilterOptionId } = search;
  const { foundFilmsList } = films;

  return {
    sortOptionsList,
    selectedSortOptionId,
    searchOptionsList,
    selectedFilterOptionId,
    foundFilmsList,
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
