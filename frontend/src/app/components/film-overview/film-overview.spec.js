import { shallow } from 'enzyme';
import React from 'react';
import jest from 'jest-mock';

import { FilmOverview } from './film-overview';
import * as trimReleaseDate from '../../helpers/trim-release-date';

let props = {
  filmInfo: {
    title: 'Film Title',
    poster_path: 'testUrl',
    release_date: '1984-11-24',
    id: 123,
    runtime: '100',
    overview: 'some overview',
    tagline: 'some tagline',
    vote_average: '7.3'
  }
};
const trimmedDate = '1984';
const trimReleaseDateMock =  jest.spyOn(trimReleaseDate, "trimReleaseDate");
let component = shallow(<FilmOverview {...props}/>);

describe('FilmOverviewComponent', () => {
  it('should render correctly FilmOverviewComponent input props', ()=> {
    const poster = component.find('.film-overview__poster');
    const title = component.find('.film-overview__title');
    const rating = component.find('.film-overview__rating');
    const tagline = component.find('.film-overview__tagline');
    const year = component.find('.film-overview__year');
    const duration = component.find('.film-overview__duration');
    const story = component.find('.film-overview__story');

    expect(title.text()).toEqual(props.filmInfo.title);
    expect(rating.text()).toEqual(props.filmInfo.vote_average);
    expect(tagline.text()).toEqual(props.filmInfo.tagline);
    expect(duration.text()).toEqual(`${props.filmInfo.runtime} min`);
    expect(story.text()).toEqual(props.filmInfo.overview);
    expect(poster.prop('src')).toEqual(props.filmInfo.poster_path);
    expect(trimReleaseDateMock).toHaveBeenCalledWith(props.filmInfo.release_date);
    expect(year.text()).toEqual(trimmedDate);
  });

  it('should render correctly FilmOverviewComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
