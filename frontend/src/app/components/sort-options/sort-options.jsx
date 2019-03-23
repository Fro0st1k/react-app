import React from 'react';
import './sort-options.scss';

import { List } from '../shared/list/list';

export const SortOptions = ({sortOptionsList, selectedOptionId, selectOption}) => {
  return (
    <div className="sort-options">
      <div className="sort-options__title">sort by</div>
      <List itemList={sortOptionsList}
            listClassName="sort-options__list"
            itemClassName="sort-options__item"
            selectedItemId={selectedOptionId}
            selectItem={selectOption}
      />
    </div>
  )
};
