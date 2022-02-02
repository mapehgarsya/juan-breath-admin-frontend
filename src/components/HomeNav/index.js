import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
// stylesheet
import './homeNav.css'

const logout = () => {
    // add all items on the local storage related to users session and information
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    window.location.href ="/"
}

const HomeNav = () => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        try {
            // get the local token, decode and reuse the users user name as navbar header
            const token = localStorage.getItem('accessToken');
            const decodedToken = token ? jwtDecode(token) : null

            if(decodedToken) {
                setUsername(decodedToken.username)
            }

        } catch (error) {
            setUsername('Admin')   
        }
    },[]);

    return (
        <div className='homeNav'>
            <h5 className='homeNavGreeting'> {username}</h5>
            <button onClick={e => logout()} className='secondaryBtn'>Sign Out</button>
        </div>
    )
}

export default HomeNav