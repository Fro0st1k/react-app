import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SearchField } from '../../src/app/components/search-form/search-field/search-field';

const searchOptionsProps = {
  searchOptionsList: ['First', 'Second'],
  selectedFilterOptionId: 1,
  changeFilter: () => {}
};

const areaStyles = {
  top: '20px',
  left: '20px',
  position: 'absolute',
  width: '100%',
  height: '100vh'
};

const wrapperStyles = {
  position: 'relative',
  width: '600px',
  height: '100vh'
};

storiesOf('Inputs', module)
  .add('Search input', () => (
    <div style={areaStyles}>
      <div style={wrapperStyles}>
        <SearchField onChange={action('changed')} {...searchOptionsProps} />
      </div>
    </div>
  ));
