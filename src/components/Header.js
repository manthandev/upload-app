import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
       <div>
        <Navbar> 
            <NavbarBrand className="brand mr-auto" href="/"><span className="fa fa-cloud fa-lg"></span> Cloudinary Upload</NavbarBrand>
            <Nav>
            <NavItem >
            <NavLink className="nav-link" to="/signup">
            <span className="fa fa-user-plus fa-lg"></span> Sign Up
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" to="/login">
            <span className="fa fa-sign-in fa-lg"></span> Login
            </NavLink> 
            </NavItem>
            </Nav>
        </Navbar>
       </div>
    )
}

export default Header
