const faker = require('faker')

const ENDPOINT_GET_ROOMS = 'http://localhost:3000/api/rooms'
const ENDPOINT_POST_ROOM = 'http://localhost:3000/api/room/new'
const ENDPOINT_GET_ROOM = 'http://localhost:3000/api/room/'

function createRandomRoomPayload(){
    const fakeCategory = faker.random.arrayElement(["Double","Single","Twin"])
    const fakeNumber = faker.random.number(500)
    const fakeFloor = faker.random.number(4)
    const fakeAvailable = faker.random.boolean()
    const fakePrice = faker.random.number({min:250, max:1500})
    const fakeFeatures = faker.random.arrayElement([["Balcony"],["Ensuite"],["Seaview"],["Penthouse"]])

    const payload = {
        "features": fakeFeatures,
        "category": fakeCategory,
        "number": fakeNumber,
        "floor": fakeFloor,
        "available": fakeAvailable,
        "price": fakePrice
    }

    return payload
}

function createRandomRoomPayloadWithId(id){
    const fakeCategory = faker.random.arrayElement(["Double","Single","Twin"])
    const fakeNumber = faker.random.number(500)
    const fakeFloor = faker.random.number(4)
    const fakeAvailable = faker.random.boolean()
    const fakePrice = faker.random.number({min:250, max:1500})
    const fakeFeatures = faker.random.arrayElement([["Balcony"],["Ensuite"],["Seaview"],["Penthouse"]])

    const payload = {
        "features": fakeFeatures,
        "category": fakeCategory,
        "number": fakeNumber,
        "floor": fakeFloor,
        "available": fakeAvailable,
        "price": fakePrice,
        "id": id
    }

    return payload
}

function getRequestAllRoomsWithAssertion(cy,number, floor, price){
    // GET request to fetch all rooms
    cy.request({
        method: "GET",
        url: ENDPOINT_GET_ROOMS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        const responseAsString = JSON.stringify(response)
        expect(responseAsString).to.have.string(number)
        expect(responseAsString).to.have.string(floor)
        expect(responseAsString).to.have.string(price)
    }))
}

function getAllRoomsRequest(cy){
    cy.authenticateSession().then((response =>{
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_ROOMS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response)
            cy.log(responseAsString)
           
        }))
    }))
}

function createRoomRequest(cy){
    cy.authenticateSession().then((response =>{
        let fakeRoomPayload = createRandomRoomPayload() 
        
        // post request to create a room
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:fakeRoomPayload 
        }).then((response =>{               
           const responseAsString = JSON.stringify(response)
           expect(responseAsString).to.have.string(fakeRoomPayload.number)
        }))

        getRequestAllRoomsWithAssertion(cy,fakeRoomPayload.number, fakeRoomPayload.floor, fakeRoomPayload.price)
    }))
}

function deleteRoomRequestAfterGet(cy){
    // GET request to fetch all rooms
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_ROOMS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        //const responseAsString = JSON.stringify(Response)
        let lastId = response.body[response.body.length -1].id
        cy.request({
            method: "DELETE",
            url: ENDPOINT_GET_ROOM+lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            //cy.log(JSON.stringify(Response))
            const responseAsString = JSON.stringify(response.body)
            cy.log(responseAsString)
            expect(responseAsString).to.have.string('true')
        }))
    }))
}

function createRoomRequestAndDelete(cy){
    cy.authenticateSession().then((Response =>{
        let fakeRoomPayload = createRandomRoomPayload()
        
        // post request to create a client
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body: fakeRoomPayload
        }).then((Response =>{
            //cy.log(JSON.stringify(Response))
            const responseAsString = JSON.stringify(Response)
            expect(responseAsString).to.have.string(fakeRoomPayload.number)
        }))
        //delete
        deleteRoomRequestAfterGet(cy)
    }))
}

function editRoomRequestAfterGet(cy){
    
    // GET request to fetch all rooms
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_ROOMS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        let lastId = response.body[response.body.length -1].id
        let fakeEditRoomPayload = createRandomRoomPayloadWithId(lastId)
        //const responseAsString = JSON.stringify(Response)
        
        cy.log(lastId)
        cy.request({
            method: "PUT",
            url: ENDPOINT_GET_ROOM+lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body: fakeEditRoomPayload
        }).then((response =>{
            //cy.log(JSON.stringify(Response))
            const responseAsString = JSON.stringify(response.body)
            cy.log(responseAsString)
            expect(responseAsString).to.have.string(fakeEditRoomPayload.number)
        }))
    }))
}

function createRoomRequestAndEdit(cy){
    cy.authenticateSession().then((Response =>{
        let fakeRoomPayload = createRandomRoomPayload()
        
        // post request to create a client
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body: fakeRoomPayload
        }).then((response =>{
            //cy.log(JSON.stringify(Response))
            const responseAsString = JSON.stringify(response)
            expect(responseAsString).to.have.string(fakeRoomPayload.number)
        }))
        //edit
        editRoomRequestAfterGet(cy)
    }))
}

module.exports = { 
    createRoomRequest,
    getAllRoomsRequest,
    createRoomRequestAndDelete,
    createRoomRequestAndEdit
}