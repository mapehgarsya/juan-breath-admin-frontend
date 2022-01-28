import React from 'react'
import './dashboard.css'
// import package/s
import Helmet from 'react-helmet'
// component/s
import HomeContainer from '../../components/HomeContainer'

const Dashboard = () => {
    return (
        <HomeContainer>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Dashboard</title>
            </Helmet>
            
            <h1 className='contentTitle'>Dashboard</h1>


        </HomeContainer>
        
    )
}

export default Dashboard