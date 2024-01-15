/// <reference types="cypress" />



describe('Search Results', ()=>{


    it('TC01: Amazon', ()=>{

        //launch application
        cy.visit('https://www.amazon.in/')

     

        // search 
        cy.get('input[type="text"]').clear().type('iphone 15 pro')
        cy.get('input[id="nav-search-submit-button"]').click()

        cy.title().should('contain','Amazon.in : iphone 15 ')
         cy.url().should('contain','amazon.in')


       

     

        


    })

})
