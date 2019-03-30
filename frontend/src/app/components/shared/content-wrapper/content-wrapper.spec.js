import { shallow } from 'enzyme';
import React from 'react';

import { ContentWrapper } from './content-wrapper';

describe('ContentWrapperComponent', () => {
  it('should render correctly ContentWrapperComponent', () => {
    const props = {
      direction: 'column'
    };
    const component = shallow(<ContentWrapper {...props}/>);

    expect(component.is('.content-wrapper--column')).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
