import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../src/app/components/shared/button/button';
import { withKnobs, text } from '@storybook/addon-knobs';

const buttonAreaStyles = {
  width: '190px',
  position: 'relative',
  height: '50px'
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('With text', () => (
    <div style={buttonAreaStyles}>
      <Button onClick={action('clicked')}>{text('Label', 'Search')}</Button>
    </div>
  ))
  .add('Empty', () => (
    <div style={buttonAreaStyles}>
      <Button onClick={action('clicked')} />
    </div>
  ));
