import React from 'react';
import './button.scss';

export const Button = ({onClick, ...props})=> {
  return (
    <button onClick={onClick} className="default-btn">
      {props.children}
    </button>
  )
};
