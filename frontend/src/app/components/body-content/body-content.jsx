import React from 'react';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';
import { StyledBodyContent } from './body-content.styled';

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
