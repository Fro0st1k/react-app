import React from 'react';
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: inherit;
  flex-direction: ${props => (props.direction ? props.direction : 'unset')};
`;

export const ContentWrapper = (props) => {
  const { direction, children } = props;
  return (
    <StyledContentWrapper direction={direction}>
      {children}
    </StyledContentWrapper>
  );
};
