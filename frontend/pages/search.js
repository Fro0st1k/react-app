import React from 'react';
import { withRouter } from 'next/router';
import MainPageContainer from '../src/app/store/containers/main-page-container';

const RenderedMainPageWithSearch = withRouter(props => {
  return <MainPageContainer {...props}/>
  }
);

export default RenderedMainPageWithSearch;

