import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import './styles/styles.scss';

import { MainPage } from "./app/pages/main-page";
import { FilmPage } from "./app/pages/film-page";

const App = () => {
  return (
   <Router>
     <Route exact path="/" component={MainPage}/>
     <Route path="/movies/:id" render={(props) => <FilmPage {...props}/>}/>
   </Router>
  )
};

ReactDOM.render(<App/>, document.querySelector('.app'));
