/// <reference types="cypress" />

// elements
const titleOfNewClientPage = 'Testers Hotel'
const saveButton = '.blue'
const cancelButton = '[href="/clients"]'
const nameTextField = ':nth-child(1) > input'
const emailTextField = ':nth-child(2) > input'
const phonenumberTextField = ':nth-child(3) > input'
import faker from 'faker'

// actions / functions
function checkTitleOfNewClientPage(cy){
    cy.title().should('eq', titleOfNewClientPage)
    cy.contains('New Client')
}

function saveNewClient(){
    
    let name = faker.name.findName()
    cy.get(nameTextField).type(name)
    
    let emailAddress = faker.internet.email()
    cy.log(emailAddress)
    cy.get(emailTextField).type(emailAddress)

    let phoneNumber = faker.phone.phoneNumberFormat()
    cy.get(phonenumberTextField).type(phoneNumber)

    cy.get(saveButton).click()
    cy.contains('Clients')
    cy.contains(emailAddress)
}

function cancelNewClient(){
    
    let name = faker.name.findName()
    cy.get(nameTextField).type(name)
    
    let emailAddress = faker.internet.email()
    cy.log(emailAddress)
    cy.get(emailTextField).type(emailAddress)

    let phoneNumber = faker.phone.phoneNumberFormat()
    cy.get(phonenumberTextField).type(phoneNumber)

    cy.get(cancelButton).click()
    cy.contains('Clients')
    cy.contains(emailAddress).should('not.exist')
}


// exports
module.exports = {
    checkTitleOfNewClientPage,
    saveNewClient,
    cancelNewClient
}