import { shallow } from 'enzyme';
import React from 'react';
import { FilmPage } from './film-page';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const initialState = {};
let store;

const props = {
  match: {
    params : {
      id: 10
    }
  },
  location: {
    state: null
  },
  filmInfo: {
    genres: []
  },
  sortOptionsList: ['1', '2'],
  selectedSortOptionId: 0,
  filmsSameGenre: [],
  fetchFilmsTheSameCategory: jest.fn(),
  fetchFilm: jest.fn(),
  clearFilmList: jest.fn()
};

let component;

describe('FilmPage', () => {

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<FilmPage {...props} store={store}/>, { disableLifecycleMethods: true });
  });

  it('should componentDidUpdate call getDataForPage then props != prevProps ', (done) => {
    const instance = component.instance();
    const prevProps =  {
      match: {
        params : {
          id: 11
        }
      }
    };
    instance.getDataForPage = jest.fn();
    instance.componentDidUpdate(prevProps);
    expect(instance.getDataForPage).toHaveBeenCalledWith(props.match.params.id);
    done();
  });

  it('should componentDidUpdate ignore call getDataForPage then props == prevProps ', (done) => {
    const instance = component.instance();
    const prevProps =  {...props};
    instance.getDataForPage = jest.fn();
    instance.componentDidUpdate(prevProps);
    expect(instance.getDataForPage).not.toHaveBeenCalled();
    done();
  });

  it('should fire fetchFilmsTheSameCategory then call getFilmsTheSameCategory', () => {
    const instance = component.instance();
    instance.getFilmsTheSameCategory();
    expect(instance.props.fetchFilmsTheSameCategory).toHaveBeenCalled();
  });

  it('should fire fetchFilm then call getFilm', () => {
    const instance = component.instance();
    instance.getFilm();
    expect(instance.props.fetchFilm).toHaveBeenCalled();
  });

  it('should call getFilm and getFilmsTheSameCategory then componentDidMount', (done) => {
    const instance = component.instance();
    instance.getFilmsTheSameCategory = jest.fn();
    instance.getFilm = jest.fn();
    instance.componentDidMount();
    expect(instance.getFilm).toHaveBeenCalled();
    expect(instance.getFilmsTheSameCategory).toHaveBeenCalled();
    done();
  });

  it('should call getFilm and getFilmsTheSameCategory then getDataForPage is invoke', () => {
    const instance = component.instance();
    instance.getFilm = jest.fn();
    instance.getFilmsTheSameCategory = jest.fn();
    instance.getDataForPage();
    expect(instance.getFilm).toHaveBeenCalled();
    expect(instance.getFilmsTheSameCategory).toHaveBeenCalled();
  });

  it('should render correctly FilmPage', () => {
    expect(component).toMatchSnapshot();
  });
});
