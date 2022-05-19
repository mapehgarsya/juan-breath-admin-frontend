import React, { useState } from 'react'
import logo from '../../media/logo-Blue.png'
import './sideBar.css'
// import icon/s
import { FaChartBar, FaMapMarkerAlt, FaAlignJustify, FaUserFriends, FaIdBadge, FaPlus } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs"
import axios from 'axios';
import FileDownload from "js-file-download";
import Spinner from 'react-bootstrap/Spinner'

const Sidebar = () => {
    // figure out how to change color of the link of an active page

    const [isDownloading, setIsDownloading] = useState(false);
    const [percentage, setPercentage] = useState(0);

    // ADD this function on onClick of download Button
    const downloadApp =  () => {
        setIsDownloading(true)
        let progress = 0;
        axios({
            url: "https://juanbreath-server.herokuapp.com/api/admin/app/download",
            onDownloadProgress(progressEvent){
                progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setPercentage(progress);
            },
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            setIsDownloading(false)
            FileDownload(res.data, "JuanBreath Admin App.apk")
        }).catch((err) => {
            setIsDownloading(false)
            alert(err)
        })
    }

    return (
        <div className='sideBarContainer'>
            <div className='companyGrp'>
                <img src={logo} alt='logo' height={45} className='companyLogo'/>
                <div className='TitleCont'>
                    <h4 className='companyName'>JuanBreath</h4> 
                    <p className='companyName2'>ADMIN</p>
                </div>
            </div>
            <li className='sideBarItems'>
                <a href='/dashboard' className={`sideBarItem ${window.location.pathname === '/dashboard' && 'active'}`}>
                    
                    <FaChartBar className='mr-10' height={50}/>
                    Dashboard
                </a>
                <a  href='/locations' className={`sideBarItem ${window.location.pathname === '/locations' && 'active'}`}>
                    <FaMapMarkerAlt className='mr-10'/>
                    Locations
                </a>
                <a  href='/visitation-logs' className={`sideBarItem ${window.location.pathname === '/visitation-logs' && 'active'}`}>
                    <FaAlignJustify className='mr-10'/>
                    Visitation Logs
                </a>
                <a  href='/positive-tracing-logs' className={`sideBarItem ${window.location.pathname === '/positive-tracing-logs' && 'active'}`}>
                    <FaPlus className='mr-10'/>
                    Positive Update Logs
                </a>
                <a  href='/admin-management' className={`sideBarItem ${window.location.pathname === '/admin-management' && 'active'}`}>
                    <FaUserFriends className='mr-10'/>
                    Admin Management
                </a>
                <a  href='/user-management' className={`sideBarItem ${window.location.pathname === '/user-management' && 'active'}`}>
                    <FaUserFriends className='mr-10'/>
                    User Management
                </a>
                <a  href='/roles-and-permissions' className={`sideBarItem ${window.location.pathname === '/roles-and-permissions' && 'active'}`}>
                    <FaIdBadge className='mr-10'/>
                    Roles &amp; Permissions
                </a>
                {
                    !isDownloading && <p onClick={() => { downloadApp()}} className={`sideBarItem`}>
                        {/* <MdPhonelinkSetup className='mr-10'/> */}
                        <BsPhoneFill className='mr-10'/>
                        Download App
                    </p>
                }
                {
                    isDownloading && <>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner><p>Download {percentage}%</p>
                    </>
                }
            </li>
        </div>
        
    )
}
export default Sidebar