import React, { useState, useEffect } from 'react'
import './positiveTracingLogs.css'
// import package/s
import Helmet from 'react-helmet'
// import table Data
import { PositiveLogsCOLUMN } from '../../components/BasicTable/columns'
// component/s
import BasicTable from '../../components/BasicTable'
import HomeContainer from '../../components/HomeContainer'
// apis
import { getAllVisitationLogs } from '../../services/contact-logs/get'
import CloseContactTracerModal from './utilities/TracerModal';

const PositiveTracingLogs = () => {

    const [positiveLogs, setContactLogs] = useState([
        {
            _id:"62171a5efaf30c00161e6589",
            mobileNumber:"+639516186637",
            name:"Ryan B. Nograles",
            userType:"Student",
            status: "Positive",
            date:"2022-02-24"
        },
        {
            _id:"62171a5efaf30c00161e6589",
            mobileNumber:"+639516186637",
            name:"Juan De la Cruz",
            userType:"Student",
            status: "Positive",
            date:"2022-02-24"
        }
    ]);
    const [showTracerModal, setShowTracerModal] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    const _getAllVisitationLogs = async () => {
        try {
            const visitationLogs = await getAllVisitationLogs();
            // setContactLogs(visitationLogs.data?.data);
            setIsFetching(false);
        } catch (error) { 
            setContactLogs([]);
        }
    }

    // qr code Modal Functions
    const handleContactTracing = (id) => {
        setShowTracerModal(true);
        console.log(id)
    }


    useEffect(() => {
        _getAllVisitationLogs();
    }, []);

    return (
        <HomeContainer>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Positive Tracing Logs</title>
            </Helmet>
            
            <h1 className='contentTitle pb-10'>Positive Tracing Logs</h1>
            <div className='contentDiv'>
                <p className='tableCaption'>This table contains list of users that confirms they are positive. 
                Administrator can use the trace contact button to get the list of close contact of the infected individual.</p>
                <h4>Filters</h4>
                <div className='filterandReportGrp'>
                    <div className='filterInputWrapper mb-10'>
                        <select className='inputStyle2 mr-10'>
                            <option value={"Anywhere"}>Anyone</option>
                            <option value={"Student"}>Student</option>
                            <option value={"Faculty"}>Faculty</option>
                            <option value={"Worker"}>Worker</option>
                            <option value={"Guest"}>Guest</option>
                        </select>
                        <input type="date" className='inputStyle2 mr-10'/>
                        <select className='inputStyle2 mr-10'>
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
                        </select>
                    </div>
                    {/* Generate Report Button */}
                    <button className='primaryBtn genReportBtn'>Generate Report</button>
                </div>
                <BasicTable 
                    columnHeads = {PositiveLogsCOLUMN}
                    tableData = {positiveLogs}
                    hasTracing={true}
                    isFetching={isFetching}
                    tracerModalFunction={handleContactTracing}
                />
            </div>
            <CloseContactTracerModal
                showFunction = {showTracerModal}
                onHideFunction = {() => setShowTracerModal(!showTracerModal)}
            />
        </HomeContainer>
        
    )
}

export default PositiveTracingLogs