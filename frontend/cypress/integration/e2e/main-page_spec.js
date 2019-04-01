describe('Main page', () => {
  it('successfully loads', function() {
    cy.visit('/');
  });

  it('should select other option', () => {
    const option = cy.contains('genres');
    option.click();
    option.should('have.class','search-form__options-list-item--active');
  });

  it('should type into input', () => {
    cy.get('.search-form__input')
      .type('war')
      .should('have.value', 'war');
  });

  it('should show found films', () => {
    cy.get('.default-btn')
      .click();
    cy.get('.film-preview')
      .should('exist')
  });

  it('should change sort by', () => {
    const firstFilmPreview = cy.get('.film-preview');
    cy.get('.sort-options__list > :nth-child(2)').click();
    expect(firstFilmPreview).not.equal(cy.get('.film-preview'));
  });

  it('should change url then click on film preview', () => {
    cy.get('.film-preview').first().click();
    cy.url().should('include', '/film/');
  });
});
