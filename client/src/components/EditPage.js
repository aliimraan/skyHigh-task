import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Account from './Account'
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditPage() {
    const [record,setRecord]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [mobileNumber,setMobileNo]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [pincode,setPincode]=useState('')
    const [email,setEmail]=useState('')
    const [dob,setDob]=useState('')
    const history=useHistory()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        const config={
            headers:{jwt_react:token}
        }
        axios.get('http://localhost:5000/users/one/user',config).then(data=>{
            setFirstName(data.data.firstName)
            setLastName(data.data.lastName)
            setMobileNo(data.data.mobileNumber)
            setCity(data.data.city)
            setPincode(data.data.pincode)
            setDob(data.data.dob)
            setEmail(data.data.email)
            setState(data.data.state)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    const submitHandler=(e)=>{
        e.preventDefault();
        const token=localStorage.getItem('token')
        const config={
            headers:{
                jwt_react:token
            }
        }
        const data={firstName,lastName,dob,state,city,pincode,email,mobileNumber}
         axios.put('http://localhost:5000/users/update/a/user',data,config).then(data=>{
                if(data.status===200){
                        toast.success(data.data.msg)
                        setTimeout(() => {
                            return history.push('/')
                        }, 5000);
                    }
            }).catch(err=>{
                if(err){
                    err.response.data.error?toast.error(err.response.data.error)
                    :toast.error(err.response.data.msg)
                  
                }
            })
    }
    return (
        <div className="account">
        <div className="account_box">
        <ToastContainer/>
            <div className="box1">
                <img src="/pic3.jpg" alt="image"/>
                <button onClick={()=>history.push('/')}>close</button>
            </div>
            <div className="box2">
                <div className="form_area">
                    <div className="heading">edit your credentials</div>
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="enter firstname" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                    <input type="text" placeholder="enter lastname" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                    <input type="number" placeholder="enter mobile number" value={mobileNumber} onChange={e=>setMobileNo(e.target.value)}/>
                    <input type="email" placeholder="enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="enter state" value={state} onChange={e=>setState(e.target.value)}/>
                    <input type="text" placeholder="enter city" value={city} onChange={e=>setCity(e.target.value)}/>
                    <input type="number" placeholder="enter pincode" value={pincode} onChange={e=>setPincode(e.target.value)}/>
                    <input type="date" placeholder="enter dob" value={dob} onChange={e=>setDob(e.target.value)}/>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditPage
