import React from 'react';
import './sort-options.scss';

import { List } from '../shared/list/list';

export class SortOptions extends React.Component {
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
      <div className="sort-options">
        <div className="sort-options__title">sort by</div>
        <List itemList={this.state.sortOptionsList}
              listClassName="sort-options__list"
              itemClassName="sort-options__item"
              selectedItemId={this.state.selectedOptionId}
              selectItem={this.selectOption}
        />
      </div>
    )
  }
}

