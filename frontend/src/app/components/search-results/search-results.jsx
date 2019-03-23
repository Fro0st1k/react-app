import React from 'react';
import './search-results.scss';

import { FilmPreview } from '../film-preview/film-preview';

export const SearchResults = ({ filmList }) => {
  return !filmList.length
    ? <div className="body-content__empty">No Film Found</div>
    : (
      <div className="search-results">
        {
          filmList.map(filmInfo => {
            return <FilmPreview key={filmInfo.id} filmInfo={filmInfo}/>
          })
        }
      </div>
    )
};

