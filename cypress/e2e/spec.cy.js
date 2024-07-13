describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your password')
      .type('123456').should('have.value', '123456')
      
    cy.get('[data-testid="submit"]').click()

    cy.get('div.home')
      .should('be.visible')

    cy.get('[data-testid="sidebar"]').should("exist")

    cy.get('[data-testid="users"]').click()

    cy.url().should('include', '/users')

    cy.get('div.datatableTitle').contains('USERS')

    cy.get('[data-testid="categories"]').click()

    cy.get('div.title').contains('USERS')
    cy.get('div.title').contains('PRODUCTS')
    cy.get('div.title').contains('CATEGORIES')

    cy.get('[data-testid="add_new"]').click()

    cy.get('input#name')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Coffee')
      .type('Dessert').should('have.value', 'Dessert')

    cy.get('[data-testid="send"]').click()
    cy.url().should('include', '/categories')

    cy.get('div.cellWithImg').contains('Dessert')

    cy.get('[data-testid="delete"]').click()
    cy.get('div.cellWithImg').should('not.contain', 'Dessert')

  })
})