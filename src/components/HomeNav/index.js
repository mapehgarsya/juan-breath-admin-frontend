import React from 'react'
import './homeNav.css'

const logout = () => {
    // add all items on the local storage related to users session and information
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    window.location.href ="/"
}

const HomeNav = () => {
    return (
        <div className='homeNav'>
            <h5 className='homeNavGreeting'>Hello Main Admin!</h5>
            <button onClick={e => logout()} className='secondaryBtn'>Sign Out</button>
        </div>
    )
}

export default HomeNav