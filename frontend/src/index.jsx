import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './app/core/app';
import { THEME_COLORS } from './app/theme/colors';
import { GlobalStyles } from './app/theme/global-styles';

ReactDOM.render(
  <ThemeProvider theme={THEME_COLORS}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>, document.querySelector('.app')
);
