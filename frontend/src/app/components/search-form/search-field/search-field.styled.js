import styled from 'styled-components';
import searchIcon from '../../../../assets/icons/search.png';

export const StyledSearchField = styled.div`
  position: relative;

  &:after {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;
    content: '';
    cursor: pointer;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% 50%;
  }

  .input {
    display: block;
    box-sizing: border-box;
    margin: 0 auto;
    height: 40px;
    width: 100%;
    padding:0 50px 0 10px;
    background-color: ${props => props.theme.blockColors.clearBlackColor};
    color: ${props => props.theme.fontColors.mainFontColor};
    border-bottom: 2px solid ${props => props.theme.blockColors.mainContrastColor};
  }
`;
