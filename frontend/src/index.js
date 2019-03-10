import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import { Header } from './app/components/header/header';

const App = () => {
  return (
    <Header/>
  )
};

ReactDOM.render(<App/>, document.querySelector('.app'));
