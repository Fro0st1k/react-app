export const changeSearchFilterAction = (id) => {
  return {
    type: 'CHANGE_SEARCH_FILTER',
    selectedFilterOptionId: id
  }
};
