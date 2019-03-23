import React from 'react';
import { List } from '../../shared/list/list';

export const SearchOptions = ({searchOptionsList, selectedOptionId, selectOption}) => {
  return (
    <div className="search-form__options">
      <span className="search-form__options-title">search by</span>
      <List itemList={searchOptionsList}
            listClassName="search-form__options-list"
            itemClassName="search-form__options-list-item"
            selectedItemId={selectedOptionId}
            selectItem={selectOption}
      />
    </div>
  )
};
