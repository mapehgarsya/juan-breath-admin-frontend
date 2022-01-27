import React, { useState } from 'react'
import './login.css'
import logo from '../../media/logo-White.png'
import { useForm } from 'react-hook-form'
import { loginAdmin } from "../../services/auth/login";
import { useLocation, Navigate } from 'react-router-dom';

const Login = () => {
    
    const { register, handleSubmit, formState: {errors} } = useForm();    
    const [validationError, setErrors] = useState('');
    // this will provide the users current page location
    let location = useLocation();

    const onSubmit = async (usersCredentials) => {
        try {
            const { data } = await loginAdmin(usersCredentials);
            console.log(data)
            // check if ther are response from the data
            if(data.success) {
                // set the generated token to the local storage
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                // navigate inside the application
                return <Navigate to="/dashboard" state={{ from: location }}  replace />
            }

        } catch (error) {
            if(error.response.status === 400) {
                setErrors(error.response.data?.message)
            }
        }
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
                    <h2 className='loginFormTitle'>SIGN IN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Username</label>
                            <input 
                                type='text' 
                                placeholder='usename'
                                className='inputStyle'
                                autoFocus
                                {...register('username', {required: true})}
                            />
                            <p className='inputErrorMessage'>{errors.username?.type === 'required' && "Username is required."}</p>
                        </div>
                        <div>
                            <label>Password</label>
                            <input 
                                type='password' 
                                placeholder='password'
                                className='inputStyle'
                                {...register('password', {required: true})}
                            />
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