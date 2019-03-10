import React from 'react';
import './header-from.scss';

import { HeaderFormSearch } from '../header-form-search/header-form-search';

export class HeaderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOptions: {
        list: [{
            active:true,
            name: 'title'
          }, {
            active:false,
            name: 'genre'
          }, {
            active:false,
            name: 'test'
          }],
        selectOption: this.selectOption.bind(this)
      }
    };

    this.sendForm = this.sendForm.bind(this)
  }

  sendForm(event) {
    event.preventDefault();
    console.log('request sent');
    console.log(this)
  }

  selectOption(selectOptionName, event) {
    const newSearchOptions = this.state.searchOptions.list.map(item => {
      item.active = (item.name === selectOptionName);
      return item;
    });

    this.setState(state => {
      return state.searchOptions.list = newSearchOptions;
    })
  }

  render() {
    return (
      <form className='header-form'>
        <div className='header-form__title'>find your movie</div>
        <HeaderFormSearch searchOptions={this.state.searchOptions}/>
        <button onClick={this.sendForm} className='header-form__btn'>search</button>
      </form>
    )
  }
}
