# DevOps-Challenge
API

👤1. Create user
  HTTP Method: POST
  URL: http://localhost:3000/users/create
  Body (raw-JSON) ตัวอย่าง
  {
    "userId": 3,
    "userName": "JohnD3",
    "firstName": "John",
    "lastName": "Doe",
    "age": 33,
    "petName": []
  }

  response
    {
      "status": "ok",
      "message": "User with ID = 3 is created",
      "user": {
          "userId": 3,
          "userName": "JohnD3",
          "firstName": "John",
          "lastName": "Doe",
          "age": 33,
          "petName": []
      }
  }


👤2. Read all users
 HTTP Method: GET
 URL: https://localhost:3000/users

 response
 [
    {
        "_id": "63b5294446bf92a2c5853bb5",
        "userId": 2,
        "userName": "Santa2",
        "firstName": "Santa",
        "lastName": "Aloha",
        "age": 55,
        "petName": []
    },
    {
        "_id": "63b549d68f4ca38d88d29f3f",
        "userId": 3,
        "userName": "JohnD3",
        "firstName": "John",
        "lastName": "Doe",
        "age": 33,
        "petName": []
    }
]


👤3. Read user by userName
  HTTP Method: GET
  URL: http://localhost:3000/users/{ userName }

response (ตัวอย่าง)
  {
      "status": "ok",
      "user": {
          "_id": "63b5294446bf92a2c5853bb5",
          "userId": 2,
          "userName": "Santa2",
          "firstName": "Santa",
          "lastName": "Aloha",
          "age": 55,
          "petName": []
      }
  }


👤4. Update user by userName
  HTTP Method: PUT
  URL: http://localhost:3000/users/update
  Body (raw-JSON) ตัวอย่าง
    {
      "userId": 3,
      "userName": "JohnD3",
      "firstName": "John",
      "lastName": "Dune",
      "age": 33,
      "petName": []
    }

  response ตัวอย่าง
   {
      "status": "ok",
      "message": "User JohnD3 is updated",
      "user": {
          "userId": 3,
          "userName": "JohnD3",
          "firstName": "John",
          "lastName": "Dune",
          "age": 33,
          "petName": []
      }
  }


👤5. Delete user by userName
    HTTP Method: DELETE
    URL: http://localhost:3000/users/delete
    Body (raw-JSON) ตัวอย่าง
    {
          "userName": "JohnD3"
     }


    response ตัวอย่าง
    {
        "status": "ok",
        "message": "User JohnD3 is deleted"
    }



🐨6. Create pet
    HTTP Method: POST
    URL: http://localhost:3000/pets/create
    Body (raw-JSON) ตัวอย่าง
    {
      "petId": 3,
      "petName": "Stitch",
      "petType": "monster"
    }


    response ตัวอย่าง
    {
        "status": "ok",
        "message": "pet with ID = 3 is created",
        "pet": {
            "petId": 3,
            "petName": "Stitch",
            "petType": "monster"
        }
    }

🐨7. Read all pets
 HTTP Method: GET
 URL: https://localhost:3000/pets


 response ตัวอย่าง
  [   
    {
          "petId": 1,
          "petName": "Valerie",
          "petType": "dog"
          "_id": "63ac091510ff254df58c8970"
    },
      {
          "_id": "63b54ea88f4ca38d88d29f40",
          "petId": 3,
          "petName": "Stitch",
          "petType": "monster"
      }
  ]

🐨8. Read pet via petName
   HTTP Method: GET
   URL: https://localhost:3000/pets/{ petName }
   
   response ตัวอย่าง
    {
      "status": "ok",
      "pet": {
          "_id": "63b54ea88f4ca38d88d29f40",
          "petId": 3,
          "petName": "Stitch",
          "petType": "monster"
        }
    }

🐨9. Update pet via petName
    HTTP Method: PUT
    URL: http://localhost:3000/pets/update
    Body (raw-JSON) ตัวอย่าง
       {
          "petId": 3,
          "petName": "Stitch",
          "petType": "alien"
        }
        
        
    response ตัวอย่าง
      {
          "status": "ok",
          "message": "Pet Stitch is updated",
          "pet": {
              "petId": 3,
              "petName": "Stitch",
              "petType": "alien"
          }
      }
      

🐨10. Delete pet via petName
    HTTP Method: DELETE
    URL: http://localhost:3000/pets/delete
    Body (raw-JSON) ตัวอย่าง
     {
          "petName": "Stitch"
     }
     

    response ตัวอย่าง
      {
        "status": "ok",
        "message": "Pet Stitch is deleted"
      }

