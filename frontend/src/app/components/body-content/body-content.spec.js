import { shallow } from 'enzyme';
import React from 'react';

import { BodyContent } from './body-content';

describe('BodyContentComponent', () => {
  it('should render correctly BodyContentComponent', () => {
    const component = shallow(<BodyContent/>);
    expect(component).toMatchSnapshot();
  });
});
