const {check,validationResult} =require('express-validator')

exports.signUpRequestValidator=[
    check('allInputs.firstName')
    .notEmpty()
    .withMessage('firstName is required'),

    check('allInputs.lastName')
    .notEmpty()
    .withMessage('lastName is required'),

    check('allInputs.mobileNumber')
    .notEmpty()
    .withMessage('mobile Number is required')
    .isLength({min:10,max:11})
    .withMessage('Enter valid mobile number'),

    check('allInputs.email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('valid email is required'),

    check('allInputs.pass')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:4})
    .withMessage('password length mustbe greater than 4 characters'),

    check('allInputs.dob')
    .notEmpty()
    .withMessage('dob is required'),

    check('allInputs.state')
    .notEmpty()
    .withMessage('state is required'),

    check('allInputs.city')
    .notEmpty()
    .withMessage('city is required'),

    check('allInputs.pincode')
    .notEmpty()
    .withMessage('pincode is required'),

];

exports.signUpRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    console.log(error)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}

exports.loginRequestValidator=[
    check('allInputs.email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('valid email is required'),

    check('allInputs.pass')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:4})
    .withMessage('password must be atleast 3 character long'),
];

exports.loginRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    console.log(error)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}

exports.editRequestValidator=[
    check('firstName')
    .notEmpty()
    .withMessage('First Name is required'),

    check('lastName')
    .notEmpty()
    .withMessage('Last Name is required'),

    check('mobileNumber')
    .notEmpty()
    .withMessage('mobile Number is required')
    .isLength({min:10,max:11})
    .withMessage('Enter valid mobile number'),

    check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('valid email is required'),

    check('dob')
    .notEmpty()
    .withMessage('DOB is required'),

    check('state')
    .notEmpty()
    .withMessage('State is required'),

    check('city')
    .notEmpty()
    .withMessage('City is required'),

    check('pincode')
    .notEmpty()
    .withMessage('Pincode is required'),

];

exports.editRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    console.log(error)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}