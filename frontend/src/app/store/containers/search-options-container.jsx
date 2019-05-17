import React from 'react';
import { connect } from 'react-redux';
import { changeSearchFilterAction } from '../actions/filter.actions';
import { SearchOptions } from '../../components/search-form/search-options/search-options';

export const SearchOptionsContainer = props => <SearchOptions {...props} />;

const mapStateToProps = (state) => {
  const { searchOptionsList, selectedFilterOptionId } = state.search;
  return { searchOptionsList, selectedFilterOptionId };
};

const mapDispatchToProps = dispatch => ({
  changeFilter: id => dispatch(changeSearchFilterAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptionsContainer);
