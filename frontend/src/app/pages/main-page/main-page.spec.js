import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store'
import { MainPage } from './main-page';

const mockStore = configureStore();
const initialState = {};
let store;
let component;

const props = {
  getFilms: jest.fn(),
  sortOptionsList: [],
  selectedSortOptionId: 0,
  searchOptionsList: [],
  selectedFilterOptionId: 0,
  foundFilmsList: []
};

const event = {
  preventDefault: jest.fn()
};

describe('MainPage', () => {

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<MainPage {...props} store={store}/>);
  });

  it('should ignore search if searchInputValue.length < 3', () => {
    const instance = component.instance();
    instance.searchFilm(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(instance.props.getFilms).not.toHaveBeenCalled();
  });

  it('should search film then searchInputValue.length > 3', () => {
    const instance = component.instance();
    component.setState({searchInputValue: 'qwe'});
    instance.searchFilm(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(instance.props.getFilms).toHaveBeenCalled();
  });

  it('should change state.searchInputValue then call inputValueChange', () => {
    const instance = component.instance();
    const event = {target: {value: 123}};
    instance.inputValueChange(event);
    expect(instance.state.searchInputValue).toEqual(123);
  });

  it('should render correctly MainPage', () => {
    expect(component).toMatchSnapshot();
  });
});
