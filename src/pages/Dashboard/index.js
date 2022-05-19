import React, { useState, useEffect } from 'react'
// css
import './dashboard.css'
// import package/s
import Helmet from 'react-helmet'
// component/s
import HomeContainer from '../../components/HomeContainer'
import Example from './charts/SimpleLineChart'
import { getAllStatistics } from "../../services/admins/get";

const Dashboard = () => {

    const [totalUserCount, setTotalUserCounte] = useState(0);
    const [totalActiveCases, setTotalActiveCases] = useState(0);
    const [totalRecoveredCases, setTotalRecoveredCases] = useState(0);
    const [totalNormalUsers, setTotalNormalUsers] = useState(0);

    const [totalUserCountToday, setTotalUserCounteToday] = useState(0);
    const [totalActiveCasesToday, setTotalActiveCasesToday] = useState(0);
    const [totalRecoveredCasesToday, setTotalRecoveredCasesToday] = useState(0);
    const [totalNormalUsersToday, setTotalNormalUsersToday] = useState(0);

    const statisticsData = async () => {
        try {
            const data = await getAllStatistics();
            const consolidated = data.data;
            if(consolidated.success){
                setTotalUserCounte(consolidated.totalUserCount);
                setTotalActiveCases(consolidated.totalActiveCases);
                setTotalRecoveredCases(consolidated.totalRecoveredCases);
                setTotalNormalUsers(consolidated.totalNormalUsers);

                setTotalUserCounteToday(consolidated.userToday);
                setTotalActiveCasesToday(consolidated.positiveToday);
                setTotalRecoveredCasesToday(consolidated.recoveredToday);
                setTotalNormalUsersToday(consolidated.normalToday);
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        statisticsData();
    }, []);

    return (
        <HomeContainer>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Dashboard</title>
            </Helmet>
            <h1 className='contentTitle'>Dashboard</h1>
            <p className='tableCaption'>Shows the over all covid count cases in the country and the accumulated count from the system's database.</p>
            <div className='count-container sum-boxes'>
                <div className='box1'>
                    <p className='box1-top-heading'>Total App Users</p>
                    <p className='box1-middle-heading'>{totalUserCount}</p>
                    <div className='d-flex justify-content-end'>
                        <p className='box1-bottom-heading'>+ {totalUserCountToday} Today</p>
                    </div>
                </div>
                 <div className='box'>
                    <p className='box-top-heading'>Total Normal User</p>
                    <p className='box-middle-heading'>{totalNormalUsers}</p>
                    <div className='d-flex justify-content-end'>
                        <p className='box-bottom-heading'>+ {totalNormalUsersToday} Today</p>
                    </div>
                </div>  
                <div className='box'>
                    <p className='box-top-heading'>Total Positive Users</p>
                    <p className='box-middle-heading'>{totalActiveCases}</p>
                    <div className='d-flex justify-content-end'>
                        <p className='box-bottom-heading'>+ {totalActiveCasesToday} Today</p>
                    </div>
                </div>
                <div className='box'>
                    <p className='box-top-heading'>Total Recovered Users</p>
                    <p className='box-middle-heading'>{totalRecoveredCases}</p>
                    <div className='d-flex justify-content-end'>
                        <p className='box-bottom-heading'>+ {totalRecoveredCasesToday} Today</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "20px", width: "100%"}} className="box-statistics">
                <h3 className='chartTitle'>Health Status Analytics</h3>
                <Example/>
            </div>
            
        </HomeContainer>
        
    )
}

export default Dashboard