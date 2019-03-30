import { render } from 'enzyme';
import React from 'react';

import { List } from './list';

const props = {
  itemList: ['1', '2'],
  listClassName: 'list',
  itemClassName: 'item',
  selectedItemId: 0,
  selectItem: null
};

describe('ListComponent', () => {
  it('should render correctly ListComponent', () => {
    const component = render(<List {...props}/>);
    expect(component.is('.list')).toBeTruthy();
    expect(component.children()).toHaveLength(props.itemList.length);
    expect(component).toMatchSnapshot();
  });
});
