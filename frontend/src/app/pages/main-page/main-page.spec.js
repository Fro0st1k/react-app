import { shallow } from 'enzyme';
import React from 'react';
import axios from "axios";

import { MainPage } from './main-page';


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
}];


describe('MainPage', () => {

  it('should ignore search if searchInputValue.length < 3', () => {
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    jest.spyOn(instance, 'getFilms');
    instance.searchFilm();
    expect(instance.getFilms).not.toHaveBeenCalled();
  });

  it('should search film then searchInputValue.length > 3', () => {
    const event = { preventDefault: () => {}};
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    component.setState({searchInputValue: 'qwe'});
    instance.getFilms = () => {};
    jest.spyOn(instance, 'getFilms');
    instance.searchFilm(event);
    expect(instance.getFilms).toHaveBeenCalled();
  });

  it('should fetch films and set state.foundFilmList', () => {
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    axios.get.mockResolvedValue({data: {data: filmList}});
    instance.getFilms().then(response => {
      expect(response).toEqual(filmList);
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('should handle error if get error then fetch film', () => {
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    axios.get.mockRejectedValue('error');
    instance.getFilms()
      .then(error => {
        expect(error).toEqual(`Error: ${error}`);
      })
      .catch(err => err);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('should change state.searchInputValue then call inputValueChange', () => {
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    const event = {target: {value: 123}, persist: () => {}};
    instance.inputValueChange(event);
    expect(instance.state.searchInputValue).toEqual(123);
  });

  it('should return options for request then call getOptionsForRequest method', () => {
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    const options = instance.getOptionsForRequest();
    expect(options.searchBy).toEqual(instance.state.searchBy);
    expect(options.searchText).toEqual(instance.state.searchInputValue);
  });

  it('should change sortBy then call changeSort method', () => {
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    instance.changeSort('rating');
    expect(instance.state.sortedBy).toEqual('rating');
  });

  it('should change searchBy then call changeSearchBy method', () => {
    const component = shallow(<MainPage/>);
    const instance = component.instance();
    instance.changeSearchBy('title');
    expect(instance.state.searchBy).toEqual('title');
  });

  it('should render correctly MainPage', () => {
    const component = shallow(<MainPage/>);
    expect(component).toMatchSnapshot();
  });
});
