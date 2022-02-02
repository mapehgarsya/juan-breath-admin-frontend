import React, {useState} from 'react'
import './contactTracingLogs.css'
import Sidebar from '../../components/SideBar'
import HomeNav from '../../components/HomeNav'
// import package/s
import Helmet from 'react-helmet'
// import table Data
import data from '../../json/contact-tracing-logs-mockup-data.json'
import { LogsCOLUMN } from '../../components/BasicTable/columns'
// component/s
import BasicTable from '../../components/BasicTable'
import HomeContainer from '../../components/HomeContainer'


const ContactTracingLogs = () => {

    const [contactLogs, setContactLogs] = useState(data)

    return (
        <HomeContainer>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Contact Tracing Logs</title>
            </Helmet>
            
            <h1 className='contentTitle pb-10'>Contact Tracing Logs</h1>
            <div className='contentDiv'>
                <p className='tableCaption'>This table contains visitation logs within 31 days that will be used for contact tracing purposes. No contact information from the users will be collected on the system unless they are stated as positive of COVID-19.</p>
                <div className='filterandReportGrp'>
                    <div className='filterInputWrapper mb-10'>
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
                    {/* Generate Report Button */}
                    <button className='primaryBtn genReportBtn'>Generate Report</button>
                </div>
                <BasicTable 
                    columnHeads = {LogsCOLUMN}
                    tableData = {data}
                    hasDelete={false}
                    hasEdit={false}
                    hasQR={false}
                />
            </div>
        </HomeContainer>
        
    )
}

export default ContactTracingLogs