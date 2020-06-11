/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('when clicking ion button, it should go to details', () => {
    cy.contains('ion-button', 'Go to details via ion-button').click()
    cy.contains('div.label', 'Details');
  })

  it('when clicking regular button, it should go to details', () => {
    cy.contains('button', 'Go to details via regular button').click()
    cy.contains('div.label', 'Details');
  })

})
