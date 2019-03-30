import { mount } from 'enzyme';
import jest from 'jest-mock';
import React from 'react';

import { SearchOptions } from './search-options';

const props = {
  changeSearchBy: jest.fn()
};

const component = mount(<SearchOptions {...props}/>);

describe('SearchOptionsComponent', () => {

  it('should select default options', () => {
    expect(component.state('selectedOptionId')).toBe(0);
  });

  it('should change state.selectedOptionId then call selectOption method', () => {
    const selectedOptionId = 1;
    component.instance().selectOption(selectedOptionId);
    expect(component.state('selectedOptionId')).toBe(selectedOptionId);
  });

  it('should call props.changeSearchBy after call selectOption method', () => {
    const instance = component.instance();
    const selectedOptionId = 1;
    instance.selectOption(selectedOptionId);
    expect(props.changeSearchBy).toHaveBeenCalledWith(instance.state.searchOptionsList[selectedOptionId]);
  });

  it('should render correctly SearchOptionsComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
