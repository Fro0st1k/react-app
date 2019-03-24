import React from 'react';
import { List } from '../../shared/list/list';

export class SearchOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOptionsList: ['title', 'genres'],
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
      this.props.changeSearchBy(this.state.searchOptionsList[this.state.selectedOptionId]);
    })
  }

  render() {
    return (
      <div className="search-form__options">
        <span className="search-form__options-title">search by</span>
        <List itemList={this.state.searchOptionsList}
              listClassName="search-form__options-list"
              itemClassName="search-form__options-list-item"
              selectedItemId={this.state.selectedOptionId}
              selectItem={this.selectOption}
        />
      </div>
    )
  }
}
