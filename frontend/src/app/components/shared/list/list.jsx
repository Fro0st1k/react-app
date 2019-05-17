import React from 'react';
import { ListItem } from '../list-item/list-item';

export const List = ({
  itemList,
  listClassName,
  itemClassName,
  selectedItemId,
  selectItem
}) => (
  <ul className={listClassName}>
    {itemList.map((itemName, index) => (
      <ListItem
        /* eslint-disable-next-line react/no-array-index-key */
        key={`IId_${index}`}
        isActive={selectedItemId === index}
        itemName={itemName}
        selectedItemId={index}
        onClick={selectItem}
        className={itemClassName}
      />
    ))}
  </ul>
);
