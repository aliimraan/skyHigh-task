import React from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>skyHigh</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">All users</Link>
           </Nav>
          <Nav>
            <Link to="/account">hello imran</Link>
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
