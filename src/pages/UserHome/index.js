import React, { useState } from 'react'
// import css
import './userhome.css'
// import utilities
import UserHomeNav from './utilities/UserHomeNav'
// import package/s
import Helmet from 'react-helmet'
import FileDownload from "js-file-download";
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';

const UserHome = () => {
    
    const [isDownloading, setIsDownloading] = useState(false);
    const [percentage, setPercentage] = useState(0);

    // ADD this function on onClick of download Button
    const downloadApp =  () => {
        setIsDownloading(true)
        let progress = 0;
        axios({
            url: "https://juanbreath-server.herokuapp.com/api/app/download",
            onDownloadProgress(progressEvent){
                progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setPercentage(progress);
            },
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            setIsDownloading(false)
            FileDownload(res.data, "JuanBreath App.apk")
        }).catch((err) => {
            setIsDownloading(false)
            alert(err)
        })
    }

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
                        { !isDownloading &&  <button className='accentBtn downloadAppBtn' onClick={() => {downloadApp()}}>Download JuanBreath Mobile App</button>}
                        {
                            isDownloading && <>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner><p>Download {percentage}%</p>
                            </>
                        }
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