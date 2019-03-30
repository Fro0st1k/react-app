import { ErrorBoundary } from './error-boundary';
import React from 'react';
import { shallow } from 'enzyme';

function ProblemChild() {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>;
}
const component = shallow(<ErrorBoundary><ProblemChild /></ErrorBoundary>);

describe('ErrorBoundaryComponent', () => {
  it('should catch errors with componentDidCatch', () => {
    expect(() => { component.dive().html(); }).toThrowError('Error thrown from problem child');
  });
});
