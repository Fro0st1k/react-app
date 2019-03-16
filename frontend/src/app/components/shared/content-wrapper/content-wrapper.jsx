import React from 'react';
import './content-wrapper.scss';
import classNames from 'classnames';

export const ContentWrapper = (props) => {
  const calcClassName = classNames(
      'content-wrapper', {
      [`content-wrapper--${props.direction}`]: props.direction
    });

  return (
    <div className={calcClassName}>
      {props.children}
    </div>
  )
};
