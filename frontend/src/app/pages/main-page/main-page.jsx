import React from 'react';
import { Header } from '../../components/header/header';
import { SubHeader } from '../../components/sub-header/sub-header';
import { BodyContent } from '../../components/body-content/body-content';
import { SearchResults } from '../../components/search-results/search-results';
import { SearchField } from '../../components/search-form/search-field/search-field';
import { SearchForm } from '../../components/search-form/search-form';
import { ErrorBoundary } from '../../components/error-bounadary/error-boundary';
import SortOptionsContainer from '../../store/containers/sort-options-container';
import SearchOptionsContainer from '../../store/containers/search-options-container';

export class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: ''
    };

    this.inputValueChange = this.inputValueChange.bind(this);
    this.searchFilm = this.searchFilm.bind(this);
    this.searchQuery = this.props.searchQuery;
    this.isSearchQuery = !!Object.keys(this.searchQuery).length;
  }

  componentDidMount() {
    this.initPage();
  }

  initPage() {
    if (this.isSearchQuery) {
      const { searchOptionsList, sortOptionsList } = this.props;
      const { searchBy, sortOrder } = this.searchQuery;

      this.props.setInitialState({
        selectedSortOptionId: sortOptionsList.indexOf(sortOrder),
        selectedFilterOptionId: searchOptionsList.indexOf(searchBy)
      });
      this.fetchFilmData(this.searchQuery);
    }
  }

  searchFilm(event) {
    event.preventDefault();
    if (this.state.searchInputValue.length < 2) return;
    const params = {
      search: this.state.searchInputValue.toLowerCase().trim(),
      searchBy: this.props.searchOptionsList[this.props.selectedFilterOptionId],
      sortOrder: this.props.sortOptionsList[this.props.selectedSortOptionId]
    };
    this.fetchFilmData(params);
    this.props.history.push(`/search/result?sortOrder=${params.sortOrder}&search=${params.search}&searchBy=${params.searchBy}`);
  }

  fetchFilmData(params) {
    this.props.getFilms({
      url: 'movies',
      params: {
        search: params.search,
        searchBy: params.searchBy
      }
    });
  }

  inputValueChange({ target: { value } }) {
    this.setState({ searchInputValue: value });
  }

  render() {
    const { foundFilmsList } = this.props;
    return (
      <ErrorBoundary>
        <Header>
          <SearchForm title="find your movie" sendForm={this.searchFilm}>
            <SearchField onChange={this.inputValueChange} />
            <SearchOptionsContainer />
          </SearchForm>
        </Header>
        <SubHeader numberFoundFilms={foundFilmsList.length}>
          <SortOptionsContainer />
        </SubHeader>
        <BodyContent>
          <SearchResults filmList={foundFilmsList} />
        </BodyContent>
      </ErrorBoundary>
    );
  }
}
