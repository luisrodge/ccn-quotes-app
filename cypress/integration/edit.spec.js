describe('Edit Quote Form', () => {
  it('Displays error element for invalid quote id', () => {
    cy.server()
    cy.visit('http://localhost:3000/quotes/quoteID')

    cy.get('[data-cy=error-element]').should('be.visible');
    cy.get('[data-cy=error-element]').should('have.text', 'Something went wrong! Please try again later.');
  });

  it('Displays edit form with populated inputs', () => {
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

    cy.visit('http://localhost:3000/quotes/90/edit');

    cy.get('[data-cy=edit-form]').should('be.visible');

    cy.get('[data-cy=edit-form]').within(() => {
      // you have access to the found form via
      // the jQuery object $form if you need it

      // cy.get() will only search for elements within form,
      // not within the entire document
      cy.get('[data-cy=author-input]').should("have.value", quote.author);
      cy.get('[data-cy=source-input]').should("have.value", quote.source);
      cy.get('[data-cy=body-input]').should("have.value", quote.body);
    })
  });
});