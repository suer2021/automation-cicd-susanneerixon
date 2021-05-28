/// <reference types="cypress" />

import faker from 'faker'

// This is just an example of a test suite, 
// the real test suite is in regression-page-objects
describe('', function(){
    // This is just an example of a test case
    // the real test cases are in regression-page-objects
    it('Create Room', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Double')
        let roomNumber = faker.random.number(10000)
        cy.get(':nth-child(2) > input').type(roomNumber)
        cy.get(':nth-child(3) > input').type(faker.random.number(4))
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type(faker.random.number({min:250, max:1500}))
        cy.get(':nth-child(6) > select').select('balcony')
        cy.get('.blue').click()
        cy.contains('Rooms')
        cy.contains(roomNumber)
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

})