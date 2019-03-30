import { shallow } from 'enzyme';
import React from 'react';

import { NotFoundPage } from './not-found-page';

describe('NotFoundPage', () => {
  it('should render correctly NotFoundPage', () => {
    const component = shallow(<NotFoundPage/>);
    expect(component).toMatchSnapshot();
  });
});
