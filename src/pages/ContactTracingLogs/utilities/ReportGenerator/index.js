import React from 'react'
import Sidebar from '../../../../components/SideBar'
import HomeNav from '../../../../components/HomeNav'
import './reportGenerator.css'
// import package/s
import { useForm } from 'react-hook-form'
import Helmet from 'react-helmet'

const ReportGenerator = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <div className='customContainer '>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Generate Report</title>
            </Helmet>
            <div className='homeWrapper'>
                <Sidebar />
                <div className='navAndContentDiv'>
                    <HomeNav />
                    <div className='contentWrapper'>
                        {/* <h1 className='contentTitle pb-10'>Contact Tracing Logs</h1> */}
                        <div className='contentDiv'>
                            <div className='reportDiv'>
                                <h2 className='mb-10'>Generate a Report</h2>
                                <p className='mb-10'>
                                    This form will create an excel file report of contact logs. 
                                    The following inputs will help you filter a specific location, date, 
                                    and time you want to generate.
                                </p>
                                {/* Location */}
                                    <select className='inputStyle mr-10'>
                                        <option>Anywhere</option>
                                        <option>College of Engineering and Architecture</option>
                                        <option>PUP-Main</option>
                                    </select>
                                    {/* Date */}
                                    <div className='flex-grow1 justify-spaceBetween'>
                                        <div className='inputWTopLabel mr-10'>
                                            <label>Start Date:</label>
                                            <input type="date" className='inputStyle mr-10' placeholder='Starting Date'/>
                                        </div>
                                        <div className='inputWTopLabel'>
                                            <label>End Date:</label>
                                            <input type="date" className='inputStyle mr-10' placeholder='Starting Date'/>
                                        </div>
                                    </div>
                                    <div className='checkboxDiv mb-10'>
                                        <input type='checkbox' className='checkboxStyle'/>
                                        <label>All Dates Available</label>
                                    </div>
                                    {/* Time */}
                                    <div className='flex-grow1 justify-spaceBetween'>
                                        <div className='inputWTopLabel mr-10'>
                                            <label>Start Time:</label>
                                            <input type="time" className='inputStyle mr-10' placeholder='Starting Date'/>
                                        </div>
                                        <div className='inputWTopLabel'>
                                            <label>End Time:</label>
                                            <input type="time" className='inputStyle mr-10' placeholder='Starting Date'/>
                                        </div>
                                    </div>
                                    <div className='checkboxDiv mb-10'>
                                        <input type='checkbox' className='checkboxStyle'/>
                                        <label>Whole Day</label>
                                    </div>
                                <button className='primaryBlockBtn'>Generate Report</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ReportGenerator