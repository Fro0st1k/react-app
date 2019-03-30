import { shallow } from 'enzyme';
import jest from 'jest-mock';
import React from 'react';

import { SearchField } from './search-field';

let props = {
  onChange: jest.fn()
};
let component = shallow(<SearchField {...props}/>);

describe('SearchFieldComponent', () => {
  it('should call onChange when typing', () => {
    const input = component.find('.search-form__input');
    input.simulate('change', {target: {value: 'War'}});
    expect(props.onChange).toHaveBeenCalled();
  });

  it('should render correctly SearchFieldComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
