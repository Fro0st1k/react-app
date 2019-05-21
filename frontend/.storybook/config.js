import React from 'react';
import { configure } from '@storybook/react';
import { THEME_COLORS } from '../src/app/theme/colors';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/app/theme/global-styles";

addDecorator((story) => (
  <ThemeProvider theme={THEME_COLORS}>
    <>
      {story()}
      <GlobalStyles/>
    </>
  </ThemeProvider>
));
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
