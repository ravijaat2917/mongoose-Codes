const mongoose = require("mongoose");
const { Schema , model } = mongoose ;

const UserSchema = new Schema({
    
    name:{type:String},
    createdAt:{type:Date},
    updatedAt:{type:Date},
    friends:{type:Schema.Types.ObjectId}
})

const Users = model('Users' , UserSchema);
module.exports = Users;