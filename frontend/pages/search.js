import React from 'react';
import MainPageContainer from '../src/app/store/containers/main-page-container';
import { fetchFilmsAction } from "../src/app/store/actions/films.actions";

const MainPageWithSearch = (props) => {
  return <MainPageContainer {...props}/>
};

MainPageWithSearch.getInitialProps = async function({ query, reduxStore }) {
  const { sortOrder, search, searchBy } = query;

  await reduxStore.dispatch(fetchFilmsAction({
    url:'movies',
    params: {
      search,
      searchBy
    }
  }));

  return {
    sortOrder,
    searchBy,
    searchValue: search
  };
};

export default MainPageWithSearch;

