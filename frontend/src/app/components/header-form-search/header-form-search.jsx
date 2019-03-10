import React from 'react';
import './header-form-search.scss';
import { HeaderFormSearchField } from '../header-form-search-field/header-form-search-field';
import { HeaderFormSearchOptions } from '../header-form-search-options/header-form-search-options';

export const HeaderFormSearch = ({searchOptions}) => {
  return (
    <div className='header-form-search'>
      <HeaderFormSearchField/>
      <HeaderFormSearchOptions searchOptions={searchOptions}/>
    </div>
  )
};
