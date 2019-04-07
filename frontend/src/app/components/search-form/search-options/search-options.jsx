import React from 'react';
import { List } from '../../shared/list/list';
import { connect } from 'react-redux';
import { changeSearchFilterAction } from '../../../actions/filter.actions';

export const SearchOptions = ({searchOptionsList, selectedFilterOptionId, changeFilter}) => {
  const selectFilter = (selectOptionId) => {
    changeFilter(selectOptionId);
  };

  return (
    <div className="search-form__options">
      <span className="search-form__options-title">search by</span>
      <List
        itemList={searchOptionsList}
        listClassName="search-form__options-list"
        itemClassName="search-form__options-list-item"
        selectedItemId={selectedFilterOptionId}
        selectItem={selectFilter}
      />
    </div>
  )
};

const mapStateToProps = (state) => {
  const { searchOptionsList, selectedFilterOptionId } = state.search;
  return { searchOptionsList, selectedFilterOptionId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (id) => {dispatch(changeSearchFilterAction(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);
