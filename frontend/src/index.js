import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import { MainPage } from "./app/pages/main-page";
import {FilmPage} from "./app/pages/film-page";

const App = () => {
  return (
    <>
      <MainPage/>
      <FilmPage/>
    </>
  )
};

ReactDOM.render(<App/>, document.querySelector('.app'));
