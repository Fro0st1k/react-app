import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../styles/styles.scss';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import MainPageContainer from '../store/containers/main-page-container';
import FilmPageContainer from '../store/containers/film-page-container';
import { Footer } from '../components/footer/footer';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import rootReducer from '../store/reducers/root.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPageContainer}/>
            <Route exact path="/film/:id" render={(props) => <FilmPageContainer {...props} />}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
        <Footer/>
      </Provider>
    </>
  )
};
