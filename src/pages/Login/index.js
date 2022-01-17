import React from 'react'
import './login.css'
import logo from '../../media/logo-White.png'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log(data)

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
                            <p className='inputErrorMessage'>{errors.password?.type === 'required' && "Password is required."}</p>
                        </div>
                        <button type='submit' className='primaryBlockBtn'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login