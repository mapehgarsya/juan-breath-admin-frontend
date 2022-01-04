import React from 'react'
import './dashboard.css'
import Sidebar from '../../components/SideBar'
import HomeNav from '../../components/HomeNav'

const Dashboard = () => {
    return (
        <div className='container'>
            <div className='homeWrapper'>
                <Sidebar />
                <HomeNav />
                <div className='contentWrapper'>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard