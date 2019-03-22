import React from 'react';
import { SubHeader } from "../components/sub-header/sub-header";
import { BodyContent } from "../components/body-content/body-content";
import { SearchResults } from "../components/search-results/search-results";
import { FilmOverview } from "../components/film-overview/film-overview";
import { Footer } from "../components/footer/footer";
import Axios from "axios";

export class FilmPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfo: {},
      filmSameGenre: []
    };
  }

  componentDidMount() {
    this.getFilm(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getFilm(this.props.match.params.id);
    }
  }

  getFilm(filmId) {
    Axios.get(`http://react-cdp-api.herokuapp.com/movies/${filmId}`)
      .then(response => this.setState(state => state.filmInfo = response.data));
    this.getFilmsTheSameCategory();
  }

  getFilmsTheSameCategory() {
    Axios.get(`http://react-cdp-api.herokuapp.com/movies?filte=Animation&filte=Family`)
      .then(res => console.log(res.data))
  }

  render() {
    return (
      <>
        <FilmOverview filmInfo={this.state.filmInfo}/>
        <SubHeader/>
        <BodyContent>
          <SearchResults/>
        </BodyContent>
        <Footer/>
      </>
    )
  }
}

