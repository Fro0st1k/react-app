import styled from 'styled-components';

export const StyledFooter = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: -10;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => props.theme.blockColors.mainGrayColor};

  .title {
    color: ${props => props.theme.fontColors.contrastFontColor};
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;
