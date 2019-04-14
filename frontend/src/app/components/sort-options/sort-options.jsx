import React from 'react';
import './sort-options.scss';
import { List } from '../shared/list/list';

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
