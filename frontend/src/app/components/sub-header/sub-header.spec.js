import { shallow } from 'enzyme';
import React from 'react';

import { SubHeader } from './sub-header';

let props;
let component;

describe('ListComponent', () => {
  beforeEach(() => {
    props = {
      numberFoundFilms: 10,
      filmGenre: 'comedy',
      children: null
    };
  });

  it('should render film genre', () => {
    props.numberFoundFilms = null;
    component = shallow(<SubHeader {...props}/>);
    expect(component.find('.sub-header__info').text()).toEqual(`Films by ${props.filmGenre} genre`)
  });

  it('should render number of found films', () => {
    props.filmGenre = null;
    component = shallow(<SubHeader {...props}/>);
    expect(component.find('.sub-header__info').text()).toEqual(`${props.numberFoundFilms} movies found`)
  });

  it('should render correctly SubHeaderComponent', () => {
    component = shallow(<SubHeader {...props}/>);
    expect(component).toMatchSnapshot();
  });
});
