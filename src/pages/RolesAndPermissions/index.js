import React, { useState, useEffect } from 'react';
// import package/s
import Helmet from 'react-helmet';
// component/s
import HomeContainer from '../../components/HomeContainer';
import BasicTable from '../../components/BasicTable';
// import table data
import { RolesAndPermissionsCOLUMNS } from '../../components/BasicTable/columns';
import { getAllRoles } from '../../services/roles/get';

const RolesAndPermissions = () => {

    const [roles, setRoles] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    // get all users accounts
    const _getAllAdmins = async () => {
        try {
            const roles = await getAllRoles();
            setRoles(roles.data?.data);
            setIsFetching(false);
            console.log(roles.data.data)
        } catch (error) {
            setRoles([]);
        }
    }

    // this function will auto run on mount
    useEffect(() => {
        _getAllAdmins()
    }, []);

    return (
        <HomeContainer>
            <Helmet>
                {/* Helmet for page's title*/}
                <title>JuanBreath | Roles &amp; Permissions</title>
            </Helmet>
            <div className='titleAndButtonDiv'>
                <h1 className='contentTitle'>Roles And Permissions</h1>
                <button className='primaryBtn mr-10'>
                    Add Role
                </button>
            </div>
            <div className='contentDiv'>
                <p className='tableCaption'>This table shows the list of roles and permissions for the admins that are in the system.</p>
                <BasicTable
                    columnHeads = {RolesAndPermissionsCOLUMNS}
                    tableData = {roles}
                    isFetching={isFetching}
                    hasDelete={true}
                    hasEdit={true}
                />
            </div>
        </HomeContainer>
    );
};

export default RolesAndPermissions;
