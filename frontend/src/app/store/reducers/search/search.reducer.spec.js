import React from "react";
import * as filterActions from '../../actions/filter.actions';
import { initialSearchState, searchReducer } from "./search.reducer";

let initialState;

describe("searchReducer", () => {
  beforeEach(() => {
    initialState = initialSearchState;
  });

  it("should return initial state", () => {
    expect(searchReducer()).toEqual(initialState);
  });

  it("should return default state if action is not passed ", () => {
    const newState = { qwerty: 123 };
    expect(searchReducer(newState)).toEqual(newState);
  });

  it('should set search state', () => {
    const searchOptionId = 1;
    const newState = searchReducer(initialState, filterActions.changeSearchFilterAction(searchOptionId));
    expect(newState.selectedFilterOptionId).toEqual(searchOptionId);
  });
});
