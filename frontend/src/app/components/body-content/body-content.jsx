import React from 'react';
import './body-content.scss';

import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

export const BodyContent = (props) => {
  const { children } = props;
  return (
    <div className="body-content">
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </div>
  );
};
