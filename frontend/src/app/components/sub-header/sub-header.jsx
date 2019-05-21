import React from 'react';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';
import { StyledSubHeader } from './sub-header.styled';

export const SubHeader = ({ numberFoundFilms, filmGenre, ...props }) => {
  const { children } = props;
  return (
    <StyledSubHeader className="sub-header">
      <ContentWrapper>
        <div className="content">
          {numberFoundFilms ? <div className="info">{`${numberFoundFilms} movies found`}</div> : null}
          {filmGenre ? <div className="info">{`Films by ${filmGenre} genre`}</div> : null}
          {children}
        </div>
      </ContentWrapper>
    </StyledSubHeader>
  );
};
