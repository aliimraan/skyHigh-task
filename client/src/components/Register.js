import React from 'react'
import Account from './Account'

function Register() {
    const register=[
        {type:"text",placeholder:"enter firstname",name:"firstName"},
        {type:"text",placeholder:"enter lastname",name:"lastName"},
        {type:"number",placeholder:"enter mobile no",name:"mobileNo"},
        {type:"email",placeholder:"enter email",name:"email"},
        {type:"password",placeholder:"enter password",name:"pass"},
        {type:"dob",placeholder:"enter dob",name:"dob"},
        {type:"text",placeholder:"enter state",name:"state"},
        {type:"text",placeholder:"enter city",name:"city"},
        {type:"number",placeholder:"enter pincode",name:"pincode"},
      ]
    return (
        <div>
            <Account heading="create you account now" button="login" submit="register" data={register} redirect="/login" />
        </div>
    )
}

export default Register
