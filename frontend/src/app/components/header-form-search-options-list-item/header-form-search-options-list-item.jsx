import React from 'react';

export const HeaderFormSearchOptionsListItem = ({optionName, isActive, selectOption}) => {
  return (
    isActive
      ? <li onClick={(e) => selectOption(optionName, e)} className='header-form-search__options-list-item header-form-search__options-list-item--active'>{optionName}</li>
      : <li onClick={(e) => selectOption(optionName, e)} className='header-form-search__options-list-item'>{optionName}</li>
  )
};

