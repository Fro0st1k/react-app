import { shallow } from 'enzyme';
import React from 'react';
import { Footer } from './footer';

describe('FooterComponent', () => {
  it('should render correctly FooterComponent', () => {
    const component = shallow(<Footer/>);

    expect(component).toMatchSnapshot();
  });
});
