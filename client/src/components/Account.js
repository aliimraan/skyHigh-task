import React,{useState} from 'react'
import Inputs from './Inputs'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Account({heading,button,submit,data,redirect,src}) {
    const [allInputs,setInputs]=useState('')
    const history=useHistory()
    const showInputs=(data)=>{
        if(data===undefined){
            return "loading"
        }
        return data.map((item,index)=>{
            const {name}=item
            return(
                <Inputs type={item.type} placeholder={item.placeholder} key={index} name={name}  onChange={e=>changeHandler(e)}/>
            )
        })
    }
    const changeHandler=(e)=>{
      const {name,value}=e.target;
    setInputs({...allInputs,[name]:value})
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const data={allInputs}
        if(e.target.length>3){
            return axios.post('http://localhost:5000/users/register',data).then(data=>{
                if(data.status===200){
                    toast.success(data.data.msg)
                    setTimeout(() => {
                        history.push('/login')
                    }, 5000);   
                }
            }).catch(err=>{
                if(err){
                    err.response.data.error?toast.error(err.response.data.error)
                    :toast.error(err.response.data.msg)
                  
                }
            })
        }else{
            return axios.post('http://localhost:5000/users/login',data).then(data=>{
                const token=data.data.token
                localStorage.setItem('token',token)
                localStorage.setItem('name',data.data.data.firstName)
                localStorage.setItem('id',data.data.data._id)
                if(data.status===200){
                    if(data.status===200){
                        toast.success(data.data.msg)
                        setTimeout(() => {
                            history.push('/')
                        }, 5000);
                    }
                }
            }).catch(err=>{
                if(err){
                    err.response.data.error?toast.error(err.response.data.error)
                    :toast.error(err.response.data.msg)
                  
                }
            })
        }
       
    }
    return (
        <div className="account">
            <div className="account_box">
            <ToastContainer/>
                <div className="box1">
                    <img src={src} alt="image"/>
                    <button onClick={()=>history.push(redirect)}>{button}</button>
                </div>
                <div className="box2">
                    <div className="form_area">
                        <div className="heading">{heading}</div>
                        <form onSubmit={submitHandler}>
                            <div className="inputs_area">
                                {showInputs(data)}
                            </div>
                            <button type="submit">{submit}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
