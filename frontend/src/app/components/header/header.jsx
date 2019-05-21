import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './header.styled';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

export const Header = (props) => {
  const { children } = props;
  return (
    <StyledHeader className="header">
      <div className="shading" />
      <ContentWrapper direction="column">
        <Link to="/">
          <div className="header-title">Film library</div>
        </Link>
        {children}
      </ContentWrapper>
    </StyledHeader>
  );
};
