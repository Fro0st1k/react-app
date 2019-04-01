import { shallow } from 'enzyme';
import React from 'react';
import axios from "axios";

import { FilmPage } from './film-page';


jest.mock("axios");

const filmList = [
  {
    budget: 5000000,
    genres: ["Horror", "Thriller"],
    id: 10072,
    overview: "",
    poster_path: "",
    release_date: "1987-02-27",
    revenue: 44793222,
    runtime: 96,
    tagline: "",
    title: "",
    vote_average: 6.5,
    vote_count: 469,
  },
  {
    budget: 2000400,
    genres: ["Comedy"],
    id: 1004,
    overview: "",
    poster_path: "",
    release_date: "1997-02-27",
    revenue: 443222,
    runtime: 123,
    tagline: "",
    title: "",
    vote_average: 7,
    vote_count: 469,
  }
];

const filmInfo = {
  budget: 2000400,
  genres: ["Comedy"],
  id: 10,
  overview: "",
  poster_path: "",
  release_date: "1997-02-27",
  revenue: 443222,
  runtime: 123,
  tagline: "",
  title: "",
  vote_average: 7,
  vote_count: 469,
};

const props = {
  match: {
    params : {
      id: 10
    }
  },
  location: {
    state: null
  }
};
const filmId = 10;
let component;

describe('FilmPage', () => {

  beforeEach(() => {
    component = shallow(<FilmPage {...props}/>, { disableLifecycleMethods: true });
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

  it('should get films the same category', (done) => {
    axios.get.mockResolvedValue({data: {data: filmList}});
    const instance = component.instance();
    instance.getFilmsTheSameCategory().then( () => {
      expect(instance.state.filmSameGenre).toBe(filmList);
    });
    done();
  });

  it('should fetch films and set state.filmInfo then call getFilm', () => {
    axios.get.mockResolvedValue({data: filmInfo});
    const instance = component.instance();
    instance.getFilm(filmId).then(() => {
      expect(instance.state.filmInfo).toBe(filmInfo);
    });
  });

  it('should call getFilm and getFilmsTheSameCategory then componentDidMount', (done) => {
    const instance = component.instance();
    instance.getFilmsTheSameCategory = jest.fn();
    instance.getFilm = jest.fn().mockResolvedValue(instance.getFilmsTheSameCategory());
    instance.componentDidMount();
    expect(instance.getFilm).toHaveBeenCalled();
    expect(instance.getFilmsTheSameCategory).toHaveBeenCalled();
    done();
  });

  it('should call getFilm and getFilmsTheSameCategory then getDataForPage is invoke', () => {
    const instance = component.instance();
    instance.getFilm = jest.fn();
    instance.getFilmsTheSameCategory = jest.fn();
    instance.getDataForPage(filmId);
    expect(instance.getFilm).toHaveBeenCalledWith(filmId);
    expect(instance.getFilmsTheSameCategory).toHaveBeenCalled();
  });

  it('should change sort then call changeSort method', () => {
    const instance = component.instance();
    instance.changeSort('date');
    expect(instance.state.sortedBy).toEqual('date');
  });

  it('should render correctly FilmPage', () => {
    expect(component).toMatchSnapshot();
  });
});
