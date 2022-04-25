import React from 'react'
// import css
import './userhome.css'
// import media
import logo from '../../media/logo-White.png'
// import package/s
import Helmet from 'react-helmet'

const UserHome = () => {
  return (
    <div className='userHomeWrapper'>
        {/* Helmet for page's title*/}
        <Helmet>
                <title>JuanBreath - Contact Tracing App</title>
            </Helmet>
        <div className='userHomeBody'>
            <div className='appTitle'>
                <img src={logo} height={40} alt='JuanBreath Logo' className='mr-10'/>
                <h3>JuanBreath</h3>
            </div>
            <div className='userHomeCont'>
                <div className='userHomeTexts'>
                    <h1>Your privacy is not sacrificed to ensure your safety.</h1>
                    <p>
                    <b>JuanBreath</b> is a contact tracing app developed to help the nation 
                    from the adverse effects on the spread the COVID-19 virus.
                    </p>
                </div>
                <div className='userHomeIllustration'>
                </div>
            </div>
        </div>
        <div className='userHomeFooter'>
            <div class="custom-shape-divider-bottom-1650461962">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className=''>
                <p>NG Tech</p>
            </div>    
        </div> 
    </div>
  )
}

export default UserHome