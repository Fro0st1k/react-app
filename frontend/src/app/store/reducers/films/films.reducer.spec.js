import React from "react";
import * as filmsActions from '../../actions/films.actions';
import { initialFilmsState, filmsReducer } from "./films.reducer";
import { httpService } from '../../../http/http.service';

httpService.fetchFilms = jest.fn();
let initialState;

describe("filmsReducer", () => {
  beforeEach(() => {
    initialState = initialFilmsState;
  });

  it("should return initial state", () => {
    expect(filmsReducer()).toEqual(initialState);
  });

  it("should return default state if action is not passed ", () => {
    const newState = { qwerty: 123 };
    expect(filmsReducer(newState)).toEqual(newState);
  });

  it("should set error if error action fired", () => {
    const hasError = true;
    const newState = filmsReducer(initialState, filmsActions.filmsHasError(hasError));
    expect(newState.hasError).toBeTruthy();
  });

  it("should set loading if loading action fired", () => {
    const isLoading = true;
    const newState = filmsReducer(initialState, filmsActions.filmsIsLoading(isLoading));
    expect(newState.isLoading).toBeTruthy();
  });

  it("should set filmInfo if success action fired", () => {
    const filmList = [{ id: 1 }];
    const newState = filmsReducer(initialState, filmsActions.filmsFetchDataSuccess(filmList));
    expect(newState.foundFilmsList).toEqual(filmList);
  });

  it('should invoke fetchFilms', () => {
    const config = { url: '' };
    const dispatch = {};
    const fn = filmsActions.fetchFilmsAction(config);
    fn(dispatch);
    expect(httpService.fetchFilms).toHaveBeenCalledWith(config, dispatch);
  });
});
