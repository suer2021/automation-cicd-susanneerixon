/// <reference types="cypress" />

// elements
const titleOfNewBillPage = 'Testers Hotel'
const saveButton = '.blue'
const valueTextField = ':nth-child(1) > input'
const paidCheckbox = '.checkbox'
import faker from 'faker'

// actions / functions
function checkTitleOfNewBillPage(cy){
    cy.title().should('eq', titleOfNewBillPage)
    cy.contains('New Bill')
}

function saveNewBill(){
    
    let value = faker.random.number({min:10, max:150000})
    cy.get(valueTextField).type(value)

    cy.get(paidCheckbox).click()

    cy.get(saveButton).click()
    cy.contains('Bills')
    cy.contains(value)
}


// exports
module.exports = {
    checkTitleOfNewBillPage,
    saveNewBill
}