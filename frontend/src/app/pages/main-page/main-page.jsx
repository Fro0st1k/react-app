import React from 'react';
import { Header } from '../../components/header/header';
import { SubHeader } from '../../components/sub-header/sub-header';
import { BodyContent } from '../../components/body-content/body-content';
import { SearchResults } from '../../components/search-results/search-results';
import { SearchField } from '../../components/search-form/search-field/search-field';
import SearchOptions from '../../components/search-form/search-options/search-options';
import { SearchForm } from '../../components/search-form/search-form';
import { ErrorBoundary } from '../../components/error-bounadary/error-boundary';
import SortOptions from '../../components/sort-options/sort-options';
import { connect } from 'react-redux';
import { fetchFilmsAction } from '../../actions/films.actions';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
    };

    this.inputValueChange = this.inputValueChange.bind(this);
    this.searchFilm = this.searchFilm.bind(this);
  }

  searchFilm(event) {
    event.preventDefault();
    if (this.state.searchInputValue.length < 2) return;
    this.props.getFilms(this.getOptionsForRequest('http://react-cdp-api.herokuapp.com/movies', 'GET'));
  }

  inputValueChange({target: { value }}) {
    this.setState(state => {
      state.searchInputValue = value;
    });
  }

  getOptionsForRequest(url, method) {
    const options = {
      searchBy: this.props.searchOptionsList[this.props.selectedFilterOptionId],
      searchText: this.state.searchInputValue
    };

    return {
      url: url,
      method: method,
      params: {
        search: options.searchText.toLowerCase().trim(),
        searchBy: options.searchBy,
        limit: 32
      }
    }
  }

  render() {
    const { sortOptionsList, selectedSortOptionId, foundFilmsList } = this.props;
    return (
      <ErrorBoundary>
        <Header>
          <SearchForm title='find your movie' sendForm={this.searchFilm}>
            <SearchField onChange={this.inputValueChange}/>
            <SearchOptions/>
          </SearchForm>
        </Header>
        <SubHeader numberFoundFilms={foundFilmsList.length}>
          <SortOptions/>
        </SubHeader>
        <BodyContent>
          <SearchResults filmList={foundFilmsList} sortedBy={sortOptionsList[selectedSortOptionId]}/>
        </BodyContent>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = ({sort, search, films}) => {
  const {
    sortOptionsList,
    selectedSortOptionId,
  } = sort;

  const {
    searchOptionsList,
    selectedFilterOptionId,
  } = search;

  const {
    foundFilmsList,
  } = films;

  return {
    sortOptionsList,
    selectedSortOptionId,
    searchOptionsList,
    selectedFilterOptionId,
    foundFilmsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilms: (options) => {dispatch(fetchFilmsAction(options))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
