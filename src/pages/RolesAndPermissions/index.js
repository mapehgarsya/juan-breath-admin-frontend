import React, { useState, useEffect } from 'react';
// import package/s
import Helmet from 'react-helmet';
// component/s
import HomeContainer from '../../components/HomeContainer';
import BasicTable from '../../components/BasicTable';
// import table data
import { RolesAndPermissionsCOLUMNS } from '../../components/BasicTable/columns';
import { getAllRoles } from '../../services/roles/get';
// utilities
import AddRoleModal from './utilities/AddRoles';
import ToastNotification from '../../components/Toast';
// services
import { postOneRole } from '../../services/roles/post';

const RolesAndPermissions = () => {

    const [roles, setRoles] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [toastStatue, setToastStatus] = useState('');
    const [toastMessage, setToastMessage] = useState('');

    // get all users accounts
    const _getAllAdmins = async () => {
        try {
            const roles = await getAllRoles();
            setRoles(roles.data?.data);
            setIsFetching(false);
        } catch (error) {
            setRoles([]);
        }
    }

    // this function will auto run on mount
    useEffect(() => {
        _getAllAdmins()
    }, []);

    // send the data to the backend to be created
    const _postOneLocation = async (data) => {
        try {
            const result = await postOneRole(data);
            if(result.data.success) {
                setToastMessage("Location has been created successfully.");
                setToastStatus('Success');
            }
        } catch (error) {
            setShowToast(!showToast);
            setToastMessage("Something went wrong.");
            setToastStatus('Danger');
        }
    }

    return (
        <HomeContainer>
            <Helmet>
                {/* Helmet for page's title*/}
                <title>JuanBreath | Roles &amp; Permissions</title>
            </Helmet>
            <div className='titleAndButtonDiv'>
                <h1 className='contentTitle'>Roles And Permissions</h1>
                <AddRoleModal 
                    method={_postOneLocation}
                />
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
            <ToastNotification
                showToast={showToast}
                setShowToast={setShowToast}
                message={toastMessage}
                status={toastStatue}
            />
        </HomeContainer>
    );
};

export default RolesAndPermissions;
