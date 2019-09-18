describe('Quote Details', () => {
  it('Displays error element for invalid quote id', () => {
    cy.server()
    cy.visit('http://localhost:3000/quotes/quoteID')

    cy.get('[data-cy=error-element]').should('be.visible');
    cy.get('[data-cy=error-element]').should('have.text', 'Something went wrong! Please try again later.');
  });

  it('Displays quote details', () => {
    const quote = {
      id: 90,
      author: 'J. R. R. Tolkien',
      source: 'https://en.wikipedia.org/wiki/J._R._R._Tolkien',
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    };

    cy.server();

    cy.route({
      url: 'http://localhost:3001/quotes/90',
      method: 'GET',
      response: quote,
      status: 200
    });

    cy.visit('http://localhost:3000/quotes/90');

    cy.get('[data-cy=author-name]').should('have.text', quote.author);
    cy.get('[data-cy=quote-body]').should('have.text', quote.body);
    cy.get('[data-cy=quote-source]').should('have.attr', 'href', quote.source);
  });
});