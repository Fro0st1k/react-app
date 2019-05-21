import React from 'react';
import { List } from '../shared/list/list';
import { StyledSortOptions } from './sort-options.styled';

export const SortOptions = ({ sortOptionsList, selectedSortOptionId, changeSort }) => {
  const selectOption = (selectOptionId) => {
    changeSort(selectOptionId);
  };

  return (
    <StyledSortOptions className="sort-options">
      <div className="title">sort by</div>
      <List
        itemList={sortOptionsList}
        listClassName="list"
        itemClassName="list-item"
        selectedItemId={selectedSortOptionId}
        selectItem={selectOption}
      />
    </StyledSortOptions>
  );
};
