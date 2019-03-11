import React from 'react';
import { SearchOptionsItem } from '../search-options-item/search-options-item';

export const SearchOptions = ({searchOptionsList, selectedOptionId, selectOption}) => {

  return (
    <div className='search-form__options'>
      <span className='search-form__options-title'>search by</span>
      <ul className='search-form__options-list'>
        {searchOptionsList.map((optionName, index) => {
          return <SearchOptionsItem
            key={'SOId_' + index}
            isActive={selectedOptionId === index}
            optionName={optionName}
            selectedOptionId={index}
            onClick={selectOption}
          />
        })}
      </ul>
    </div>
  )
};
