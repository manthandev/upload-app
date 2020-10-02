import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
       <div>
        <Navbar dark color="primary">
            <NavbarBrand href="/">Cloudinary Upload</NavbarBrand>
            <Nav pullRight>
            <NavItem >
            <NavLink className="nav-link" to="/signup">
            <span></span> Sign Up
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" to="/login">
            <span></span> Login
            </NavLink> 
            </NavItem>
          </Nav>
        </Navbar>
       </div>
    )
}

export default Header
