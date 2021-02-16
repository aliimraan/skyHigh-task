const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express()
require('dotenv').config()
const usersRoute=require('./routes/users')

mongoose.connect(process.env.DB_CONN,{useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('db connected')
})
app.get('/',(req,res)=>{
    res.send('hello from node')
})
app.use(cors())
app.use(bodyParser.json())
app.use('/users',usersRoute)


app.listen(5000,()=>console.log('server started'))