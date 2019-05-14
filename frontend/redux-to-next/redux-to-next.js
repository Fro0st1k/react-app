import React from 'react';
import { makeStore } from '../src/app/store/store-config';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore (initialState) {

  if (isServer) {
    return makeStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = makeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__];
}

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps (appContext) {
      const reduxStore = getOrCreateStore();
      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        initialReduxState: reduxStore.getState(),
        ...appProps
      }
    }

    constructor (props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render () {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
