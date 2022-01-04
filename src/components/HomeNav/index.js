import React from 'react'
import './homeNav.css'
import Sidebar from '../../components/SideBar'

const HomeNav = () => {
    return (
        <div className='homeNav'>
            <h4 className='homeNavGreeting'>Hello Main Admin!</h4>
            <button className='secondaryBtn'>Sign Out</button>
        </div>
    )
}

export default HomeNav