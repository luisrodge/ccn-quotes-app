describe('Quote Details', () => {
  const quote = {
    id: 1,
    author: "J. R. R. Tolkien",
    source: "https://en.wikipedia.org/wiki/J._R._R._Tolkien",
    body: "This is some body text"
  };

  beforeEach(() => {
    cy.server();

    cy.fixture('quotes').as('quotes');

    cy.route({
      url: 'http://localhost:3001/quotes',
      method: 'GET',
      response: '@quotes',
      status: 200
    });
  });

  it('Displays error element for invalid quote id', () => {
    cy.visit('http://localhost:3000/quotes/quoteID')
    cy.get('[data-cy=quote-body').within(() => {

      cy.get('[data-cy=error-element]').should('be.visible');
      cy.get('[data-cy=error-element]').should('have.text', 'Something went wrong! Please try again later.');
    });
  });

  it('Displays quote details', () => {
    cy.visit('http://localhost:3000/quotes/1');

    cy.get('[data-cy=quote-body').within(() => {
      cy.get('[data-cy=author-name]').should('have.text', quote.author);
      cy.get('[data-cy=quote-body]').should('have.text', quote.body);
      cy.get('[data-cy=quote-source]').should('have.attr', 'href', quote.source);
    });
  });

  it('Deletes a quote', () => {

    cy.visit('http://localhost:3000/quotes/1');

    cy.route({
      url: `http://localhost:3001/quotes/${quote.id}`,
      method: 'DELETE',
      response: {},
      status: 200
    });

    cy.get('[data-cy=delete-link]').click();

    cy.get('li').should('have.length', 2);
    cy.get('[data-cy=quotes-count]').should('have.text', '2');
  })
});