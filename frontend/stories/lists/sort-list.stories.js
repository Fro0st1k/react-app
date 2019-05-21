import React from 'react';
import { storiesOf } from '@storybook/react';
import { SortOptions } from '../../src/app/components/sort-options/sort-options';

const sortListProps = {
  sortOptionsList: ['First', 'Second', 'Last'],
  selectedSortOptionId: 1,
  changeSort: () => {}
};

const sortListAreaStyles = {
  position: 'absolute',
  width: '100%',
  height: '100vh',
  paddingLeft: '20px',
  background: '#f2f2f2'
};

const wrapper = {
  position: 'relative',
  width: '250px',
  top: '30px'
};

storiesOf('Lists', module)
  .add('Sort list', () => (
    <div style={sortListAreaStyles}>
      <div style={wrapper}>
        <SortOptions {...sortListProps} />
      </div>
    </div>
  ));
