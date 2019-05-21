import styled from 'styled-components';

export const StyledSortOptions = styled.div`
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
