import React from "react";
import * as currentFilmActions from '../../actions/current-film.actions';
import { initialFilmState, currentFilmReducer } from "./current-film.reducer";
import { httpService } from '../../../http/http.service';

httpService.fetchFilm = jest.fn();
let initialState;

describe("currentFilmReducer", () => {
  beforeEach(() => {
    initialState = initialFilmState;
  });

  it("should return initial state", () => {
    expect(currentFilmReducer()).toEqual(initialState);
  });

  it("should return default state if action is not passed ", () => {
    const newState = { qwerty: 123 };
    expect(currentFilmReducer(newState)).toEqual(newState);
  });

  it("should set error if error action fired", () => {
    const hasError = true;
    const newState = currentFilmReducer(initialState, currentFilmActions.filmHasError(hasError));
    expect(newState.hasError).toBeTruthy();
  });

  it("should set loading if loading action fired", () => {
    const isLoading = true;
    const newState = currentFilmReducer(initialState, currentFilmActions.filmIsLoading(isLoading));
    expect(newState.isLoading).toBeTruthy();
  });

  it("should set filmInfo if success action fired", () => {
    const filmInfo = { id: 1 };
    const newState = currentFilmReducer(initialState, currentFilmActions.filmFetchDataSuccess(filmInfo));
    expect(newState.filmInfo).toEqual(filmInfo);
  });

  it('should invoke fetchFilm', () => {
    const config = { url: '' };
    const dispatch = {};
    const fn = currentFilmActions.fetchFilmAction(config);
    fn(dispatch);
    expect(httpService.fetchFilm).toHaveBeenCalledWith(config, dispatch);
  });
});
