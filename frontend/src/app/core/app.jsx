import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../styles/styles.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store-config';

import MainPageContainer from '../store/containers/main-page-container';
import FilmPageContainer from '../store/containers/film-page-container';
import { Footer } from '../components/footer/footer';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={MainPageContainer}/>
              <Route path="/search" render={(props) => <MainPageContainer {...props} />} />
              <Route path="/film/:id" render={(props) => <FilmPageContainer {...props} />} />
              <Route component={NotFoundPage}/>
            </Switch>
          </Router>
          <Footer/>
        </PersistGate>
      </Provider>
    </>
  )
};
