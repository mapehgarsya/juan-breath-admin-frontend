import React, { useState, useEffect } from 'react';
// import package/s
import Helmet from 'react-helmet';
// component/s
import HomeContainer from '../../components/HomeContainer';
import BasicTable from '../../components/BasicTable';
// import table data
import { RolesAndPermissionsCOLUMNS } from '../../components/BasicTable/columns';
import roles from '../../json/roles-mock-data.json'

const RolesAndPermissions = () => {

    const [hasErrors, setHasErrors] = useState(false);

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
                    // hasDelete={true}
                    // hasEdit={true}
                    // hasQR={false}
                />
                {
                    hasErrors && <div>Something went wrong</div>
                }
            </div>
        </HomeContainer>
    );
};

export default RolesAndPermissions;
