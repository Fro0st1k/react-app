import React from 'react';
import { FilmPreview } from '../film-preview/film-preview';
import { SearchResultsEmpty, SearchResultsWithData } from './search-results.styled';

export const SearchResults = ({ filmList }) => (!filmList.length
  ? <SearchResultsEmpty>No Film Found</SearchResultsEmpty>
  : (
    <SearchResultsWithData>
      {
        filmList.map(filmInfo => <FilmPreview key={filmInfo.id} filmInfo={filmInfo} />)
      }
    </SearchResultsWithData>
  )
);
