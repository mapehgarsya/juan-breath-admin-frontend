import React, {useEffect} from 'react'
// import css
import '../../Login/login.css'
// import media
import logo from '../../../media/logo-White.png'
import mailArt from '../../../media/mail-sent-rafiki.png'
// import package
import { Helmet } from 'react-helmet'

const ForgotPasswordNotification = () => {

    useEffect(() => {
        localStorage.removeItem('shortlivekey');
    },[])

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
                <a href='/login' className='signInLink'>Sign In</a>
            </div>
        </div>
        <div className='wrapper'>
            <div className='forgotPassNotifForm'>
                <div className='mailArtDiv'>
                    <img src={mailArt} alt='mail sent' height={250} width={250}/>
                </div>
                <div className='fpNotifText'>
                    <h4>The email has been sent to your account successfully!</h4>
                    <p>
                        Please check your email account to know the next steps you have
                        to follow to access your admin account.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPasswordNotification