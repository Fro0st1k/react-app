import React from 'react';
import './search-from.scss';

import { Button } from '../shared/button/button';

export const SearchForm = ({ title, sendForm, ...props }) => {
  const { children } = props;
  return (
    <form className="search-form">
      <div className="search-form__title">{title}</div>
      <div className="search-form__section">
        {children}
      </div>
      <Button onClick={sendForm}>search</Button>
    </form>
  );
};
