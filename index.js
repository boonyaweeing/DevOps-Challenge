const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://users-pets:usersandpets00@cluster0.srecvth.mongodb.net/test";

//create user
app.post('/users/create', async(req, res) => {
  const user = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('mydb').collection('users').insertOne({
    userId: parseInt(user.userId),
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    petName: user.petName
  });
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "User with ID = "+user.userId+" is created",
    "user": user
  });
})

//read users
app.get('/users', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('mydb').collection('users').find({}).toArray();
    await client.close();
    res.status(200).send(users);
  })


//read user by username  
app.get('/users/:userName', async(req, res) => {
    const userName = String(req.params.userName);
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client.db('mydb').collection('users').findOne({"userName": userName});
    await client.close();
    res.status(200).send({
      "status": "ok",
      "user": user
    });
  })


//update user by username
app.put('/users/update', async(req, res) => {
    const user = req.body;
    const userName = String(req.body.userName);
    const client = new MongoClient(uri);
    await client.connect();
    //ใช้สำหรับตรวจสอบว่ามีข้อมูลอะไรที่ต้องการอัพเดตบ้าง
    const data = {};
    if (user.userId != undefined) {
        data.userId = parseInt(user.userId);
    }
    if (user.newUserName != undefined) {
        data.newUserName = user.newUserName;
    }
    if (user.firstName != undefined) {
        data.firstName = user.firstName;
    }
    if (user.lastName != undefined) {
        data.lastName = user.lastName;
    }
    if (user.age != undefined) {
        data.age = user.age;
    }
    if (user.petName != undefined) {
        data.petName = user.petName;
    }
    //ตัวอย่างชุดการส่งข้อมูลผ่าน postman
    //สามารถลบหัวข้อที่ไม่ต้องการอัพเดตได้โดยไม่ต้องใส่ข้อมูลเดิม
    /*
        {
            "userName": "Santa2",
            "userId": 0,
            "firstName": "testFirstName",
            "lastName": "testLastName",
            "age": "26",
            "petName": [1,2]
        }
    */
    console.log(data);
    await client.db('mydb').collection('users').updateOne({userName: userName}, {"$set": 
        data
        // userId: parseInt(user.userId),
        // newUserName: user.newUserName,
        // firstName: user.firstName,
        // lastName: user.lastName,
        // age: user.age,
        // petName: user.petName
    });
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "User "+user.userName+" is updated",
      "user": user
    });
  })


//delete user by username
app.delete('/users/delete', async(req, res) => {
    const userName = String(req.body.userName);
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('users').deleteOne({'userName': userName});
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "User "+userName+" is deleted"
    });
  })





//create pet
app.post('/pets/create', async(req, res) => {
    const pet = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('pets').insertOne({
      petId: parseInt(pet.petId),
      petName: pet.petName,
      petType: pet.petType
    });
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "pet with ID = "+pet.petId+" is created",
      "pet": pet
    });
  })


//read pets
app.get('/pets', async(req, res) => {
    const petName = String(req.body.petName);
    const client = new MongoClient(uri);
    await client.connect();
    const pets = await client.db('mydb').collection('pets').find({}).toArray();
    await client.close();
    res.status(200).send(pets);
  })


//read pet by petName
app.get('/pets/:petName', async(req, res) => {
    const petName = String(req.params.petName);
    const client = new MongoClient(uri);
    await client.connect();
    const pet = await client.db('mydb').collection('pets').findOne({"petName": petName});
    await client.close();
    res.status(200).send({
      "status": "ok",
      "pet": pet
    });
  })


//update pet by petName
app.put('/pets/update', async(req, res) => {
    const pet = req.body;
    const petName = String(req.body.petName);
    const client = new MongoClient(uri);
    await client.connect();

    const data = {};
    if (pet.petId != undefined) {
        data.petId = parseInt(pet.petId);
    }
    if (pet.newPetName != undefined) {
        data.newPetName = pet.PetName;
    }
    if (pet.petType != undefined) {
        data.petType = pet.petType;
    }
   

  await client.db('mydb').collection('pets').updateOne({petName: petName}, {"$set": data
    // {
    //     petId: parseInt(pet.petId),
    //     petName: pet.petName,
    //     petType: pet.petType
    // }
    });
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "Pet "+pet.petName+" is updated",
      "pet": pet
    });
  })

  
//delete pet by petname
app.delete('/pets/delete', async(req, res) => {
    const petName = String(req.body.petName);
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('pets').deleteOne({'petName': petName});
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "Pet "+petName+" is deleted"
    });
  })
