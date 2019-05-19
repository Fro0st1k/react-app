import React from 'react';

import styled from 'styled-components';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

const StyledBodyContent = styled.div`
  position: relative;
  padding: 20px 0;
  background-color: #fff;
  z-index: 10;
`;

export const BodyContent = (props) => {
  const { children } = props;
  return (
    <StyledBodyContent>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </StyledBodyContent>
  );
};
