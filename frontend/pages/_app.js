import '../src/styles/styles.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../src/app/store/store-config';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { Footer } from '../src/app/components/footer/footer';
import withRedux from 'next-redux-wrapper';

class FilmApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <div className="app">
          <Head>
            <title>Movie app</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic" rel="stylesheet"/>
          </Head>
          <Provider store={store}>
            <Component {...pageProps} />
            <Footer/>
          </Provider>
        </div>
      </Container>
    );
  }
}

export default withRedux(makeStore)(FilmApp);

