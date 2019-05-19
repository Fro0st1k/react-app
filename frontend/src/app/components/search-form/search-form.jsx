import React from 'react';
import styled from 'styled-components';
import { Button } from '../shared/button/button';

const StyledSearchFormOptions = styled.form`
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.fontColors.mainFontColor};

  .title {
    font-size: 18px;
    margin: 0 auto 30px auto;
    text-transform: uppercase;
  }
`;

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
