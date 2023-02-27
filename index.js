const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/practice';
const dotenv = require('dotenv');
const Users = require('./model/users');

dotenv.config();
mongoose.set('strictQuery', false);

const user1 = new Users({
    name:"Ravi",
    createdAt:Date.now(),
    updatedAt:Date.now(),
    friends:'63fc47107b02b22870ddeb1f'
})

mongoose.connect(mongoDB, { useNewUrlParser: true } ,async ()=>{
    console.log('Connected Successfully...');
    await user1.save().then(console.log("Saved Successfully"));  //To add the row in the collection named users
},(console.error()));


