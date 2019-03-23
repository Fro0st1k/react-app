import React from 'react';
import './not-found-page.scss';

import { Header } from '../../components/header/header';
import { SubHeader } from '../../components/sub-header/sub-header';
import { BodyContent } from '../../components/body-content/body-content';
import { ErrorBoundary } from '../../components/error-bounadary/error-boundary';

export const NotFoundPage = () => {
  return (
    <ErrorBoundary>
      <Header/>
      <SubHeader/>
      <BodyContent>
        <div className="page-not-found">
          <div className="page-not-found__error-code">404</div>
          <div className="page-not-found__error-text">Page Not Found</div>
        </div>
      </BodyContent>
    </ErrorBoundary>
  )
};
