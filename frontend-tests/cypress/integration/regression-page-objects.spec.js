/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as newroomFuncs from '../pages/newRoomPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as newclientFuncs from '../pages/newClientPage'
import * as billsFuncs from '../pages/billsPage'
import * as newbillFuncs from '../pages/newBillPage'
import * as targets from '../targets/targets'

describe('Test suite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })
    
    // Test cases
    it('Create Room', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Rooms')
        roomsFuncs.checkTitleOfRoomsPage(cy)
        roomsFuncs.navigateToNewRoomPage(cy, 'New Room')
        newroomFuncs.checkTitleOfNewRoomPage(cy)
        newroomFuncs.saveNewRoom()
        roomsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
    })

    it('Cancel Room Registration', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Rooms')
        roomsFuncs.checkTitleOfRoomsPage(cy)
        roomsFuncs.navigateToNewRoomPage(cy, 'New Room')
        newroomFuncs.checkTitleOfNewRoomPage(cy)
        newroomFuncs.cancelNewRoom()
        roomsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
    })

    it('Create Client', function(){
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.checkTitleOfClientsPage(cy)
        clientsFuncs.navigateToNewClientPage(cy, 'New Client')
        newclientFuncs.checkTitleOfNewClientPage(cy)
        newclientFuncs.saveNewClient()
        clientsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
    })

    it('Cancel Client Registration', function(){
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.checkTitleOfClientsPage(cy)
        clientsFuncs.navigateToNewClientPage(cy, 'New Client')
        newclientFuncs.checkTitleOfNewClientPage(cy)
        newclientFuncs.cancelNewClient()
        clientsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
    })

    it('Create Bill', function(){
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billsFuncs.checkTitleOfBillsPage(cy)
        billsFuncs.navigateToNewBillPage(cy, 'New Bill')
        newbillFuncs.checkTitleOfNewBillPage(cy)
        newbillFuncs.saveNewBill()
        billsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
    })

    
})