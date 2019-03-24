import React from 'react';
import { Header } from '../components/header/header';
import { SubHeader } from '../components/sub-header/sub-header';
import { BodyContent } from '../components/body-content/body-content';
import { SearchResults } from '../components/search-results/search-results';
import { SearchField } from '../components/search-form/search-field/search-field';
import { SearchOptions } from '../components/search-form/search-options/search-options';
import { SearchForm } from '../components/search-form/search-form';
import { ErrorBoundary } from '../components/error-bounadary/error-boundary';
import Axios from 'axios';
import { SortOptions } from '../components/sort-options/sort-options';

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
      foundFilmList: [],
      sortedBy: '',
      searchBy: ''
    };

    this.inputValueChange = this.inputValueChange.bind(this);
    this.searchFilm = this.searchFilm.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.changeSearchBy = this.changeSearchBy.bind(this);
  }

  searchFilm(event) {
    if (this.state.searchInputValue.length < 2) return;
    event.preventDefault();
    this.getFilms();
  }

  inputValueChange(event) {
    this.state.searchInputValue = event.target.value;
  }

  getOptionsForRequest() {
    return {
      searchBy: this.state.searchBy,
      searchText: this.state.searchInputValue
    }
  }

  getFilms() {
    const options = this.getOptionsForRequest();
    Axios
      .get('http://react-cdp-api.herokuapp.com/movies', {
        params: {
          search: options.searchText.toLowerCase().trim(),
          searchBy: options.searchBy,
          limit: 32
        }
      })
      .then(response => {
        this.setState({ foundFilmList: response.data.data });
      })
      .catch((err) => { console.log('Error: ', err) });
  }

  changeSort(sortBy) {
    this.setState({sortedBy: sortBy});
  }

  changeSearchBy(searchBy) {
    this.setState({searchBy: searchBy});
  }

  render() {
    return (
      <ErrorBoundary>
        <Header>
          <SearchForm title='find your movie' sendForm={this.searchFilm}>
            <SearchField onChange={this.inputValueChange}/>
            <SearchOptions changeSearchBy={this.changeSearchBy}/>
          </SearchForm>
        </Header>
        <SubHeader numberFoundFilms={this.state.foundFilmList.length}>
          <SortOptions changeSort={this.changeSort}/>
        </SubHeader>
        <BodyContent>
          <SearchResults filmList={this.state.foundFilmList} sortedBy={this.state.sortedBy}/>
        </BodyContent>
      </ErrorBoundary>
    )
  }
}

