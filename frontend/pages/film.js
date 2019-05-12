import React from 'react';
import FilmPageContainer from '../src/app/store/containers/film-page-container';

const RenderedFilmPage = props => {
  return <FilmPageContainer {...props}/>
  };

RenderedFilmPage.getInitialProps = async function(context) {
  const { filmId } = context.query;

  return {
    filmId
  }
};

export default RenderedFilmPage;
