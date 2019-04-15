import { combineReducers } from 'redux';
import { sortReducer } from './sort/sort.reducer';
import { searchReducer } from './search/search.reducer';
import { filmsReducer } from './films/films.reducer';
import { currentFilmReducer } from './current-film/current-film.reducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  search: searchReducer,
  films: filmsReducer,
  currentFilm: currentFilmReducer
});

export default rootReducer;
