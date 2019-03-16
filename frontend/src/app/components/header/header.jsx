import React from 'react';

import './header.scss';
import { SearchForm } from '../search-form/search-form';
import { SearchField } from '../search-form/search-field/search-field';
import { SearchOptions } from '../search-form/search-options/search-options';
import { ContentWrapper } from '../shared/content-wrapper/content-wrapper';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOptionsList: ['title', 'genre', 'qwerty'],
      selectedOptionId: 0,
    };

    this.selectOption = this.selectOption.bind(this);
    this.sendForm = this.sendForm.bind(this)
  }

  sendForm(event) {
    event.preventDefault();
    console.log('request sent');
  }

  selectOption(selectOptionId) {
    this.setState(state => {
      return state.selectedOptionId = selectOptionId;
    })
  }

  render() {
    return (
      <div className='header'>
        <div className='header__shading'/>
        <ContentWrapper direction='column'>
          <div className='header__title'>Film library</div>
          <SearchForm title='find your movie' sendForm={this.sendForm}>
            <SearchField/>
            <SearchOptions {...this.state} selectOption={this.selectOption}/>
          </SearchForm>
        </ContentWrapper>
      </div>
    );
  }
}
