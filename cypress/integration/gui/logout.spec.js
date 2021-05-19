/// <reference types="Cypress" />

describe('Logout', () => {
    beforeEach(() => cy.login())
  
    it('successfully', () => {
      cy.logout()
        
      //Cypress.config - pega config setada no arquivo cypress.json passando a chave
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
    })
  })