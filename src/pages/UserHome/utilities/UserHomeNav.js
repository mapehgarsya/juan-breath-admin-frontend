import React from 'react'
// import css
import '../userhome.css'
// import media
import logo from '../../../media/logo-White.png'

const UserHomeNav = () => {
    return (
        <div className='userHomeNav'>
            <div className='appTitle'>
                <img src={logo} height={40} alt='JuanBreath Logo' className='mr-10'/>
                <h3>JuanBreath</h3>
            </div>
            <div className='signInLinkDiv'>
                <a href='/login' className='signInLink'>Admin</a>
            </div>
        </div>
    )
}

export default UserHomeNav