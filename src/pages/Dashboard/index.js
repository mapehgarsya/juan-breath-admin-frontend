import React from 'react'
import './dashboard.css'
import Sidebar from '../../components/SideBar'
import HomeNav from '../../components/HomeNav'
// import package/s
import Helmet from 'react-helmet'

const Dashboard = () => {
    return (
        <div className='container'>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Dashboard</title>
            </Helmet>
            <div className='homeWrapper'>
                <Sidebar />
                <div className='navAndContentDiv'>
                    <HomeNav />
                    <div className='contentWrapper'>
                        <h1 className='contentTitle'>Dashboard</h1>
                        
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Dashboard