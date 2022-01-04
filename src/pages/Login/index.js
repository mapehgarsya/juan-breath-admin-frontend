import React from 'react'
import './login.css'
import logo from '../../media/logo-White.png'

const Login = () => {
    return (
        <div className='logincontainer'>
            <div className='loginNav'>
                <img src={logo} alt='logo' height={50} width={50}/>
                <div className='loginNavTitleCont'>
                    <p className='loginNavTitle1'>JuanBreath</p> 
                    <p className='loginNavTitle2'>ADMIN</p>
                </div>
            </div>
            <div className='wrapper'>
                <div className='loginForm'>
                    <h2 className='loginFormTitle'>SIGN IN</h2>
                    <input type='text' placeholder='username' className='inputStyle'/>
                    <input type='password' placeholder='password' className='inputStyle'/>
                    <button className='primaryBlockBtn'>Sign In</button>
                </div>
            </div>
        </div>
        
    )
}

export default Login