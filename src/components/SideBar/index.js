import React from 'react'
import logo from '../../media/logo-Blue.png'
import './sideBar.css'

const Sidebar = () => {
    // figure out how to change color of the link of an active page
    return (
        <div className='sideBarContainer'>
            <div className='companyGrp'>
                <img src={logo} alt='logo' height={50} className='companyLogo'/>
                <h2 className='companyName'>JuanBreath</h2>
            </div>
            <li className='sideBarItems'>
                <a href='/dashboard' className='sideBarItem'>
                    <span class="dot"></span>
                    Dashboard
                </a>
                <a  href='#' className='sideBarItem'>
                    <span class="dot"></span>
                    Location
                </a>
                <a  href='#' className='sideBarItem'>
                    <span class="dot"></span>
                    Contact Tracing Logs
                </a>
                <a  href='#' className='sideBarItem'>
                    <span class="dot"></span>
                    Admin Management
                </a>
                <a  href='#' className='sideBarItem'>
                    <span class="dot"></span>
                    Admin App
                </a>
            </li>
        </div>
        
    )
}

export default Sidebar