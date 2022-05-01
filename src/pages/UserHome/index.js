import React from 'react'
// import css
import './userhome.css'
// import utilities
import UserHomeNav from './utilities/UserHomeNav'
// import package/s
import Helmet from 'react-helmet'
import FileDownload from "js-file-download";

const UserHome = () => {

    // ADD this function on onClick of download Button
    // const downloadApp =  () => {
    //     axios({
    //         url: "https://juanbreath-server.herokuapp.com/api/app/download",
    //         method: "GET",
    //         responseType: "blob"
    //     }).then((res) => {
    //         FileDownload(res.data, "JuanBreath App.apk")
    //     }).catch((err) => {
    //         alert(err)
    //     })
    // }

    return (
        <div className='userHomeWrapper'>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath - Contact Tracing App</title>
            </Helmet>
            <UserHomeNav />
            <div className='userHomeBody'>
                <div className='userHomeCont'>
                    <div className='userHomeTexts'>
                        <h1>Your privacy is not sacrificed to ensure your safety.</h1>
                        <h6>
                        <b>JuanBreath</b> is a contact tracing app developed to help the nation 
                        from the adverse effects on the spread the COVID-19 virus.
                        </h6>
                        <button className='accentBtn downloadAppBtn' >Download JuanBreath Mobile App</button>
                    </div>
                    <div className='userHomeIllustration'>
                    </div>
                </div>
            </div>
            <footer className='userHomeFooter'>
                <p> JuanBreath © 2022 | <a href='/'> Terms and Conditions</a></p>
            </footer>
        </div>
    )
}

export default UserHome