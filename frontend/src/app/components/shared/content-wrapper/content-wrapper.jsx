import React from 'react';
import { StyledContentWrapper } from './conten-wrapper.styled';

export const ContentWrapper = (props) => {
  const { direction, children } = props;
  return (
    <StyledContentWrapper direction={direction}>
      {children}
    </StyledContentWrapper>
  );
};
