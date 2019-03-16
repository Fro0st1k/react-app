import React from 'react';
import './sub-header.scss';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';
import { SortOptions } from '../sort-options/sort-options';

export class SubHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOptionsList: ['rating', 'date', 'A-Z'],
      selectedOptionId: 0
    };

    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(selectOptionId) {
    this.setState(state => {
      return state.selectedOptionId = selectOptionId;
    });
  }

  render() {
    return (
      <div className='sub-header'>
        <ContentWrapper>
          <div className='sub-header__content'>
            <div className='sub-header__info'>7 movies found</div>
            <SortOptions {...this.state} selectOption={this.selectOption}/>
          </div>
        </ContentWrapper>
      </div>
    )
  }
}
