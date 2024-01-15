/// <reference types="cypress" />

import 'cypress-file-upload';


//reference url - https://www.npmjs.com/package/cypress-file-upload


describe('verify drag drop test', () => {



    it('dragdropTest', ()=>{


        cy.visit('//www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')



        cy.get('#file-upload').should('be.visible')            



        //install packge "file-upload"
        cy.get('input[type="file"]').attachFile('file.pdf')

        
        //click on upload button
        cy.get('input[type="submit"]').click();


        cy.wait(3000)

        //validation step

        //cy.get('h3').should('have.text','File Uploaded!')

    })



})
