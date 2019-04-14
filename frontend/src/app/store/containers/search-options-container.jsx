import React from 'react';
import { changeSearchFilterAction } from '../actions/filter.actions';
import { connect } from 'react-redux';
import { SearchOptions } from '../../components/search-form/search-options/search-options';

export const SearchOptionsContainer = (props) => {
  return <SearchOptions {...props} />
};

const mapStateToProps = (state) => {
  const { searchOptionsList, selectedFilterOptionId } = state.search;
  return { searchOptionsList, selectedFilterOptionId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (id) => {dispatch(changeSearchFilterAction(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptionsContainer);
