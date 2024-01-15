///<reference types="cypress"/>
describe('Alert',()=>{
    it('alert_simple',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsAlert()"]').click();        //Handles alerts automatically--simple alert

        //validation
        cy.get('[id="result"]').should('have.text','You successfully clicked an alert')

    })




    it('alert_confirm_ok',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsConfirm()"]').click();        //Handles alerts automatically--simple alert

        //validation
        cy.get('[id="result"]').should('have.text','You clicked: Ok')

    })


    
    it.only('alert_confirm_cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsConfirm()"]').click();        //Handles alerts automatically--simple alert
        cy.on('window:confirm',()=>false)
        //validation
        cy.get('[id="result"]').should('have.text','You clicked: Cancel')

    })

})
