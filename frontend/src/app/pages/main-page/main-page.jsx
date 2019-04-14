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

export class MainPage extends React.Component {
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
    this.props.getFilms({
      url:'movies',
      params: {
        search: this.state.searchInputValue.toLowerCase().trim(),
        searchBy: this.props.searchOptionsList[this.props.selectedFilterOptionId]
      }
    });
  }

  inputValueChange({target: { value }}) {
    this.setState(state => {
      state.searchInputValue = value;
    });
  }

  render() {
    const { sortOptionsList, selectedSortOptionId, foundFilmsList } = this.props;
    return (
      <ErrorBoundary>
        <Header>
          <SearchForm title='find your movie' sendForm={this.searchFilm}>
            <SearchField onChange={this.inputValueChange}/>
            <SearchOptionsContainer/>
          </SearchForm>
        </Header>
        <SubHeader numberFoundFilms={foundFilmsList.length}>
          <SortOptionsContainer/>
        </SubHeader>
        <BodyContent>
          <SearchResults filmList={foundFilmsList} sortedBy={sortOptionsList[selectedSortOptionId]}/>
        </BodyContent>
      </ErrorBoundary>
    )
  }
}
