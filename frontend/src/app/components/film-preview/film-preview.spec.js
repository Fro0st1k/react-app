import { shallow } from 'enzyme';
import React from 'react';
import jest from 'jest-mock';

import { FilmPreview } from './film-preview';
import * as trimReleaseDate from '../../helpers/trim-release-date';

let props = {
  filmInfo: {
    title: 'Film Title',
    poster_path: 'testUrl',
    release_date: '1984-11-24',
    genres: ['comedy', 'war'],
    id: 123
  }
};
const trimmedDate = '1984';
const trimReleaseDateMock =  jest.spyOn(trimReleaseDate, "trimReleaseDate");
let component = shallow(<FilmPreview {...props}/>);

describe('FilmPreviewComponent', () => {
  it('should render correctly FilmPreviewComponent input props', ()=> {
    const image = component.find('.film-preview__img');
    const title = component.find('.film-preview__description-title');
    const year = component.find('.film-preview__description-year');

    expect(title.text()).toEqual(props.filmInfo.title);
    expect(image.prop('src')).toEqual(props.filmInfo.poster_path);
    expect(trimReleaseDateMock).toHaveBeenCalledWith(props.filmInfo.release_date);
    expect(year.text()).toEqual(trimmedDate);
  });

  it('should render correctly FilmPreviewComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
