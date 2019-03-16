import React from 'react';
import './body-content.scss';

import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

export const BodyContent = (props) => {
  return (
    <div className='body-content'>
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
    </div>
  )
};
