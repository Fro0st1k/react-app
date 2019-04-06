import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../styles/styles.scss';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import MainPage from '../pages/main-page/main-page';
import FilmPage from '../pages/film-page/film-page';
import { Footer } from '../components/footer/footer';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import rootReducer from '../reducers/root.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/film/:id" render={(props) => <FilmPage {...props} />}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
        <Footer/>
      </Provider>
    </>
  )
};
