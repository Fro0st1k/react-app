import { shallow } from 'enzyme';
import jest from 'jest-mock';
import React from 'react';

import { Button } from './button';

describe('ButtonComponent', () => {
  it('should call click on ButtonComponent', () => {
    const onClick = jest.fn();
    const buttonComponent = shallow(<Button onClick={onClick}/>);
    const buttonEl = buttonComponent.find('.default-btn');
    buttonEl.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it('should render correctly ButtonComponent', () => {
    const props = {
      children: 'Button title'
    };
    const component = shallow(<Button {...props}/>);
    expect(component).toMatchSnapshot();
  });
});
