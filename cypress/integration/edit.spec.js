describe('Edit Quote Form', () => {
  const quote = {
    id: 90,
    author: 'J. R. R. Tolkien',
    source: 'https://en.wikipedia.org/wiki/J._R._R._Tolkien',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  };

  beforeEach(() => {
    cy.server();

    cy.route({
      url: 'http://localhost:3001/quotes/90',
      method: 'GET',
      response: quote,
      status: 200
    });

  });

  it('Displays error element for invalid quote id', () => {
    cy.server()
    cy.visit('http://localhost:3000/quotes/quoteID')

    cy.get('[data-cy=error-element]').should('be.visible');
    cy.get('[data-cy=error-element]').should('have.text', 'Something went wrong! Please try again later.');
  });

  it('Displays edit form with populated inputs', () => {
    cy.visit('http://localhost:3000/quotes/90/edit');

    cy.get('[data-cy=edit-form]').should('be.visible');

    cy.get('[data-cy=edit-form]').within(() => {
      cy.get('[data-cy=author-input]').should("have.value", quote.author);
      cy.get('[data-cy=source-input]').should("have.value", quote.source);
      cy.get('[data-cy=body-input]').should("have.value", quote.body);
    })
  });

  it('Fails to submit given invalid input values', () => {
    cy.visit('http://localhost:3000/quotes/90/edit');

    quote.author = '';

    cy.get('[data-cy=edit-form]').submit();

    cy.get('[data-cy=edit-form]').within(() => {
      cy.get('[data-cy=error]').its('length').should('be.gte', 1)
    })
  });
});