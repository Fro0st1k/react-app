import React from 'react';
import { List } from '../../shared/list/list';
import { StyledSearchFormOptions } from './search-options.styled';

export const SearchOptions = ({ searchOptionsList, selectedFilterOptionId, changeFilter }) => {
  const selectFilter = (selectOptionId) => {
    changeFilter(selectOptionId);
  };

  return (
    <StyledSearchFormOptions className="search-options">
      <span className="options-title">search by</span>
      <List
        itemList={searchOptionsList}
        listClassName="options-list"
        itemClassName="options-list-item"
        selectedItemId={selectedFilterOptionId}
        selectItem={selectFilter}
      />
    </StyledSearchFormOptions>
  );
};
