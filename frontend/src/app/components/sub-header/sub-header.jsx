import React from 'react';
import './sub-header.scss';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';
import { SortOptions } from '../sort-options/sort-options';

export class SubHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOptionsList: ['rating', 'date'],
      selectedOptionId: 0
    };

    this.selectOption = this.selectOption.bind(this);
  }

  componentDidMount() {
    this.selectOption(this.state.selectedOptionId);
  }

  selectOption(selectOptionId) {
    this.setState(state => {
      return state.selectedOptionId = selectOptionId;
    }, () => {
      this.props.changeSort(this.state.sortOptionsList[selectOptionId]);
    });
  }

  render() {
    return (
      <div className="sub-header">
        <ContentWrapper>
          <div className="sub-header__content">
            {this.props.numberFoundFilms ? <div className="sub-header__info">{this.props.numberFoundFilms} movies found</div> : ''}
            {this.props.filmGenre ? <div className="sub-header__info">Films by {this.props.filmGenre} genre</div> : ''}
            <SortOptions {...this.state} selectOption={this.selectOption}/>
          </div>
        </ContentWrapper>
      </div>
    )
  }
}
