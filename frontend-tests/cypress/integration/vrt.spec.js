/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as billsFuncs from '../pages/billsPage'
import * as targets from '../targets/targets'

describe('Test suite', function(){

      
    // Test case navigation with screenshots
    it('Navigation test', function(){
        cy.visit(targets.base_url)
        //Login
        indexFuncs.checkTitleOfIndexPage(cy)
        cy.percySnapshot('login-page')
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        // dashboard
        dashboardFuncs.checkTitleOfDashboardPage(cy)
        cy.percySnapshot('dashboard-page')
        // rooms page
        dashboardFuncs.navigateToRoomPage(cy, 'Rooms')
        roomsFuncs.checkTitleOfRoomsPage(cy)
        cy.percySnapshot('rooms-page')
        // dashboard
        roomsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
        // clients page
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.checkTitleOfClientsPage(cy)
        cy.percySnapshot('clients-page')
        // dashboard
        clientsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
        // bills page
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billsFuncs.checkTitleOfBillsPage(cy)
        cy.percySnapshot('bills-page')
        // dashboard
        billsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
        // logout
        dashboardFuncs.performLogout(cy, 'Login')
    })

    
})