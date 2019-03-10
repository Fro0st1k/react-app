import React from 'react';
import { HeaderFormSearchOptionsList } from '../header-form-search-options-list/header-form-search-option-list';

export const HeaderFormSearchOptions = ({searchOptions}) => {
  return (
    <div className='header-form-search__options'>
      <span className='header-form-search__options-title'>search by</span>
     <HeaderFormSearchOptionsList searchOptions={searchOptions}/>
    </div>
  )
};
