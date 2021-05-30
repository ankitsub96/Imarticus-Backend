# yellow-class-demo


Functionalities and Sample endpoints-

1. Register Users-
   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/users/
   JSON body- {
      "email": "ankitsub961@gmail.com",
      "name": "Ankit",
      "password": "qwerty123" 
   }
   output- 
   {
        "status": {
            "message": "signup successful",
            "code": 200
        },
        "data": {
            "userId": "60a129328eec6e0015d97588",
            "name": "Ankit",
            "email": "ankitsub961@gmail.com",
            "status": "active",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTE3NDU3OCwiZXhwIjoxNjIxMTc4MTc4fQ.SDTdv2WGkfOmgoy_-_m2bEEL_UodDwBQIBcgpcy6fyA",
            "expiresIn": 3600000
        }
    }
   Remarks- 
   The fields email, name and password are compulsory to register a user successfully


   2. Login Users-
   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/users/ankitsub961@gmail.com/login
   JSON body- { 
      "password": "qwerty123" 
   }
   output- 
   {
        "status": {
            "message": "Login successful",
            "code": 200
        },
        "data": {
            "userId": "60a129328eec6e0015d97588",
            "name": "Ankit",
            "email": "ankitsub961@gmail.com",
            "status": "active",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTE3NDcyNCwiZXhwIjoxNjIxMTc4MzI0fQ.D2e3EDMEkOE80FwuiTR6RootYjUjQMBWnHQCYqKDRSQ",
            "expiresIn": 3600000
        }
    }
   Remarks- 
   The email in URL is the one which the password corresponds to. The field password is compulsory to login a user successfully
   
   3. Change Users details- 

   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/users/60a125b48eec6e0015d97572/updateDetails

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o"
   }

   JSON body- {  
      "email": "ankitsub96@gmail.com",
      "name": "Ankit Dahiya",
      "password": "qwerty123" 
   }

   output- 
   {
        "status": {
            "message": "Login successful",
            "code": 200
        },
        "data": {
            "userId": "60a129328eec6e0015d97588",
            "name": "Ankit",
            "email": "ankitsub96@gmail.com",
            "status": "active",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTE3NDcyNCwiZXhwIjoxNjIxMTc4MzI0fQ.D2e3EDMEkOE80FwuiTR6RootYjUjQMBWnHQCYqKDRSQ",
            "expiresIn": 3600000
        }
    }
   Remarks- 
   This can be used to update some or all of the users' details. The new username to be set needs to be unique and not one used by any active user. 
   The userId and token used here is returned when user logs in using the correct credentials.
   All fields used here are optional.


   4. Make a new group- 

   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/groups/

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o"
   }

   JSON body- { 
      "name": "group21" 
   }

   output- 
   {
        "status": {
            "message": "Group Creation successful",
            "code": 200
        },
        "data": {
            "groupId": "60a12c398eec6e0015d9758a",
            "adminId": "60a125b48eec6e0015d97572",
            "name": "group21",
            "members": [],
            "status": "active"
        }
    }
   Remarks- 
   This endpoint was made so that the paginated fetch of the groups can be tested properly.
   This can be used to Create new empty Groups. 
   The token used here is returned when user logs in using the correct credentials.
   The name field is compulsory. 


   5. Fetch active groups using the pagination concept- 

   Method- GET
   URL- http://yellow-class-demo.herokuapp.com/groups/?delta=3&limit=5

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o"
   } 

   output- 
   {
        "status": {
            "message": "Groups requested",
            "code": 201
        },
        "data": [
            {
                "name": "group16",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:37.383Z"
                },
                {
                "name": "group17",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:40.620Z"
                },
                {
                "name": "group18",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:44.815Z"
                },
                {
                "name": "group19",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:48.317Z"
                },
                {
                "name": "group20",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:52.170Z"
            }
        ]
    }
   Remarks-   
   Here, limit refers to the pagination size and delta refers to which (page) is to be fetched, so that appropriate number of mongo documents can be skipped.
   The token used here is returned when user logs in using the correct credentials.
   The name field is compulsory. 


   6. Post a direct message to a sender by Receiver's Id- 

   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/messages/

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o"
   } 
    Body-{
        "msg": "msg10",
        "recId": "60a129328eec6e0015d97588"
    }

   output- 
   {
        "status": {
            "message": "Message sent",
            "code": 200
        },
        "data": {
            "msgId": "60a20e5af967470015fae3de",
            "msg": "msg10",
            "type": "direct",
            "recId": "60a129328eec6e0015d97588"
        }
    }
   Remarks-
   The token used here is returned when user logs in using the correct credentials.
   The msg and recId field is compulsory. 



   7. Post a Group message to a group by groupId- 

   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/messages/

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o"
   } 
    Body-{
        "msg": "msg10 to group1",
        "groupId": "60a1272d8eec6e0015d97574"
    }

   output- 
   {
        "status": {
            "message": "Message sent",
            "code": 200
        },
        "data": {
            "msgId": "60a211e9f967470015fae3e8",
            "msg": "msg10 to group1",
            "type": "group",
            "groupId": "60a1272d8eec6e0015d97574"
        }
    }
   Remarks-
   The token used here is returned when user logs in using the correct credentials.
   The msg and recId field is compulsory. 



   8. Get latest direct messages to requesting user by any other user- 

   Method- GET
   URL- http://yellow-class-demo.herokuapp.com/messages/?delta=3&limit=2&groupId=60a1272d8eec6e0015d97574

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTIzNTYzNSwiZXhwIjoxNjIxMjM5MjM1fQ.hv3aedE4IVmYRzbsKR51ZdiFlU5ot8Wnuw62Wy62Kng"
   }

   output- 
   {
        "status": {
            "message": "Messages requested",
            "code": 201
        },
        "data": [
            {
            "msgId": "60a20e5af967470015fae3de",
            "msg": "msg10",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e55f967470015fae3dd",
            "msg": "msg9",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e52f967470015fae3dc",
            "msg": "msg8",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e4ff967470015fae3db",
            "msg": "msg7",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e4df967470015fae3da",
            "msg": "msg6",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e4af967470015fae3d9",
            "msg": "msg5",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e47f967470015fae3d8",
            "msg": "msg4",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e44f967470015fae3d7",
            "msg": "msg3",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e42f967470015fae3d6",
            "msg": "msg2",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            },
            {
            "msgId": "60a20e3af967470015fae3d5",
            "msg": "msg1",
            "type": "direct",
            "senderId": "60a125b48eec6e0015d97572"
            }
        ]
    }
   Remarks-
   The token used here is of user2(ankitsub961@gmail.com).
   The token used here is returned when user logs in using the correct credentials.
   The delta and limit fields are compulsory, when trying to fetch messages. 



   9. Get latest Group messages to a group by groupId- 

   Method- GET
   URL- http://yellow-class-demo.herokuapp.com/messages/?delta=3&limit=2&groupId=60a1272d8eec6e0015d97574

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o"
   }

   output- 
   {
        "status": {
            "message": "Messages requested",
            "code": 201
        },
        "data": [
            {
            "msgId": "60a211d7f967470015fae3e2",
            "msg": "msg4 to group1",
            "type": "group",
            "senderId": "60a125b48eec6e0015d97572",
            "groupId": "60a1272d8eec6e0015d97574"
            },
            {
            "msgId": "60a211d5f967470015fae3e1",
            "msg": "msg3 to group1",
            "type": "group",
            "senderId": "60a125b48eec6e0015d97572",
            "groupId": "60a1272d8eec6e0015d97574"
            }
        ]
    }
   Remarks-
   The requesting user must be a member of the group.
   The token used here is returned when user logs in using the correct credentials.
   The delta, limit and groupId fields are compulsory, when trying to fetch messages from a group. 


   10. Get latest Group messages to a group by groupId, when the requesting user is not a group member- 

   Method- GET
   URL- http://yellow-class-demo.herokuapp.com/messages/?delta=3&limit=2&groupId=60a127338eec6e0015d97575

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o"
   }

   output- 
   {
        "status": {
            "message": "Unauthorised. It seems that you are not a member of this group",
            "code": 401
        }
    }
   Remarks-
   The requesting user must be a member of the group.
   The token used here is returned when user logs in using the correct credentials.
   The delta, limit and groupId fields are compulsory, when trying to fetch messages from a group.  


   11. Get latest direct messages to the requesting user by senderId- 

   Method- GET
   URL- http://yellow-class-demo.herokuapp.com/messages/?delta=2&limit=2&senderId=60a125b48eec6e0015d97572

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTIzNTYzNSwiZXhwIjoxNjIxMjM5MjM1fQ.hv3aedE4IVmYRzbsKR51ZdiFlU5ot8Wnuw62Wy62Kng"
   }

   output- 
   {
        "status": {
            "message": "Messages requested",
            "code": 201
        },
        "data": [
            {
            "msgId": "60a211dbf967470015fae3e4",
            "msg": "msg6 to group1",
            "type": "group",
            "senderId": "60a125b48eec6e0015d97572",
            "groupId": "60a1272d8eec6e0015d97574"
            },
            {
            "msgId": "60a211d9f967470015fae3e3",
            "msg": "msg5 to group1",
            "type": "group",
            "senderId": "60a125b48eec6e0015d97572",
            "groupId": "60a1272d8eec6e0015d97574"
            }
        ]
    }
   Remarks- 
   The token used here is of user2(ankitsub961@gmail.com) and senderId used is of user1(ankitsub96).
   The token used here is returned when user logs in using the correct credentials.
   The delta, limit and groupId fields are compulsory, when trying to fetch messages from a group. 