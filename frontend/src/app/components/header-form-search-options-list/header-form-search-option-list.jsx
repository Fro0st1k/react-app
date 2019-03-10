import React from 'react';
import {
  HeaderFormSearchOptionsListItem
} from '../header-form-search-options-list-item/header-form-search-options-list-item';

export const HeaderFormSearchOptionsList = ({searchOptions}) => {
  return (
    <ul className='header-form-search__options-list'>
      {searchOptions.list.map((option, index) => {
        return <HeaderFormSearchOptionsListItem
          key={'SOId_' + index}
          isActive={option.active}
          optionName={option.name}
          selectOption={searchOptions.selectOption}
        />
      })}
    </ul>
  )
};
