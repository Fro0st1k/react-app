import React from 'react';
import { Button } from '../shared/button/button';
import { StyledSearchFormOptions } from './search-form.styled';

export const SearchForm = ({ title, sendForm, ...props }) => {
  const { children } = props;
  return (
    <StyledSearchFormOptions className="search-form">
      <div className="title">{title}</div>
      <div className="section">
        {children}
      </div>
      <Button onClick={sendForm}>search</Button>
    </StyledSearchFormOptions>
  );
};
