/// <reference types="cypress" />

describe('Search Results', ()=>{


    it('TC01: Amazon', ()=>{

        //launch application
        cy.visit('https://www.amazon.in/')

     

        // search 
        cy.xpath('//input[@type="text"]').clear().type('iphone 15 pro')
        cy.xpath('//input[@id="nav-search-submit-button"]').click()

        cy.title().should('contain','Amazon.in : iphone 15 pro')
         cy.url().should('contain','amazon.in')




    })

})
