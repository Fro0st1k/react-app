import '../src/styles/styles.scss';
import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { Footer } from '../src/app/components/footer/footer';

import withReduxStore from '../redux-to-next/redux-to-next';

class FilmApp extends App {

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <div className="app">
          <Head>
            <title>Movie app</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic" rel="stylesheet"/>
          </Head>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
            <Footer/>
          </Provider>
        </div>
      </Container>
    );
  }
}

export default withReduxStore(FilmApp);

