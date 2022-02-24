import React, { useState, useEffect } from 'react'
// import package/s
import Helmet from 'react-helmet';
// mock table data 
import { UsersCOLUMN } from '../../components/BasicTable/columns';
// component/s
import HomeContainer from '../../components/HomeContainer';
import BasicTable from '../../components/BasicTable';
import { getAllUsers } from "../../services/users/get";

const UserManagement = () => {

    const [users, setUsers] = useState([]);

    // get all users accounts
    const _getAllAdmins = async () => {
        try {
            const admins = await getAllUsers();
            setUsers(admins.data?.data);
        } catch (error) {
            setUsers([]);
        }
    }

    // this function will auto run on mount
    useEffect(() => {
        _getAllAdmins()
    }, []);

    return (
        <HomeContainer >
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | User Management</title>
            </Helmet>
            <div className='contentDiv'>
                <h1 className='contentTitle'>User Management</h1>
                <p className='tableCaption'>This table shows the list of other users registerd in the system.</p>
                <BasicTable 
                    columnHeads = {UsersCOLUMN}
                    tableData = {users}
                    hasDelete={true}
                    hasEdit={true}
                    hasQR={false}
                />
            </div>       
        </HomeContainer>
        
    )
}

export default UserManagement