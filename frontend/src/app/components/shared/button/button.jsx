import React from 'react';
import './button.scss';

export const Button = ({ onClick, ...props }) => {
  const { children } = props;
  return (
    <button onClick={onClick} className="default-btn" type="button">
      {children}
    </button>
  );
};
