import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

export const Header = (props) => {
  const { children } = props;
  return (
    <div className="header">
      <div className="shading" />
      <ContentWrapper direction="column">
        <Link to="/">
          <div className="header__title">Film library</div>
        </Link>
        {children}
      </ContentWrapper>
    </div>
  );
};
