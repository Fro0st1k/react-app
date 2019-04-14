import { combineReducers } from 'redux';
import { sortReducer } from './sort.reducer';
import { searchReducer } from './search.reducer';
import { filmsReducer } from './films.reducer';
import { currentFilmReducer } from './current-film.reducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  search: searchReducer,
  films: filmsReducer,
  currentFilm: currentFilmReducer
});

export default rootReducer;
