import React from 'react';
import './content-wrapper.scss';
import classNames from 'classnames';

export const ContentWrapper = (props) => {
  const { direction, children } = props;
  const calcClassName = classNames(
    'content-wrapper', { [`content-wrapper--${direction}`]: direction }
  );

  return (
    <div className={calcClassName}>
      {children}
    </div>
  );
};
