import React, {useState} from 'react'
import './contactTracingLogs.css'
import Sidebar from '../../components/SideBar'
import HomeNav from '../../components/HomeNav'
// import package/s
import Helmet from 'react-helmet'
// mock data 
import data from '../../json/contact-tracing-logs-mockup-data.json'
// import table
import BasicTable from '../../components/BasicTable'

const ContactTracingLogs = () => {

    const [contactLogs, setContactLogs] = useState(data)

    return (
        <div className='container'>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Contact Tracing Logs</title>
            </Helmet>
            <div className='homeWrapper'>
                <Sidebar />
                <div className='navAndContentDiv'>
                    <HomeNav />
                    <div className='contentWrapper'>
                        <h1 className='contentTitle pb-10'>Contact Tracing Logs</h1>
                        <div className='contentDiv'>
                            <p className='tableCaption'>This table contains visitation logs within 31 days that will be used for contact tracing purposes. No contact information from the users will be collected on the system unless they are stated as positive of COVID-19.</p>
                            <div className='filterInputWrapper'>
                                <select className='inputStyle2 mr-10'>
                                    <option>Anywhere</option>
                                    <option>College of Engineering and Architecture</option>
                                    <option>PUP-Main</option>
                                </select>
                                <input type="date" className='inputStyle2 mr-10'/>
                                <select className='inputStyle2 mr-10'>
                                    <option>Start Time</option>
                                    <option>4:00 AM</option>
                                    <option>5:00 AM</option>
                                    <option>6:00 AM</option>
                                    <option>7:00 AM</option>
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                    <option>5:00 PM</option>
                                    <option>6:00 PM</option>
                                    <option>7:00 PM</option>
                                    <option>8:00 PM</option>
                                    <option>9:00 PM</option>
                                    <option>10:00 PM</option>
                                </select>
                                <select className='inputStyle2 mr-10'>
                                    <option>End Time</option>
                                    <option>5:00 AM</option>
                                    <option>6:00 AM</option>
                                    <option>7:00 AM</option>
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                    <option>5:00 PM</option>
                                    <option>6:00 PM</option>
                                    <option>7:00 PM</option>
                                    <option>8:00 PM</option>
                                    <option>9:00 PM</option>
                                    <option>10:00 PM</option>
                                    <option>11:00 PM</option>
                                </select>
                            </div>
                            <BasicTable />
                            {/* Tutorial Link Continuation: https://youtu.be/dYjdzpZv5yc?t=463 */}
                            {/* <table className='tableStyle'>
                                <thead>
                                    <tr>
                                        <th className='pr-5'>No.</th>
                                        <th>User Id</th>
                                        <th>Location</th>
                                        <th>Officer in Charge</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contactLogs.map((contactLog)=>(
                                        <tr>
                                            <td>{contactLog.no}</td>
                                            <td>{contactLog.userId}</td>
                                            <td>{contactLog.location}</td>
                                            <td>{contactLog.officer}</td>
                                            <td>{contactLog.date}</td>
                                            <td>{contactLog.time}</td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table> */}
                            {/* Generate Report Button */}
                            <button className='primaryBtn'>Generate Report</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default ContactTracingLogs