import React, { useState } from 'react'
// import from backend
import { loginAdmin } from "../../services/auth/login";
// import css
import './login.css'
// import logo
import logo from '../../media/logo-White.png'
// import package/s
import { useForm } from 'react-hook-form'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner'
import FileDownload from "js-file-download";
import axios from 'axios';

const Login = () => {
    
    const { register, handleSubmit, formState: {errors} } = useForm(); 
    const [viewPassword, setViewPassword] = useState(false)   
    const [validationError, setErrors] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [percentage, setPercentage] = useState(0);

    // this will provide the users current page location
    const onSubmit = async (usersCredentials) => {
        try {
            setIsSubmitting(!isSubmitting)
            const { data } = await loginAdmin(usersCredentials);
            // check if ther are response from the data
            if(data.success) {
                // set the generated token to the local storage
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                // navigate inside the application
                window.location.href = "/dashboard"
            }

        } catch (error) {
            if(error.response?.status === 400) {
                setIsSubmitting(false)
                setErrors(error.response.data?.message)
            }
        }
    }

    const passwordToggleBtn = () => {
        setViewPassword(prevState => !prevState)
    }

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
            alert(err)
            setIsDownloading(false)
        })
    }

    return (
        <div className='logincontainer'>
            <div className='loginNav'>
                <img src={logo} alt='logo' height={50} width={50}/>
                <div className='loginNavTitleCont' onClick={() => { window.location.href = "/" }}>
                    <p className='loginNavTitle1'>JuanBreath</p> 
                    <p className='loginNavTitle2'>ADMIN</p>
                </div>
            </div>
            {
                !isDownloading && <button onClick={() => downloadApp() }>Download JuanBreath Mobile Application</button>
            }
            {
                isDownloading && <>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner><p>Download {percentage}%</p>
                </>
            }
            {/* Delete this button once download fu */}
            {/* <button onClick={() => downloadApp() }>Download JuanBreath Mobile Application</button> */}
            <div className='wrapper'>
                <div className='loginForm'>
                    <h3 className='loginFormTitle'>SIGN IN</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Username</label>
                            <input 
                                type='text' 
                                className='inputStyle'
                                autoFocus
                                {...register('username', {required: true})}
                            />
                            <p className='inputErrorMessage'>{errors.username?.type === 'required' && "Username is required."}</p>
                        </div>
                        <div>
                            <label>Password</label>
                            <div className='passwordInputGrp'>
                                <input 
                                    type={viewPassword ? 'text' : 'password'}
                                    className='inputPasswordStyle'
                                    {...register('password', {required: true})}
                                />
                                <div className='eyeIconBtn' onClick={passwordToggleBtn}>
                                    {viewPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                </div>
                            </div>
                            <p className='inputErrorMessage'>{(errors.password?.type === 'required' && "Password is required.") || validationError}</p>
                        </div>
                        <div className='mb-10'>
                            <a className='forgotPassLink' href='forgot-password'>Forgot Password?</a>
                        </div>
                        <button type='submit' className='primaryBlockBtn'>
                            {
                                isSubmitting ? 
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                :   "Sign In"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login