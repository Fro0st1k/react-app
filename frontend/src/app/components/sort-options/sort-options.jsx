import React from 'react';
import styled from 'styled-components';
import { List } from '../shared/list/list';

const StyledSortOptions = styled.div`
  display: flex;
  position: absolute;
  right: 0;

  .title {
    margin-right: 20px;
    user-select: none;
  }

  .list-item {
    cursor: pointer;
    margin-left: 10px;
    user-select: none;

    &:first-child {
      margin-left: 0;
    }

    &--active {
      color: ${props => props.theme.fontColors.contrastFontColor};
    }
  }

  .list-item,
  .title {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .list {
    display: flex;
  }
`;

export const SortOptions = ({ sortOptionsList, selectedSortOptionId, changeSort }) => {
  const selectOption = (selectOptionId) => {
    changeSort(selectOptionId);
  };

  return (
    <StyledSortOptions className="sort-options">
      <div className="title">sort by</div>
      <List
        itemList={sortOptionsList}
        listClassName="list"
        itemClassName="list-item"
        selectedItemId={selectedSortOptionId}
        selectItem={selectOption}
      />
    </StyledSortOptions>
  );
};
