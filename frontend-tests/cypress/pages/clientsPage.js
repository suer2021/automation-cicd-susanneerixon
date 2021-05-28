/// <reference types="cypress" />

// elements
const titleOfClientsPage = 'Testers Hotel'
const navNewClientButton = 'h2 > .btn'
const navDashboardButton = ':nth-child(3) > .btn'

// actions / functions
function checkTitleOfClientsPage(cy){
    cy.title().should('eq', titleOfClientsPage)
    cy.contains('Clients')
}

function navigateToNewClientPage(cy, contentToConfirm){
    cy.get(navNewClientButton).click()
    cy.contains(contentToConfirm)
}

function navigateToDashboardPage(cy, contentToConfirm){
    cy.get(navDashboardButton).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    checkTitleOfClientsPage,
    navigateToNewClientPage,
    navigateToDashboardPage
}