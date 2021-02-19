import React from 'react'
import Account from './Account'

function Register() {
    const register=[
        {type:"text",placeholder:"enter firstname",name:"firstName"},
        {type:"text",placeholder:"enter lastname",name:"lastName"},
        {type:"number",placeholder:"enter mobile no",name:"mobileNumber"},
        {type:"email",placeholder:"enter email",name:"email"},
        {type:"password",placeholder:"enter password",name:"pass"},
        {type:"text",placeholder:"enter state",name:"state"},
        {type:"text",placeholder:"enter city",name:"city"},
        {type:"number",placeholder:"enter pincode",name:"pincode"},
        {type:"date",placeholder:"enter dob",name:"dob"},
      ]
    return (
        <div>
            <Account heading="create you account now" button="login" submit="register" data={register} redirect="/login" src="/pic1.jpg" />
        </div>
    )
}

export default Register
