import { mount } from 'enzyme';
import jest from 'jest-mock';
import React from 'react';

import { SortOptions } from './sort-options';

const props = {
  sortOptionsList: ['1', '2'],
  selectedSortOptionId: 0,
  changeSort: jest.fn()
};

const component = mount(<SortOptions {...props}/>);

describe('SortOptionsComponent', () => {

  it('should call props.changeSort after call selectOption method', () => {
    component.find('li').first().simulate('click');
    expect(component.props().changeSort).toHaveBeenCalled();
  });

  it('should render correctly SortOptionsComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
