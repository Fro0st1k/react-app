import React from 'react';
import './header.scss';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div className="header">
      <div className="shading"/>
      <ContentWrapper direction="column">
        <Link to="/">
          <div className="header__title">Film library</div>
        </Link>
        {props.children}
      </ContentWrapper>
    </div>
  );
};
