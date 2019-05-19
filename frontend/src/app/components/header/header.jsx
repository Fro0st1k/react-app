import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';
import headerBg from '../../../assets/placeholders/header.jpg';

const StyledHeader = styled.div`
  background-image: url(${headerBg});
  background-size: cover;
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .header-title {
    position: relative;
    color: ${props => props.theme.fontColors.contrastFontColor};
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px;
  }
`;

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
