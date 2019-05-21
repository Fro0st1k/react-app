import React from 'react';
import classNames from 'classnames';

export const ListItem = ({
  isActive,
  itemName,
  selectedItemId,
  onClick,
  className
}) => {
  const calcClassName = classNames(
    className, { [`${className}--active`]: isActive }
  );

  return (
    <li onKeyPress={() => {}} onClick={() => onClick(selectedItemId)} className={calcClassName}>
      {itemName}
    </li>
  );
};
