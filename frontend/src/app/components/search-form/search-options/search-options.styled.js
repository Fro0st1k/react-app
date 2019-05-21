import styled from 'styled-components';

export const StyledSearchFormOptions = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: 20px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;

  .options-title {
    margin-right: 10px;
    color: ${props => props.theme.fontColors.mainFontColor};
  }

  .options-list {
    display: flex;
  }

  .options-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.blockColors.btnDisable};
    color: ${props => props.theme.fontColors.mainFontColor};
    height: 22px;
    padding: 0 20px;
    border-radius: 2px;
    margin-right: 10px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: ${props => props.theme.blockColors.mainContrastColor};
    }

    &--active {
      background-color: ${props => props.theme.blockColors.mainContrastColor};

      &:hover {
        background-color: ${props => props.theme.blockColors.mainContrastColorHover};
      }
    }
  }
`;
