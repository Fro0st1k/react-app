import React from 'react';
import { changeSortAction } from '../actions/sort.actions';
import { connect } from 'react-redux';
import { SortOptions } from '../../components/sort-options/sort-options';

export const SortOptionsContainer = (props) => {
  return <SortOptions {...props}/>
};

const mapStateToProps = (state) => {
  const { sortOptionsList, selectedSortOptionId } = state.sort;
  return { sortOptionsList, selectedSortOptionId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (id) => dispatch(changeSortAction(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptionsContainer);
