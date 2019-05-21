import styled from 'styled-components';

export const StyledSearchFormOptions = styled.form`
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.fontColors.mainFontColor};

  .title {
    font-size: 18px;
    margin: 0 auto 30px auto;
    text-transform: uppercase;
  }
`;
