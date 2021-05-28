/// <reference types="cypress" />

// elements
const titleOfNewRoomPage = 'Testers Hotel'
const saveButton = '.blue'
const cancelButton = '[href="/rooms"]'
const categoryField = ':nth-child(1) > select'
const roomNumberField = ':nth-child(2) > input'
const floorField = ':nth-child(3) > input'
const availableCheckbox = '.checkbox'
const priceField = ':nth-child(5) > input'
const featuresSelect = ':nth-child(6) > select'
import faker from 'faker'

// actions / functions
function checkTitleOfNewRoomPage(){
    cy.title().should('eq', titleOfNewRoomPage)
    cy.contains('New Room')
}

function saveNewRoom(){
    cy.get(categoryField).select('Double')
    let roomNumber = faker.random.number(10000)
    cy.get(roomNumberField).type(roomNumber)
    cy.get(floorField).type(faker.random.number(4))
    cy.get(availableCheckbox).click()
    cy.get(priceField).type(faker.random.number({min:250, max:1500}))
    cy.get(featuresSelect).select('balcony')
    cy.get(saveButton).click()
    cy.contains('Rooms')
    cy.contains(roomNumber)
}

function cancelNewRoom(){
    cy.get(categoryField).select('Double')
    let roomNumber = faker.random.number(10000)
    cy.get(roomNumberField).type(roomNumber)
    cy.get(floorField).type(faker.random.number(4))
    cy.get(availableCheckbox).click()
    cy.get(priceField).type(faker.random.number({min:250, max:1500}))
    cy.get(featuresSelect).select('balcony')
    cy.get(cancelButton).click()
    cy.contains('Rooms')
    cy.contains(roomNumber).should('not.exist')
}

// exports
module.exports = {
    checkTitleOfNewRoomPage,
    saveNewRoom,
    cancelNewRoom
}