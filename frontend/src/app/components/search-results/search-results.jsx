import React from 'react';
import './search-results.scss';

import { FilmPreview } from '../film-preview/film-preview';
import { trimReleaseDate } from '../../helpers/trim-release-date';

export const SearchResults = ({filmList, sortedBy}) => {
  // to-do map in sort-options
  const sortOptions = {
    rating: 'vote_average',
    date: 'release_date'
  };

  function sortFilms() {
    if (!sortedBy) return filmList;
    const currentSortOpt = sortOptions[sortedBy];
    const needTrim = currentSortOpt === sortOptions.date;

    return filmList.sort((a, b) => {
      return needTrim
        ? trimReleaseDate(b[currentSortOpt]) - trimReleaseDate(a[currentSortOpt])
        : b[currentSortOpt] - a[currentSortOpt];
    });
  }

  return !filmList.length
    ? <div className="body-content__empty">No Film Found</div>
    : (
      <div className="search-results">
        {
          sortFilms().map(filmInfo => {
            return <FilmPreview key={filmInfo.id} filmInfo={filmInfo}/>
          })
        }
      </div>
    )
} ;

