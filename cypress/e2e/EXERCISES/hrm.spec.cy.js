/// <reference types ="cypress" />
// const {describe} = require ("mocha"),

describe('HRM App', ()=>{

    it ('Verify login', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('eq','OrangeHRM')

    })

})
