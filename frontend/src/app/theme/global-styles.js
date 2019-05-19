import { createGlobalStyle } from 'styled-components';
import { RESET } from './libs/reset';

export const GlobalStyles = createGlobalStyle`
  ${RESET}

  .app {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto 60px auto;
    font-family: 'Roboto', sans-serif;
  }
  
  .shading {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: -1;
  }
`;
