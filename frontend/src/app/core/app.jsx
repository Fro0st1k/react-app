import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../styles/styles.scss';

import { MainPage } from '../pages/main-page/main-page';
import { FilmPage } from '../pages/film-page/film-page';
import { Footer } from '../components/footer/footer';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';

export const App = () => {
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
