import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: -10;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => props.theme.blockColors.mainGrayColor};

  .title {
    color: ${props => props.theme.fontColors.contrastFontColor};
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const Footer = () => (
  <StyledFooter className="footer">
    <div className="title">Film library © 2019</div>
  </StyledFooter>
);
