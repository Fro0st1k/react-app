import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

const StyledSubHeader = styled.div`
  height: 40px;
  background-color: #f2f2f2;

  .info {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    position: relative;
  }
`;

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
