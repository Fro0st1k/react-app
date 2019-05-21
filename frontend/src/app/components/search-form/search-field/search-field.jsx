import React from 'react';
import { StyledSearchField } from './search-field.styled';

export const SearchField = ({ onChange }) => (
  <StyledSearchField className="search-field">
    <input className="input" type="text" onChange={event => onChange(event)} />
  </StyledSearchField>
);
