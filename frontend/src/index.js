import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, createBrowserHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import './styles/styles.scss';

import { MainPage } from "./app/pages/main-page";
import { FilmPage } from "./app/pages/film-page";
import { Footer } from "./app/components/footer/footer";

// export const history = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router >
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/movies/:id" render={(props) => <FilmPage {...props} />}/>
        </Switch>
      </Router>
      <Footer/>
    </>
  )
};

ReactDOM.render(<App/>, document.querySelector('.app'));
