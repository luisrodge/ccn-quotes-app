describe('New Quote Form', () => {
  const author = "J. R. R. Tolkien";
  const source = "https://en.wikipedia.org/wiki/J._R._R._Tolkien";
  const body = "This is some body text";

  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3000')
  });

  it('Focuses the new quote form input', () => {
    cy.get('[data-cy=author-input]').should('be.focused')
  });

  it('Accepts user input', () => {
    cy.get('[data-cy=author-input]')
      .type(author)
      .should('have.value', author)

    cy.get('[data-cy=source-input]')
      .type(source)
      .should('have.value', source)

    cy.get('[data-cy=body-input]')
      .type(body)
      .should('have.value', body)
  });

  it('Errors when required fields are missing', () => {
    cy.get('[data-cy=create-form]').submit();

    cy.get('[data-cy=error]').should('have.length', 3)
  });

  it('Sumbits when required fields are present', () => {
    cy.get('[data-cy=author-input]').type(author)

    cy.get('[data-cy=source-input]').type(source)

    cy.get('[data-cy=body-input]').type(body)

    cy.get('[data-cy=create-form]').submit();

    cy.get('[data-cy=author-name]').should('contain', author);
  });
});