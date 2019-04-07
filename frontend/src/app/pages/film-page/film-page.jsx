import React from 'react';
import { SubHeader } from '../../components/sub-header/sub-header';
import { BodyContent } from '../../components/body-content/body-content';
import { SearchResults } from '../../components/search-results/search-results';
import { FilmOverview } from '../../components/film-overview/film-overview';
import { Header } from '../../components/header/header';
import { ErrorBoundary } from '../../components/error-bounadary/error-boundary';
import SortOptions from '../../components/sort-options/sort-options';
import { connect } from 'react-redux';
import { fetchFilmAction } from '../../actions/current-film.actions';
import { fetchFilmsAction, resetFilmList } from '../../actions/films.actions';

class FilmPage extends React.Component {
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
    const { sortOptionsList, selectedSortOptionId, filmInfo, filmsSameGenre } = this.props;
    return (
      <ErrorBoundary>
        <Header>
          <FilmOverview filmInfo={filmInfo}/>
        </Header>
        <SubHeader filmGenre={filmInfo.genres[0]}>
          <SortOptions/>
        </SubHeader>
        <BodyContent>
          <SearchResults filmList={filmsSameGenre} sortedBy={sortOptionsList[selectedSortOptionId]}/>
        </BodyContent>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = ({sort, currentFilm, films}) => {
  const { sortOptionsList, selectedSortOptionId } = sort;
  const { filmInfo } = currentFilm;
  const { foundFilmsList } = films;

  return {
    filmInfo,
    sortOptionsList,
    selectedSortOptionId,
    filmsSameGenre: foundFilmsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilm: (options) => { dispatch(fetchFilmAction(options)) },
    fetchFilmsTheSameCategory: (options) => { dispatch(fetchFilmsAction(options)) },
    clearFilmList: () => { dispatch(resetFilmList()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
