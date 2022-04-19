import React, { useState, useEffect } from 'react'
// css
import './dashboard.css'
// import package/s
import Helmet from 'react-helmet'
// component/s
import HomeContainer from '../../components/HomeContainer'
import { getAllStatistics } from "../../services/admins/get";

const Dashboard = () => {

    const [totalUserCount, setTotalUserCounte] = useState(0);
    const [totalActiveCases, setTotalActiveCases] = useState(0);
    const [totalRecoveredCases, setTotalRecoveredCases] = useState(0);
    const [totalCloseContactCases, setTotalCloseContactCases] = useState(0);

    const statisticsData = async () => {
        try {
            const data = await getAllStatistics();
            const consolidated = data.data;
            if(consolidated.success){
                setTotalUserCounte(consolidated.totalUserCount);
                setTotalActiveCases(consolidated.totalActiveCases);
                setTotalRecoveredCases(consolidated.totalRecoveredCases);
                setTotalCloseContactCases(consolidated.totalCloseContactCases);
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
                        <p className='box1-bottom-heading'>+ 0 Today</p>
                    </div>
                </div>
                <div className='box'>
                    <p className='box-top-heading'>Total Active Cases</p>
                    <p className='box-middle-heading'>{totalActiveCases}</p>
                    <div className='d-flex justify-content-end'>
                        <p className='box-bottom-heading'>+ 0 Today</p>
                    </div>
                </div>
                <div className='box'>
                    <p className='box-top-heading'>Total Recovered</p>
                    <p className='box-middle-heading'>{totalRecoveredCases}</p>
                    <div className='d-flex justify-content-end'>
                        <p className='box-bottom-heading'>+ 0 Today</p>
                    </div>
                </div>
                <div className='box'>
                    <p className='box-top-heading'>Total Close Contact</p>
                    <p className='box-middle-heading'>{totalCloseContactCases}</p>
                    <div className='d-flex justify-content-end'>
                        <p className='box-bottom-heading'>+ 0 Today</p>
                    </div>
                </div>  
            </div>
            <div className='count-container sum-tables mt-3'>
                <div className='box-summary'>
                    <div className='box-body-header bg-primary'>
                        <h4>CUMULATIVE SUMMARY SINCE 06 FEBRUARY 2022</h4>
                        <p>Shows cumulative totals since the first day of JuanBreath.</p>
                    </div>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p className='textColor'>Students Isolated</p>
                            <p className='bold'>134</p>
                        </div>
                        <div className='count-box'>
                            <p>Students Positive</p>
                            <p className='bold'>21</p>
                        </div>
                        <div className='count-box'>
                            <p>Students Recovered</p>
                            <p className='bold'>124</p>
                        </div>
                        <div className='count-box'>
                            <p>Students Closed Contact</p>
                            <p className='bold'>1</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p>Faculty Isolated</p>
                            <p className='bold'>10</p>
                        </div>
                        <div className='count-box'>
                            <p>Faculty Positive</p>
                            <p className='bold'>9</p>
                        </div>
                        <div className='count-box'>
                            <p>Faculty Recovered</p>
                            <p className='bold'>40</p>
                        </div>
                        <div className='count-box'>
                            <p>Faculty Closed Contact</p>
                            <p className='bold'>2</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p>Workers Isolated</p>
                            <p className='bold'>7</p>
                        </div>
                        <div className='count-box'>
                            <p>Workers Positive</p>
                            <p className='bold'>1</p>
                        </div>
                        <div className='count-box'>
                            <p>Workers Recovered</p>
                            <p className='bold'>9</p>
                        </div>
                        <div className='count-box'>
                            <p>Workers Closed Contact</p>
                            <p className='bold'>1</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p>Visitors Isolated</p>
                            <p className='bold'>0</p>
                        </div>
                        <div className='count-box'>
                            <p>Visitors Positive</p>
                            <p className='bold'>0</p>
                        </div>
                        <div className='count-box'>
                            <p>Visitors Recovered</p>
                            <p className='bold'>0</p>
                        </div>
                        <div className='count-box'>
                            <p>Visitors Closed Contact</p>
                            <p className='bold'>0</p>
                        </div>
                    </div>
                </div>
                <div className='box-summary'>
                    <div className='box-summary'>
                    <div className='box-body-header bg-accent'>
                        <h4>WEEKLY SUMMARY: FEBRUARY 20-26 2022</h4>
                        <p>Shows cumulative totals per week</p>
                    </div>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p className='textColor'>Students Isolated</p>
                            <p className='bold'>9</p>
                        </div>
                        <div className='count-box'>
                            <p>Students Positive</p>
                            <p className='bold'>11</p>
                        </div>
                        <div className='count-box'>
                            <p>Students Recovered</p>
                            <p className='bold'>17</p>
                        </div>
                        <div className='count-box'>
                            <p>Students Closed Contact</p>
                            <p className='bold'>0</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p>Faculty Isolated</p>
                            <p className='bold'>2</p>
                        </div>
                        <div className='count-box'>
                            <p>Faculty Positive</p>
                            <p className='bold'>4</p>
                        </div>
                        <div className='count-box'>
                            <p>Faculty Recovered</p>
                            <p className='bold'>13</p>
                        </div>
                        <div className='count-box'>
                            <p>Faculty Closed Contact</p>
                            <p className='bold'>1</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p>Workers Isolated</p>
                            <p className='bold'>2</p>
                        </div>
                        <div className='count-box'>
                            <p>Workers Positive</p>
                            <p className='bold'>1</p>
                        </div>
                        <div className='count-box'>
                            <p>Workers Recovered</p>
                            <p className='bold'>3</p>
                        </div>
                        <div className='count-box'>
                            <p>Workers Closed Contact</p>
                            <p className='bold'>1</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='item-count-container'>
                        <div className='count-box'>
                            <p>Visitors Isolated</p>
                            <p className='bold'>0</p>
                        </div>
                        <div className='count-box'>
                            <p>Visitors Positive</p>
                            <p className='bold'>0</p>
                        </div>
                        <div className='count-box'>
                            <p>Visitors Recovered</p>
                            <p className='bold'>0</p>
                        </div>
                        <div className='count-box'>
                            <p>Visitors Closed Contact</p>
                            <p className='bold'>0</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </HomeContainer>
        
    )
}

export default Dashboard