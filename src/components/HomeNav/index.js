import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaUserCircle, FaCogs, FaSignOutAlt } from "react-icons/fa";
// stylesheet
import './homeNav.css'

const logout = () => {
    // add all items on the local storage related to users session and information
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    window.location.href ="/"
}

const HomeNav = ({ showResetPasswordModal }) => {

    const [fullName, setUserFullName] = useState('');

    useEffect(() => {
        try {
            // get the local token, decode and reuse the users user name as navbar header
            const token = localStorage.getItem('accessToken');
            const decodedToken = token ? jwtDecode(token) : null
            
            if(decodedToken) {
                setUserFullName(decodedToken.firstName + " " + decodedToken.lastName)
            }

        } catch (error) {
            setUserFullName('JuanBreath Admin')   
        }
    },[]);

    return (
        <Navbar className='homeNav' expand="lg">
            <Navbar.Collapse className="justify-content-end">
                <Nav className='align-left'>
                    <NavDropdown title={fullName} className="homeNavGreeting" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile"><FaUserCircle/> Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={showResetPasswordModal}><FaCogs/> Reset Password</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#" onClick={() => logout()}><FaSignOutAlt/> Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HomeNav