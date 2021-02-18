const express=require('express')
const router=express.Router()
const {usersRegister,usersLogin,allUsers,oneUser,updateUser}=require('../controllers/users')
const {authenticate}=require('../common-middleware')
const { signUpRequestValidator ,signUpRequestValidatorResult,loginRequestValidator,loginRequestValidatorResult} = require('../validators')

router.post('/register',signUpRequestValidator,signUpRequestValidatorResult,usersRegister)
router.post('/login',loginRequestValidator,loginRequestValidatorResult,usersLogin)
router.get('/all',authenticate,allUsers)
router.get('/one/user',authenticate,oneUser)
router.put('/update/a/user',authenticate,updateUser)

module.exports=router
