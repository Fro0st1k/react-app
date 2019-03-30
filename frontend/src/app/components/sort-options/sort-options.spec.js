import { mount } from 'enzyme';
import jest from 'jest-mock';
import React from 'react';

import { SortOptions } from './sort-options';

const props = {
  changeSort: jest.fn()
};

const component = mount(<SortOptions {...props}/>);

describe('SortOptionsComponent', () => {

  it('should select default options', () => {
    expect(component.state('selectedOptionId')).toBe(0);
  });

  it('should change state.selectedOptionId then call selectOption method', () => {
    component.instance().selectOption(1);
    expect(component.state('selectedOptionId')).toBe(1);
  });

  it('should call props.changeSort after call selectOption method', () => {
    const instance = component.instance();
    const selectedOptionId = 1;
    instance.selectOption(selectedOptionId);
    expect(props.changeSort).toHaveBeenCalledWith(instance.state.sortOptionsList[selectedOptionId]);
  });

  it('should render correctly SortOptionsComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
