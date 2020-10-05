/// <reference types="cypress" />
 const faker = require('faker')


describe('part one', function(){
 for(var i = 1; i < 21; i++) {
  it( i.toString() ,function(){
        cy.visit('https://vpos.sandbox.splitit.com/#/intro')
        cy.get('.button--2dqXT').click()
        cy.get('#cs-username').type('test_vpos')
        cy.get('#cs-password').type('Test123!')
        cy.get('button').contains('Sign In').click()
        cy.get('#cs-amount').type(Math.floor(Math.random() * (1000 - 100 + 1 ) ) + 100)
        cy.get('#currency').click()
        cy.contains('GBP').click()
        cy.get('#cs-orderNumber').type('Name')
        cy.get('.button--2dqXT').click()
        cy.get('.active--rsXog > .tab-item--3y4p_').click()
        cy.get('button').contains('Continue').click()
        cy.get('.primary--3IGuY > .text--2DTUY').click()
        cy.get('.drag-handle-inner--3yYnw').trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX:750, clientY:200 })
        .trigger('mouseup', { force: true })
        cy.get('button').contains('Continue').click()
        cy.get('#cs-holdersName').type('Name')
        cy.get('#cs-number').type('4111111111111111')
        cy.get('#cs-expDate').type('0222')
        cy.get('#cs-cvv').type('222')
        cy.get('button').contains('Continue').click()
        cy.get('.ant-select-selection__rendered').type('AFGHANISTAN')
        cy.get('#cs-street').type('test')
        cy.get('#cs-city').type('test')
        cy.get('#cs-zip').type('11111')
        cy.get('button').contains('Continue').click()
        cy.get('#cs-email').type(faker.internet.email())
        cy.get('#cs-phone').type('000000000000000')
        cy.get('button').contains('Continue').click()
        cy.get('canvas').click()
        cy.get('button').contains('Confirm').click()

        
    

     });
    }

});



describe('part two', function(){
    it('1',function(){
        cy.visit('https://vpos.sandbox.splitit.com/#/intro')
        cy.get('.button--2dqXT').click()
        cy.get('#cs-username').type('test_vpos')
        cy.get('#cs-password').type('Test123!')
        cy.get('button').contains('Sign In').click()
        cy.get('#cs-amount').type('100')
        cy.get('#currency').click()
        cy.contains('GBP').click()
        cy.get('#cs-orderNumber').type('Name')
        cy.get('.button--2dqXT').click()
        cy.get('.active--rsXog > .tab-item--3y4p_').click()
        cy.get('button').contains('Continue').click()
        cy.get('.primary--3IGuY > .text--2DTUY').click()
        cy.get('.drag-handle-inner--3yYnw').trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX:750, clientY:200 })
        .trigger('mouseup', { force: true })
        cy.get('button').contains('Continue').click()
        cy.get('#cs-holdersName').type('Name')
        cy.get('#cs-number').type('4222222222222220')
        cy.get('#cs-expDate').type('1022')
        cy.get('#cs-cvv').type('222')
        cy.get('button').contains('Continue').click()
        cy.get('.ant-select-selection__rendered').type('AFGHANISTAN')
        cy.get('#cs-street').type('test')
        cy.get('#cs-city').type('test')
        cy.get('#cs-zip').type('11111')
        cy.get('button').contains('Continue').click()
        cy.get('#cs-email').type('molly@dev.dev')
        cy.get('#cs-phone').type('000000000000000')
        cy.get('button').contains('Continue').click()
        cy.get('canvas').click()
        cy.get('button').contains('Confirm').click()



     });
});

