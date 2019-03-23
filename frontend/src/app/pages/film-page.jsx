import React from 'react';
import { SubHeader } from '../components/sub-header/sub-header';
import { BodyContent } from '../components/body-content/body-content';
import { SearchResults } from '../components/search-results/search-results';
import { FilmOverview } from '../components/film-overview/film-overview';
import { Header } from '../components/header/header';

import Axios from 'axios';
import { ErrorBoundary } from '../components/error-bounadary/error-boundary';

export class FilmPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfo: {genres: []},
      filmSameGenre: []
    };
  }

  componentDidMount() {
    this.getFilm(this.props.match.params.id)
      .then(() => this.getFilmsTheSameCategory());
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getDataForPage(this.props.match.params.id);
    }
  }

  getFilm(filmId) {
    return Axios.get(`http://react-cdp-api.herokuapp.com/movies/${filmId}`)
      .then(response => this.setState(state => state.filmInfo = response.data));
  }

  getFilmsTheSameCategory() {
    Axios.get(`http://react-cdp-api.herokuapp.com/movies`, {
      params: {
        searchBy: 'genres',
        search: this.props.location.state ? this.props.location.state.genre : this.state.filmInfo.genres[0]
      }
    }).then(response => this.setState(state => state.filmSameGenre = response.data.data));
  }

  getDataForPage(filmId) {
    this.getFilm(filmId);
    this.getFilmsTheSameCategory();
  }

  render() {
    return (
      <ErrorBoundary>
        <Header>
          <FilmOverview filmInfo={this.state.filmInfo}/>
        </Header>
        <SubHeader filmGenre={this.state.filmInfo.genres[0]}/>
        <BodyContent>
          <SearchResults filmList={this.state.filmSameGenre}/>
        </BodyContent>
      </ErrorBoundary>
    )
  }
}
