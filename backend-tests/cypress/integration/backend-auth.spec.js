import * as clientHelpers from '../helpers/clientHelpers'
import * as roomHelpers from '../helpers/roomHelpers'

describe('test suite', function(){

   it('Create a new room', function(){
      roomHelpers.createRoomRequest(cy)
   })

   it('Get all rooms', function(){
      roomHelpers.getAllRoomsRequest(cy)
   })

   it ('Create a room and delete it', function(){
      roomHelpers.createRoomRequestAndDelete(cy)
   })

   it ('Create a room and edit it', function(){
      roomHelpers.createRoomRequestAndEdit(cy)
   })

   it('Create a new client', function(){
      clientHelpers.createClientRequest(cy)
   })

   it('Get all clients', function(){
      clientHelpers.getAllClientsRequest(cy)
   })

   it ('Create a client and delete it', function(){
      clientHelpers.createClientRequestAndDelete(cy)
   })


})