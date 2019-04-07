import { mount } from 'enzyme';
import jest from 'jest-mock';
import React from 'react';

import { SearchOptions } from './search-options';

const props = {
  changeFilter: jest.fn(),
  searchOptionsList: ['1', '2'],
  selectedFilterOptionId: 0
};

const component = mount(<SearchOptions {...props}/>);

describe('SearchOptionsComponent', () => {

  it('should call props.changeFilter after call selectFilter method', () => {
    component.find('li').first().simulate('click');
    expect(component.props().changeFilter).toHaveBeenCalled();
  });

  it('should render correctly SearchOptionsComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
