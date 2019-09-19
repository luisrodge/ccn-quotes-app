describe('New Quote Form', () => {
  const quote = {
    author: 'J. R. R. Tolkien 4',
    source: 'https://en.wikipedia.org/wiki/J._R._R._Tolkien',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit 4.'
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

    cy.visit('http://localhost:3000')
  });

  it('Focuses the new quote form input', () => {
    cy.get('[data-cy=create-form]').within(() => {
      cy.get('[data-cy=author-input]').should('be.focused')
    })
  });

  it('Accepts user input', () => {
    cy.get('[data-cy=create-form]').within(() => {
      cy.get('[data-cy=author-input]')
        .type(quote.author)
        .should('have.value', quote.author)

      cy.get('[data-cy=source-input]')
        .type(quote.source)
        .should('have.value', quote.source)

      cy.get('[data-cy=body-input]')
        .type(quote.body)
        .should('have.value', quote.body)
    })
  });

  it('Errors when required fields are missing', () => {
    cy.get('[data-cy=create-form]').submit();

    cy.get('[data-cy=create-form]').within(() => {
      cy.get('[data-cy=error]').should('have.length', 3);
    })
  });

  it.only('Submits when required fields are present', () => {
    cy.route({
      url: `http://localhost:3001/quotes/${quote.id}`,
      method: 'POST',
      response: quote,
      status: 200
    });

    cy.get('[data-cy=create-form]').within(() => {
      cy.get('[data-cy=author-input]')
        .type(quote.author)

      cy.get('[data-cy=source-input]')
        .type(quote.source)

      cy.get('[data-cy=body-input]')
        .type(quote.body)
    })

    cy.get('[data-cy=create-form]').submit();

    cy.get('li').should('have.length', 4);
    cy.get('li').should('contain', quote.author);
    cy.get('[data-cy=quotes-count]').should('have.text', '4');
    cy.get('[data-cy=author-name]').should('contain', quote.author);
    cy.get('[data-cy=quote-body]').should('contain', quote.body);
    cy.get('[data-cy=quote-source]').should('have.attr', 'href', quote.source);

  });
});