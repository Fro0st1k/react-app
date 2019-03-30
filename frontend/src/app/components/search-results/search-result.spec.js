import { shallow } from 'enzyme';
import React from 'react';
import jest from 'jest-mock';

import { SearchResults } from './search-results';
import * as trimReleaseDate from '../../helpers/trim-release-date';

let props;

const trimReleaseDateMock =  jest.spyOn(trimReleaseDate, 'trimReleaseDate');

describe('SearchResultsComponent', () => {
  beforeEach(() => {
    props = {
      filmList: [
        {
          release_date: '2017-12-14',
          vote_average: 7,
          id: 1
        },
        {
          release_date: '2016-12-14',
          vote_average: 8,
          id: 2
        }],
      sortedBy: 'rating'
    }
  });

  it('should return default filmList if !sortedBy', () => {
    props.sortedBy = '';
    const component = shallow(<SearchResults {...props}/>);
    expect(component.find('FilmPreview').first().props().filmInfo).toEqual(props.filmList[0]);
  });

  it('should sort by rating', () => {
    const component = shallow(<SearchResults {...props}/>);
    expect(component.find('FilmPreview').first().props().filmInfo.vote_average).toEqual(props.filmList[1].vote_average);
  });

  it('should sort by date', () => {
    props.sortedBy = 'date';
    const component = shallow(<SearchResults {...props}/>);
    expect(trimReleaseDateMock).toHaveBeenCalled();
    expect(component.find('FilmPreview').first().props().filmInfo.release_date).toEqual(props.filmList[0].release_date);
  });

  it('should render correctly SearchResultsComponent', () => {
    const component = shallow(<SearchResults {...props}/>);
    expect(component).toMatchSnapshot();
  });
  
  it('should render empty SearchResultsComponent', () => {
    props.filmList = [];
    const component = shallow(<SearchResults {...props}/>);
    expect(component).toMatchSnapshot();
  })
});
