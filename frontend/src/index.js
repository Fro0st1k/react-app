import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';

import { MainPage } from './app/pages/main-page';
import { FilmPage } from './app/pages/film-page';
import { Footer } from './app/components/footer/footer';
import { NotFoundPage } from './app/pages/not-found-page/not-found-page';

const App = () => {
  return (
    <>
      <Router >
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/film/:id" render={(props) => <FilmPage {...props} />}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
      <Footer/>
    </>
  )
};

ReactDOM.render(<App/>, document.querySelector('.app'));
