import React from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{backgroundColor:'green'}}>
        <Navbar.Brand style={{fontWeight:'700',fontSize:'2rem'}}>skyHigh</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" style={{textDecoration:'none',fontSize:'1.3rem',color:'white',padding:'10px'}}>Users</Link>
           </Nav>
          <Nav>
            <Link to="/account" style={{textDecoration:'none',fontSize:'1.3rem',color:'white',padding:'10px',textTransform:'capitalize'}}>Account</Link>
            <Button eventKey={2} onClick={()=>localStorage.clear()}>
              logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default Header
