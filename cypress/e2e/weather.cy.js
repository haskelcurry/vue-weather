describe('Weather Test', () => {

  it('should show the weather', () => {

    cy.visit('/');
    cy.get('input').type('Новосілки');
    cy.get('button').click();

    cy.get('.description').should('exist');

  });

});
