import React from 'react';
import { Header } from '../components/header/header';
import { SubHeader } from '../components/sub-header/sub-header';
import { BodyContent } from '../components/body-content/body-content';
import { SearchResults } from '../components/search-results/search-results';
import { SearchField } from '../components/search-form/search-field/search-field';
import { SearchOptions } from '../components/search-form/search-options/search-options';
import { SearchForm } from '../components/search-form/search-form';
import { ErrorBoundary } from '../components/error-bounadary/error-boundary';
import { trimReleaseDate } from '../helpers/trim-release-date';
import Axios from 'axios';

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
      searchOptionsList: ['title', 'genres'],
      selectedOptionId: 0,
      foundFilmList: [],
      sortedBy: ''
    };

    this.inputValueChange = this.inputValueChange.bind(this);
    this.searchFilm = this.searchFilm.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  selectOption(selectOptionId) {
    this.setState(state => {
      return state.selectedOptionId = selectOptionId;
    })
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
      searchBy: this.state.searchOptionsList[this.state.selectedOptionId],
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
        const sortedFilms = this.sortFilms(response.data.data, this.state.sortedBy);
        this.setState({ foundFilmList: sortedFilms });
      })
      .catch((err) => { console.log('Error: ', err) });
  }

  sortFilms(filmList, sortBy) {
    // to-do map in sub-header
    const sortOptions = {
      rating: 'vote_average',
      date: 'release_date'
    };

    const currentSortOpt = sortOptions[sortBy];
    const needTrim = currentSortOpt === sortOptions.date;

    return filmList.sort((a, b) => {
      return needTrim
        ? trimReleaseDate(b[currentSortOpt]) - trimReleaseDate(a[currentSortOpt])
        : b[currentSortOpt] - a[currentSortOpt];
    });
  }

  changeSort(sortBy) {
    this.setState({
      sortedBy: sortBy,
      foundFilmList: this.sortFilms(this.state.foundFilmList, sortBy)
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Header>
          <SearchForm title='find your movie' sendForm={this.searchFilm}>
            <SearchField onChange={this.inputValueChange}/>
            <SearchOptions
              searchOptionsList={this.state.searchOptionsList}
              selectedOptionId={this.state.selectedOptionId}
              selectOption={this.selectOption}
            />
          </SearchForm>
        </Header>
        <SubHeader changeSort={this.changeSort} numberFoundFilms={this.state.foundFilmList.length}/>
        <BodyContent>
          <SearchResults filmList={this.state.foundFilmList}/>
        </BodyContent>
      </ErrorBoundary>
    )
  }
}

