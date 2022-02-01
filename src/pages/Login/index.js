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


const Login = () => {
    
    const { register, handleSubmit, formState: {errors} } = useForm(); 
    const [viewPassword, setViewPassword] = useState(false)   
    const [validationError, setErrors] = useState('');
    // this will provide the users current page location
    const onSubmit = async (usersCredentials) => {
        try {
            const { data } = await loginAdmin(usersCredentials);
            
            // check if ther are response from the data
            if(data.success) {
                console.log('passing')
                // set the generated token to the local storage
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                // navigate inside the application
                
                /**
                 *  Developer's Note: Temporary fix for redirecting current path,
                 *  Reasons: React router dom version 6
                 *  This fix only uses the browsers native redirecting method
                 */

                window.location.href = "/dashboard"

            }

        } catch (error) {
            if(error.response.status === 400) {
                setErrors(error.response.data?.message)
            }
        }
    }

    const passwordToggleBtn = () => {
        setViewPassword(prevState => !prevState)
    }

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
                                <a className='eyeIconBtn' onClick={passwordToggleBtn}>
                                    {viewPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                </a>
                            </div>
                            <p className='inputErrorMessage'>{(errors.password?.type === 'required' && "Password is required.") || validationError}</p>
                        </div>
                        <button type='submit' className='primaryBlockBtn'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login