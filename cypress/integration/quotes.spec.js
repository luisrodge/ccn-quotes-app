describe('Quotes List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Displays list of quotes', () => {
    cy.get('li').its('length').should('be.gte', 1)
  });
});