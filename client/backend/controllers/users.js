const userModel=require('../models/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.usersRegister=(req,res)=>{
    console.log(req.body)
    const {firstName,lastName,mobileNumber,email,pass,dob,state,city,pincode}=req.body.allInputs
    console.log(pass)
    bcrypt.hash(pass,10).then(hash=>{
        console.log(hash)
        const password=hash
        const newuserModel=new userModel({firstName,lastName,mobileNumber,email,password,dob,state,city,pincode})
        newuserModel.save().then(data=>{
            res.status(200).json({data,msg:'account created successfully'})
        }).catch(err=>{
            req.status(400).json({err,msg:'creation failed'})
        })
    })   
}
exports.usersLogin=(req,res)=>{
    const {email,pass}=req.body.allInputs
    userModel.findOne({email:email}).then(data=>{
        if(!data){
            return res.status(401).json({msg:'not registered user'})
        }
        bcrypt.compare(pass,data.password).then(result=>{
            if(!result){
                return res.status(400).json({msg:"wrong password"})
            }
            const token=jwt.sign({id:data._id},process.env.JWT_AUTH)
            return res.status(200).json({token,data,msg:"you are logged in"})
        })

    }).catch(err=>{
        return res.status(500).json({err})
    })
}
exports.allUsers=(req,res)=>{
    userModel.find().then(data=>{
        return res.status(200).json(data)
    }).catch(err=>{
        return res.status(400).json(err)
    })
}
exports.oneUser=(req,res)=>{
    const id=req.user.id;
    userModel.findById(id).then(data=>{
        return res.status(200).json(data)
    }).catch(err=>{
        return res.status(400).json(err)
    })
}
exports.updateUser=(req,res)=>{
    const id=req.user.id;
    userModel.findByIdAndUpdate(id,req.body).then(data=>{
        if(!data){
            return res.status(400).json({msg:"something went wrong"})
        }
        return res.status(200).json({msg:"account updated"})
    })
}