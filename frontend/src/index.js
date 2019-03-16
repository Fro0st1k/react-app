import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import { MainPage } from "./app/pages/main-page";

const App = () => {
  return (
    <MainPage/>
  )
};

ReactDOM.render(<App/>, document.querySelector('.app'));
