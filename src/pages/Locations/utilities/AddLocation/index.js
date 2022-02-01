import React from 'react'
import Sidebar from '../../../../components/SideBar'
import HomeNav from '../../../../components/HomeNav'
// import package/s
import { useForm } from 'react-hook-form'
import Helmet from 'react-helmet'
// css
import './addLocation.css'

const AddLocation = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log(data)


    return (
        <div className='customContainer '>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Add Location</title>
            </Helmet>
            <div className='homeWrapper'>
                <Sidebar />
                <div className='navAndContentDiv'>
                    <HomeNav />
                    <div className='contentWrapper'>
                        <div className='contentDiv'>
                            <div className='utilityDiv'>
                                <h2 className='mb-10'>Add a Location</h2>
                                <p className='utilityDesc mb-10'>
                                    This form will let you add a new location to the system.
                                    Please fill in the details for the new location.
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label>Name</label>
                                        <input 
                                            className='inputStyle' 
                                            placeholder='name of the location'
                                            {...register('name', {required: true})}
                                        />
                                        <p className='inputErrorMessage'>{errors.name?.type === 'required' && "Location's name is required."}</p>
                                    </div>
                                    <div>
                                        <label>Location Address</label>
                                        <input 
                                            className='inputStyle' 
                                            placeholder='address'
                                            {...register('address', {required: true})}
                                        />
                                        <p className='inputErrorMessage'>{errors.name?.type === 'required' && "Location's address is required."}</p>
                                    </div>
                                    <div>
                                        <label>Officer In Charge</label>
                                        <input 
                                            className='inputStyle' 
                                            placeholder='name of officer in charge'
                                            {...register('officer', {required: true})}
                                        />
                                        <p className='inputErrorMessage'>{errors.name?.type === 'required' && "Officer in charge is required."}</p>
                                    </div>
                                    <button type='submit' className='primaryBlockBtn'>Add Location</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    )
}

export default AddLocation