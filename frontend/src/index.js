import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import { Header } from './app/components/header/header';

// will be del after task1
const TestComponent = React.createElement('div',null, 'qwerty');

const App = () => {
  return (
    <>
      <Header/>
      {TestComponent}
    </>
  )
};

ReactDOM.render(<App/>, document.querySelector('.app'));
