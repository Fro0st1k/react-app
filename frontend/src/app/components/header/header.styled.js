import styled from 'styled-components';
import headerBg from '../../../assets/placeholders/header.jpg';

export const StyledHeader = styled.div`
  background-image: url(${headerBg});
  background-size: cover;
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .header-title {
    position: relative;
    color: ${props => props.theme.fontColors.contrastFontColor};
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px;
  }
`;
