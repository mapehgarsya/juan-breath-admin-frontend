import React, {useState} from 'react'
// import package/s
import Helmet from 'react-helmet';
// mock table data 
import data from '../../json/admin-mock-data.json'
import { AdminsCOLUMN } from '../../components/BasicTable/columns';
// component/s
import HomeContainer from '../../components/HomeContainer';
import BasicTable from '../../components/BasicTable';

const AdminManagement = () => {

    const [admins, setAdmins] = useState(data)

    return (
        <HomeContainer >
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Admin Management</title>
            </Helmet>

            <div className='titleAndButtonDiv'>
                <h1 className='contentTitle'>Admin Management</h1>
                <button className='primaryBtn'>Add Admin</button>
            </div>
            <div className='contentDiv'>
                <p className='tableCaption'>This table shows the list of other admins assigned in the system.</p>
                <BasicTable 
                    columnHeads = {AdminsCOLUMN}
                    tableData = {data}
                    hasDelete={true}
                    hasEdit={true}
                    hasQR={false}
                />
            </div>
                        
        </HomeContainer>
        
    )
}

export default AdminManagement