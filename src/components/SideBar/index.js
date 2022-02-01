import React from 'react'
import logo from '../../media/logo-Blue.png'
import './sideBar.css'
// import icon/s
import { FaChartBar, FaMapMarkerAlt, FaAlignJustify, FaUserFriends } from "react-icons/fa";
import { MdPhonelinkSetup } from "react-icons/md"
import {BsPhoneFill} from "react-icons/bs"

const Sidebar = () => {
    // figure out how to change color of the link of an active page
    return (
        <div className='sideBarContainer'>
            <div className='companyGrp'>
                <img src={logo} alt='logo' height={45} className='companyLogo'/>
                <h4 className='companyName'>JuanBreath</h4>
            </div>
            <li className='sideBarItems'>
                <a href='/dashboard' className='sideBarItem'>
                    
                    <FaChartBar className='mr-10' height={50}/>
                    Dashboard
                </a>
                <a  href='/locations' className='sideBarItem'>
                    <FaMapMarkerAlt className='mr-10'/>
                    Locations
                </a>
                <a  href='/contact-tracing-logs' className='sideBarItem'>
                    <FaAlignJustify className='mr-10'/>
                    Contact Tracing Logs
                </a>
                <a  href='/admin-management' className='sideBarItem'>
                    <FaUserFriends className='mr-10'/>
                    Admin Management
                </a>
                <a  href='#' className='sideBarItem'>
                    {/* <MdPhonelinkSetup className='mr-10'/> */}
                    <BsPhoneFill className='mr-10'/>
                    Admin App
                </a>
            </li>
        </div>
        
    )
}
export default Sidebar