describe('Visitor views about page', () => {
  specify('and sees content', () => {
    cy.visit('/')

    cy.contains('Learn about me').click()

    cy.url().should('eq', 'http://localhost:8000/about/')
  })
})
