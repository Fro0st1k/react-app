import React from 'react';
import './search-results.scss';
import Axios from 'axios';

import { FilmPreview } from '../film-preview/film-preview';

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmList: []
    };

    this.cancelToken = Axios.CancelToken.source();
  }

  componentDidMount() {
    this.getFilms();
  }

  componentWillUnmount() {
    this.cancelToken.cancel();
  }

  getFilms() {
    Axios.get('http://react-cdp-api.herokuapp.com/movies?limit=32', {cancelToken: this.cancelToken.token})
      .then(response => this.setState({ filmList: response.data.data }))
      .catch((err) => { console.log('Error: ', err) });
  }

  render() {
    if (!this.state.filmList.length) {
      return <div className='body-content__empty'>No Film Found</div>
    } else {
      return (
        <div className='search-results'>
          {this.state.filmList.map(filmInfo => {
            return <FilmPreview key={filmInfo.id} filmInfo={filmInfo}/>
          })}
        </div>
      )
    }
  }
}

