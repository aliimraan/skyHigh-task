const mongoose=require('mongoose')

const usersSchema=new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    mobileNumber:{type:Number},
    email:{type:String,unique:true},
    password:{type:String},
    dob:{type:String},
    state:{type:String},
    city:{type:String},
    pincode:{type:Number},
})
const usersModel=mongoose.model('users',usersSchema)
module.exports=usersModel