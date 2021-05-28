/// <reference types="cypress" />

// elements
const titleOfRoomsPage = 'Testers Hotel'
const navNewRoomButton = 'h2 > .btn'
const navDashboardButton = ':nth-child(3) > .btn'

// actions / functions
function checkTitleOfRoomsPage(){
    cy.title().should('eq', titleOfRoomsPage)
    cy.contains('Rooms')
}

function navigateToNewRoomPage(cy, contentToConfirm){
    cy.get(navNewRoomButton).click()
    cy.contains(contentToConfirm)
}

function navigateToDashboardPage(cy, contentToConfirm){
    cy.get(navDashboardButton).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    checkTitleOfRoomsPage,
    navigateToNewRoomPage,
    navigateToDashboardPage
}