import { shallow } from 'enzyme';
import React from 'react';
import jest from 'jest-mock';
import { ListItem } from './list-item';

const props = {
  isActive: true,
  itemName: 'Item name',
  selectedItemId: 0,
  onClick: jest.fn(),
  className: 'item',
};
let component;

describe('ListItemComponent', () => {
  beforeEach(() => {
    component = shallow(<ListItem {...props}/>);
  });

  it('should call click on ListItemComponent', () => {
    component.simulate('click');
    expect(props.onClick).toHaveBeenCalledWith(props.selectedItemId);
  });

  it('should render correctly ListItemComponent', () => {
    expect(component.is(`.${props.className}--active`)).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
