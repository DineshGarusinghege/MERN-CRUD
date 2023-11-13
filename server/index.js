const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const UserModel = require('./models/Users');


const app = express();
app.use(cors());
app.use(express.json());


app.listen(8080, ()=>{
    console.log("Server is Running")
});


// mongoDB conneciton
mongoose.connect("mongodb://localhost:27017/MERNCRUD")

const conneciton = mongoose.connection;

conneciton.on('open',()=>{
    console.log('MongoDB is Connected')
})


// routes
app.post('/createUser',(req, res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})


app.get('/', (req, res)=>{
    UserModel.find({})
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})


app.get('/getUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})


app.delete('/deleteUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})


app.patch('/updateUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name: req.body.name,
        email: req.body.emai,
        age: req.body.age
    })
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})