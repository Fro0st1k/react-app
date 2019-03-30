import { mount } from 'enzyme/build';
import React from 'react';

import { App } from './app';

describe('App', () => {
  it('should render correctly App', () => {
    const component = mount(<App/>);
    expect(component).toMatchSnapshot();
  });
});
