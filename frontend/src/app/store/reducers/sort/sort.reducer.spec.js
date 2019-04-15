import React from "react";
import * as sortActions from '../../actions/sort.actions';
import { initialSortState, sortReducer } from "./sort.reducer";

let initialState;

describe("sortReducer", () => {
  beforeEach(() => {
    initialState = initialSortState;
  });

  it("should return initial state", () => {
    expect(sortReducer()).toEqual(initialState);
  });

  it("should return default state if action is not passed ", () => {
    const newState = { qwerty: 123 };
    expect(sortReducer(newState)).toEqual(newState);
  });

  it('should set sort state', () => {
    const searchOptionId = 1;
    const newState = sortReducer(initialState, sortActions.changeSortAction(searchOptionId));
    expect(newState.selectedSortOptionId).toEqual(searchOptionId);
  });
});
