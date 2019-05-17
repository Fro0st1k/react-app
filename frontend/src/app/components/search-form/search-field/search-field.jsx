import React from 'react';

export const SearchField = ({ onChange }) => (
  <div className="search-form__field">
    <input className="search-form__input" type="text" onChange={event => onChange(event)} />
  </div>
);
