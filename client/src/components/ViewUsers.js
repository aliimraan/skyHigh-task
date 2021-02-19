import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function ViewUsers() {
    const [rec,setRec]=useState([])
    const history=useHistory()
    useEffect(() => {
        const config={
            headers:{jwt_react:localStorage.getItem('token')}
        }
       axios.get('http://localhost:5000/users/all',config).then(data=>{
           setRec([data.data])
       }).catch(err=>{
        if(err.response.status===401){
            history.push('/login')
        }
       })
    }, [rec])
    
    const showTable=(el)=>{
        if(el===[]){
            return "loading"
        }
        if(el===undefined){
            return "loading"
        }
        if(el[0]===undefined){
            return "loading"
        }
         return el[0].map((item,index)=>{
            const {firstName,lastName,email,mobileNumber,dob}=item
            index++
            return (
                <tr style={{color:'white'}}>
                    <td>{index++}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{mobileNumber}</td>
                    <td>{dob}</td>
              </tr>
            )
        })
    }
    return (
        <div className="all_users">
            <div className="table_area">
            <h4>list of all users</h4>
            <Table striped bordered hover responsive>
            <thead style={{color:'white'}}>
              <tr>
                <th>s.no</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
                {showTable(rec)}
            </tbody>
          </Table>
            </div>
        </div>
    )
}

export default ViewUsers
