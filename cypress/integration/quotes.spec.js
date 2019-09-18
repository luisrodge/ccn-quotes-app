describe('Quotes List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Displays list of quotes', () => {
    cy.get('li').its('length').should('be.gte', 1)
  });

  it('Displays empty element when no quotes present', () => {
    cy.server()
    cy.route('/quotes', []);

    cy.get('[data-cy=no-quotes]').should('be.visible');
    cy.get('[data-cy=quotes-count]').should('have.text', '0');
  });
});