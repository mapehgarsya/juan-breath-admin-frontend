import React from 'react'
// import css
import '../Login/login.css'
// import logo
import logo from '../../media/logo-White.png'
// import package
import { Helmet } from 'react-helmet'

const ForgotPassword = () => {
  return (
    <div className='logincontainer'>
        <Helmet>
          <title>JuanBreath | Forgot Password</title>
        </Helmet>
        <div className='loginNav flex-between'>
            <div className='flex-row'>
                <img src={logo} alt='logo' height={50} width={50}/>
                <div className='loginNavTitleCont'>
                    <p className='loginNavTitle1'>JuanBreath</p> 
                    <p className='loginNavTitle2'>ADMIN</p>
                </div>
            </div>
            <div className='signInLinkDiv'>
                <a href='login' className='signInLink'>Sign In</a>
            </div>
        </div>
        <div className='wrapper'>
          {/* Forgot Password Form */}
            <div className='forgotPassForm'>
                <h3 className='loginFormTitle'>Forgot Password</h3>
                <p className='tableCaption'>
                  Please put in the email address that is registered
                  on your admin account to reset the password. Instructions  
                  will be sent to your email address.
                </p>
                <div>
                    <input 
                        type='email' 
                        className='inputStyle'
                        placeholder='Email Address'
                        autoFocus
                    />
                </div>
                <button type='submit' className='primaryBlockBtn'>
                    Continue
                </button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword