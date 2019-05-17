import React from 'react';
import { connect } from 'react-redux';
import { changeSortAction } from '../actions/sort.actions';
import { SortOptions } from '../../components/sort-options/sort-options';

export const SortOptionsContainer = props => <SortOptions {...props} />;

const mapStateToProps = (state) => {
  const { sortOptionsList, selectedSortOptionId } = state.sort;
  return { sortOptionsList, selectedSortOptionId };
};

const mapDispatchToProps = dispatch => ({
  changeSort: id => dispatch(changeSortAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortOptionsContainer);
