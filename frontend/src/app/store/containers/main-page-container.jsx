import React from 'react';
import { connect } from 'react-redux';
import { MainPage } from '../../pages/main-page/main-page';
import { changeSearchFilterAction } from '../actions/filter.actions';
import { changeSortAction } from '../actions/sort.actions';

export const MainPageContainer = (props) => {
  return <MainPage {...props} />
};

const mapStateToProps = ({ sort, search, films }, query) => {
  const { sortOptionsList, selectedSortOptionId } = sort;
  const { searchOptionsList, selectedFilterOptionId } = search;
  const { foundFilmsList } = films;

  return {
    sortOptionsList,
    selectedSortOptionId,
    searchOptionsList,
    selectedFilterOptionId,
    foundFilmsList,
    searchQuery: query
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialState: ({ selectedSortOptionId, selectedFilterOptionId }) => {
      dispatch(changeSortAction(selectedSortOptionId));
      dispatch(changeSearchFilterAction(selectedFilterOptionId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
