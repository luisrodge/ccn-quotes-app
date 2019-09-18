describe('Quotes List', () => {
  it('Displays empty element when no quotes present', () => {
    cy.visit(`http://localhost:3000/quotes`);

    cy.server()
    cy.route('/quotes', []);

    cy.get('[data-cy=no-quotes]').should('be.visible');
    cy.get('[data-cy=quotes-count]').should('have.text', '0');
  });

  it('Displays list of quotes', () => {
    cy.server();

    cy.fixture('quotes').as('quotes');

    cy.route({
      url: 'http://localhost:3001/quotes',
      method: 'GET',
      response: '@quotes',
      status: 200
    });

    cy.visit(`http://localhost:3000/quotes`);

    cy.get('li').should('have.length', 3);
    cy.get('[data-cy=quotes-count]').should('have.text', '3');
  });
});