import { shallow } from 'enzyme';
import React from 'react';

import { SearchForm } from './search-form';

let props = {
  children: null,
  title: 'Form title'
};

let component = shallow(<SearchForm {...props}/>);

describe('SearchFieldComponent', () => {
  it('should render correctly SearchFieldComponent', () => {
    expect(component.find('.search-form__title').text()).toEqual(props.title);
    expect(component).toMatchSnapshot();
  });
});
