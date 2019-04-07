import React from 'react';
import './sort-options.scss';
import { connect } from 'react-redux';
import { List } from '../shared/list/list';
import { changeSortAction } from '../../actions/sort.actions';

export const SortOptions = ({ sortOptionsList, selectedSortOptionId, changeSort }) => {
  const selectOption = (selectOptionId) => {
    changeSort(selectOptionId);
  };

  return (
    <div className="sort-options">
      <div className="sort-options__title">sort by</div>
      <List
        itemList={sortOptionsList}
        listClassName="sort-options__list"
        itemClassName="sort-options__item"
        selectedItemId={selectedSortOptionId}
        selectItem={selectOption}
      />
    </div>
  )
};

const mapStateToProps = (state) => {
  const { sortOptionsList, selectedSortOptionId } = state.sort;
  return { sortOptionsList, selectedSortOptionId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (id) => {dispatch(changeSortAction(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);
