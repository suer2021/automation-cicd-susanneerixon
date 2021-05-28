/// <reference types="cypress" />

// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const navRoomButton = ':nth-child(1) > .btn'
const navClientButton = '.blocks > :nth-child(2) > .btn'
const navBillButton = ':nth-child(3) > .btn'
const navReservationButton = ':nth-child(4) > .btn'

// actions / functions
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function navigateToRoomPage(cy, contentToConfirm){
    cy.get(navRoomButton).click()
    cy.contains(contentToConfirm)
}

function navigateToClientsPage(cy, contentToConfirm){
    cy.get(navClientButton).click()
    cy.contains(contentToConfirm)
}

function navigateToBillsPage(cy, contentToConfirm){
    cy.get(navBillButton).click()
    cy.contains(contentToConfirm)
}

function navigateToReservationsPage(cy, contentToConfirm){
    cy.get(navReservationButton).click()
    cy.contains(contentToConfirm)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    checkTitleOfDashboardPage,
    navigateToRoomPage,
    navigateToClientsPage,
    navigateToBillsPage,
    navigateToReservationsPage,
    performLogout
}