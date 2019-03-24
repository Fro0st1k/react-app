import React from 'react';
import './sub-header.scss';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

export const SubHeader = ({ numberFoundFilms, filmGenre, ...props }) => {
  return (
    <div className="sub-header">
      <ContentWrapper>
        <div className="sub-header__content">
          {numberFoundFilms ? <div className="sub-header__info">{numberFoundFilms} movies found</div> : ''}
          {filmGenre ? <div className="sub-header__info">Films by {filmGenre} genre</div> : ''}
          {props.children}
        </div>
      </ContentWrapper>
    </div>
  )
};
