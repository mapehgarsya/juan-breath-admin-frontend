import React, { useState, useEffect } from 'react'
import './contactTracingLogs.css'
// import package/s
import Helmet from 'react-helmet'
// import table Data
import { LogsCOLUMN } from '../../components/BasicTable/columns'
// component/s
import BasicTable from '../../components/BasicTable'
import HomeContainer from '../../components/HomeContainer'
// apis
import { getAllVisitationLogs } from '../../services/contact-logs/get'
import { getAllLocations } from '../../services/locations/get.js';

const ContactTracingLogs = () => {

    const [contactLogs, setContactLogs] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const _getAllVisitationLogs = async () => {
        try {
            const visitationLogs = await getAllVisitationLogs();
            setContactLogs(visitationLogs.data?.data);
            setIsFetching(false);
        } catch (error) { 
            setContactLogs([]);
        }
    }

    const _getAllLocation = async () => {
        try {
            const locations = await getAllLocations();
            setLocations(locations.data?.data);
        } catch (error) {
            setLocations([]);
        }
    }

    useEffect(() => {
        _getAllVisitationLogs();
        _getAllLocation();
    }, []);

    return (
        <HomeContainer>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Visitation Logs</title>
            </Helmet>
            
            <h1 className='contentTitle pb-10'>Visitation Logs</h1>
            <div className='contentDiv'>
                <p className='tableCaption'>This table contains visitation logs within 31 days that will be used for contact tracing purposes. No personal information from the users will be collected on the system unless they are stated as positive of COVID-19.</p>
                <h4>Filters</h4>
                <div className='filterandReportGrp'>
                    <div className='filterInputWrapper mb-10'>
                        <select className='inputStyle2 mr-10'>
                            <option value={"Anywhere"}>Anywhere</option>
                            {
                                locations.map((location, i) => {
                                    return <option key={i} value={location.name}>{location.name}</option>
                                })
                            }
                        </select>
                        <input type="date" className='inputStyle2 mr-10'/>
                        {/* <select className='inputStyle2 mr-10'>
                            <option>Time</option>
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
                        </select> */}
                    </div>
                    {/* Generate Report Button */}
                    <button className='primaryBtn genReportBtn'>Generate Report</button>
                </div>
                <BasicTable 
                    columnHeads = {LogsCOLUMN}
                    tableData = {contactLogs}
                    hasDelete={false}
                    hasEdit={false}
                    hasQR={false}
                    isFetching={isFetching}
                />
            </div>
        </HomeContainer>
        
    )
}

export default ContactTracingLogs