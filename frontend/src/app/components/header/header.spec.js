import { shallow } from 'enzyme';
import React from 'react';

import { Header } from './header';

let component = shallow(<Header/>);

describe('HeaderComponent', () => {
  it('should render correctly HeaderComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
