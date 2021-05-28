/// <reference types="cypress" />

// elements
const titleOfIndexPage = 'Testers Hotel'
const userNameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

// actions / functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
    cy.contains('Login')
}

function performValidLogin(cy, username, password,contentToConfirm){
    cy.get(userNameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

//exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin
}