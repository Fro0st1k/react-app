import React from 'react';
import { makeStore } from '../src/app/store/store-config';
import { fetchFilmAction } from '../src/app/store/actions/current-film.actions';

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

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }
      console.log('========');
      console.log(appProps);
      console.log('========');
      return {

        initialReduxState: reduxStore.getState(),
        ...appProps
      }
    }

    constructor (props) {
      super(props);


      this.reduxStore = getOrCreateStore(props.initialReduxState);
      this.tets();
      console.log('++++++++++');
      console.log(this.reduxStore.getState());
      console.log('++++++++++');
    }
    // async tets() {
    //   await this.reduxStore.dispatch(fetchFilmAction({url: `movies/${22}`}));
    // }
    render () {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
