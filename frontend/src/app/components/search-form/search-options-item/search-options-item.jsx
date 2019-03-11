import React from 'react';
import classNames from 'classnames';

export const SearchOptionsItem = ({optionName, selectedOptionId, isActive, onClick}) => {

  const calcClassName = classNames(
    'search-form__options-list-item', {
    'search-form__options-list-item--active': isActive
  });

  return (
    <li onClick={() => onClick(selectedOptionId)} className={calcClassName}>{optionName}</li>
  )
};
