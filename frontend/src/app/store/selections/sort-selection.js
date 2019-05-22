import { createSelector } from 'reselect';
import { trimReleaseDate } from '../../helpers/trim-release-date';

const sortOptions = {
  rating: 'vote_average',
  date: 'release_date'
};

const getSortOptionList = state => state.sort.sortOptionsList;
const getCurrentSortOptionId = state => state.sort.selectedSortOptionId;
const getFilmsList = state => state.films.foundFilmsList;

function sortFilms(currentSortOption, filmList) {
  const sortBy = sortOptions[currentSortOption];
  const needTrim = sortBy === sortOptions.date;

  return [...filmList].sort((a, b) => (
    needTrim
      ? trimReleaseDate(b[sortBy]) - trimReleaseDate(a[sortBy])
      : b[sortBy] - a[sortBy]));
}

export const currentSortOption = createSelector(
  [getSortOptionList, getCurrentSortOptionId], (sortOptionList, selectedSortOptionId) => {
    return sortOptionList[selectedSortOptionId];
  }
);

export const sortedFilms = createSelector(
  [currentSortOption, getFilmsList], (selectedSortOption, filmList) => {
    return sortFilms(selectedSortOption, filmList);
  }
);
