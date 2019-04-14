import React from 'react';
import { SubHeader } from '../../components/sub-header/sub-header';
import { BodyContent } from '../../components/body-content/body-content';
import { SearchResults } from '../../components/search-results/search-results';
import { FilmOverview } from '../../components/film-overview/film-overview';
import { Header } from '../../components/header/header';
import { ErrorBoundary } from '../../components/error-bounadary/error-boundary';
import SortOptionsContainer from '../../store/containers/sort-options-container';

export class FilmPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getDataForPage();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getDataForPage(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clearFilmList();
  }

  getFilm() {
    this.props.fetchFilm({url: `movies/${this.props.match.params.id}`});
  }

  getFilmsTheSameCategory() {
    this.props.fetchFilmsTheSameCategory({
      url: 'movies',
      params: {
        searchBy: 'genres',
        search: this.props.location.state ? this.props.location.state.genre : this.props.filmInfo.genres[0]
      }
    });
  }

  getDataForPage() {
    this.getFilm();
    this.getFilmsTheSameCategory();
  }

  render() {
    const { sortOptionsList, selectedSortOptionId, filmInfo, filmsSameGenre, filmInfoIsLoading } = this.props;
    return (
      <ErrorBoundary>
        <Header>
          <FilmOverview filmInfo={filmInfo} isLoading={filmInfoIsLoading}/>
        </Header>
        <SubHeader filmGenre={filmInfo.genres[0]}>
          <SortOptionsContainer/>
        </SubHeader>
        <BodyContent>
          <SearchResults filmList={filmsSameGenre} sortedBy={sortOptionsList[selectedSortOptionId]}/>
        </BodyContent>
      </ErrorBoundary>
    )
  }
}
