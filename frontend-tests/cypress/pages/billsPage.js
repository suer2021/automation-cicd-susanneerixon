/// <reference types="cypress" />

// elements
const titleOfBillsPage = 'Testers Hotel'
const navNewBillButton = 'h2 > .btn'
const navDashboardButton = ':nth-child(3) > .btn'

// actions / functions
function checkTitleOfBillsPage(cy){
    cy.title().should('eq', titleOfBillsPage)
    cy.contains('Bills')
}

function navigateToNewBillPage(cy, contentToConfirm){
    cy.get(navNewBillButton).click()
    cy.contains(contentToConfirm)
}

function navigateToDashboardPage(cy, contentToConfirm){
    cy.get(navDashboardButton).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    checkTitleOfBillsPage,
    navigateToNewBillPage,
    navigateToDashboardPage
}