import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import { useHistory,Link} from 'react-router-dom'
import {Card,ListGroup} from 'react-bootstrap'

function ViewAccount() {
    const [record,setRecord]=useState([]);
    const history=useHistory()
    useEffect(()=>{

       const token=localStorage.getItem('token')
       const config={
           headers:{jwt_react:token}
       }
       axios.get('http://localhost:5000/users/one/user',config).then(data=>{
           setRecord(data.data)
       }).catch(err=>{
           if(err.response.status===401){
               history.push('/login')
           }
       })
    },[record])
    const {firstName,lastName,mobileNumber,email,dob,state,city,pincode}=record
    return (
        <div>
        <Header/>
        <div className="personal_area">
            <Card className="card" style={{ width: '28rem',background:'#20204b' }}>
    <Card.Header className="heading">Account Details</Card.Header>
    <ListGroup variant="flush" >
        <ListGroup.Item>First name:<span>{firstName}</span></ListGroup.Item>
        <ListGroup.Item>Last name:<span>{lastName}</span></ListGroup.Item>
        <ListGroup.Item>Mobile number:<span>{mobileNumber}</span></ListGroup.Item>
        <ListGroup.Item>Email:<span>{email}</span></ListGroup.Item>
        <ListGroup.Item>DOB:<span>{dob}</span></ListGroup.Item>
        <ListGroup.Item>State:<span>{state}</span></ListGroup.Item>
        <ListGroup.Item>City:<span>{city}</span></ListGroup.Item>
        <ListGroup.Item>Pincode:<span>{pincode}</span></ListGroup.Item>
        <Link to="/edit" className="link">edit</Link>
        
    </ListGroup>
    </Card>
           </div> 
        </div>
    )
}

export default ViewAccount


// <div className="personal_area">
            //     <div className="box_area">
            //         <div className="heading">account details</div>
            //         <div className="details_area">
            //             <h5>firstname:<span>{firstName}</span></h5>
            //             <h5>lastname:<span>{lastName}</span></h5>
            //             <h5>mobile No:<span>{mobileNumber}</span></h5>
            //             <h5>email:<span style={{textTransform:'lowercase'}}>{email}</span></h5>
            //             <h5>dob:<span>{dob}</span></h5>
            //             <h5>state:<span>{state}</span></h5>
            //             <h5>city:<span>{city}</span></h5>
            //             <h5>pincode:<span>{pincode}</span></h5>
            //         </div>
            //         <button><Link to="/edit">edit</Link></button>
            //     </div>

            // </div>