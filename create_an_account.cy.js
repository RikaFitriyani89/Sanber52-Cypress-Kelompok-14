describe('Click element', () => {

    it('clicks the button "Create an Account"', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains("Create an Account").click()
      cy.get('#firstname').type("Rika")
      cy.get('#lastname').type("Fitriyani")
      cy.get('#email_address').type("test@gmail.com")
      cy.get('#password').type("Fitriyani89.")
      cy.get('#password-confirmation').type("Fitriyani89.")
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    })

  })