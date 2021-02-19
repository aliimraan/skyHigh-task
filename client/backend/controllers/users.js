const userModel=require('../models/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.usersRegister=(req,res)=>{
    const {firstName,lastName,mobileNumber,email,pass,dob,state,city,pincode}=req.body.allInputs

    bcrypt.hash(pass,10).then(hash=>{
        const password=hash
        const newuserModel=new userModel({firstName,lastName,mobileNumber,email,password,dob,state,city,pincode})
        newuserModel.save().then(data=>{
            res.status(200).json({data,msg:'Account created successfully'})
        }).catch(err=>{
            res.status(400).json({err,msg:'creation failed'})
        })
    })   
}
exports.usersLogin=(req,res)=>{
    const {email,pass}=req.body.allInputs
    userModel.findOne({email:email}).then(data=>{
        if(!data){
            return res.status(401).json({msg:'Not registered user,Please register first'})
        }
        bcrypt.compare(pass,data.password).then(result=>{
            if(!result){
                return res.status(400).json({msg:"Wrong password"})
            }
            const token=jwt.sign({id:data._id},process.env.JWT_AUTH)
            return res.status(200).json({token,data,msg:"You are logged in"})
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
            return res.status(400).json({msg:"Something went wrong"})
        }
        return res.status(200).json({msg:"Account updated"})
    })
}