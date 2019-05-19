import React from 'react';

import styled from 'styled-components';
import { FilmPreview } from '../film-preview/film-preview';
import { trimReleaseDate } from '../../helpers/trim-release-date';

const SearchResultsEmpty = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

const SearchResultsWithData = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 240px);
`;

export const SearchResults = ({ filmList, sortedBy }) => {
  const sortOptions = {
    rating: 'vote_average',
    date: 'release_date'
  };

  function sortFilms() {
    if (!sortedBy) return filmList;
    const currentSortOpt = sortOptions[sortedBy];
    const needTrim = currentSortOpt === sortOptions.date;

    return [...filmList].sort((a, b) => (
      needTrim
        ? trimReleaseDate(b[currentSortOpt]) - trimReleaseDate(a[currentSortOpt])
        : b[currentSortOpt] - a[currentSortOpt]));
  }

  return !filmList.length
    ? <SearchResultsEmpty>No Film Found</SearchResultsEmpty>
    : (
      <SearchResultsWithData>
        {
          sortFilms().map(filmInfo => <FilmPreview key={filmInfo.id} filmInfo={filmInfo} />)
        }
      </SearchResultsWithData>
    );
};
