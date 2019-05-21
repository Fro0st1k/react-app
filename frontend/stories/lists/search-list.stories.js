import React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchOptions } from '../../src/app/components/search-form/search-options/search-options';

const searchOptionsProps = {
  searchOptionsList: ['First', 'Second'],
  selectedFilterOptionId: 1,
  changeFilter: () => {}
};

const searchOptionsAreaStyles = {
  position: 'absolute',
  background: '#999999',
  width: '100%',
  height: '100vh',
  paddingLeft: '20px'
};

storiesOf('Lists', module)
  .add('Search list', () => (
    <div style={searchOptionsAreaStyles}>
      <SearchOptions {...searchOptionsProps} />
    </div>
  ));
