import React from 'react';
import { ListItem } from '../list-item/list-item';

export const List = ({itemList, listClassName, itemClassName, selectedItemId, selectItem}) => {
  return (
    <ul className={listClassName}>
      {itemList.map((itemName, index) => {
        return <ListItem
          key={'IId_' + index}
          isActive={selectedItemId === index}
          itemName={itemName}
          selectedItemId={index}
          onClick={selectItem}
          className={itemClassName}
        />
      })}
    </ul>
  )
};

