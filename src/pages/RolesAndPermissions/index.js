import React, { useState, useEffect } from 'react';
// import package/s
import Helmet from 'react-helmet';
// component/s
import HomeContainer from '../../components/HomeContainer';
import BasicTable from '../../components/BasicTable';
// import table data
import { RolesAndPermissionsCOLUMNS } from '../../components/BasicTable/columns';
// utilities
import AddRoleModal from './utilities/AddRoles';
import DeleteRoleModal from './utilities/DeleteRole';
import ToastNotification from '../../components/Toast';
// services
import { getAllPermissions } from '../../services/permissions/get';
import { getAllRoles } from '../../services/roles/get';
import { postOneRole } from '../../services/roles/post';
import { deleteOneRole } from '../../services/roles/delete';

const RolesAndPermissions = () => {

    const [roles, setRoles] = useState([]);
    const [permissions, setAllPermissions] = useState([]);
    const [deleteId, setDeleteId] = useState('');
    const [isFetching, setIsFetching] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [toastStatue, setToastStatus] = useState('');
    const [toastMessage, setToastMessage] = useState('');

    //Delete Modal Declarations
    const [dataToBeDeleted, setDataToBeDeleted] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseShowDeleteModal = () => setShowDeleteModal(false);

    const modules = [
        "Admin",
        "Location",
        "Permissions",
        "Auth",
        "Role",
        "Contact-Tracing-Logs",
        "Dashboard",
        "Admin-Application-Download",
        "Visitation-History",
        "Users",
        "Statistics"
    ];

    // get all users accounts
    const _getAllRoles = async () => {
        try {
            const roles = await getAllRoles();
            setRoles(roles.data?.data);
            setIsFetching(false);
        } catch (error) {
            setRoles([]);
        }
    }

    // get all users accounts
    const _getAllPermissions = async () => {
        try {
            const permissions = await getAllPermissions();
            setAllPermissions(permissions.data?.data);
            setIsFetching(false);
        } catch (error) {
            setRoles([]);
        }
    }

    const handleShowDeleteModal = (id) => {
        setShowDeleteModal(true)
        setDeleteId(id)
        // filter the data requested for deleting
        const filterdData = roles.filter((role) => { return role._id === id })  
        setDataToBeDeleted(filterdData[0]?.name)
    }

    const _deleteOneRole = async () => {
        try {
            const result = await deleteOneRole(deleteId);
            if(result.data.success){
                // filter the data requested for editing
                const filterdData = roles.filter((role) => { return role._id !== deleteId })  
                setRoles([...filterdData]);
                setShowToast(!showToast);
                setShowDeleteModal(!showDeleteModal)
                setToastMessage("Role has been deleted successfully.");
                setToastStatus('Success');
            }
        } catch (error) {
            setShowToast(!showToast);
            setToastMessage("Something went wrong.");
            setToastStatus('Danger');
        }
    }

    // this function will auto run on mount
    useEffect(() => {
        _getAllRoles();
        _getAllPermissions();
    }, []);

    // send the data to the backend to be created
    const _postOneRole = async (data) => {
        try {
            const result = await postOneRole(data);
            if(result.data.success) {
                setRoles([...roles, result.data.data])
                setToastMessage("Location has been created successfully.");
                setToastStatus('Success');
            }
        } catch (error) {
            console.log(error.response.data.message)
            setShowToast(!showToast);
            setToastMessage(error.response.data ? error.response.data.message : "Something went wrong.");
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
                    method={_postOneRole}
                    permissions={permissions}
                    modules={modules}
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
                    deleteModalFunction={handleShowDeleteModal}
                />
            </div>
            <DeleteRoleModal
                showFunction = {showDeleteModal}
                onHideFunction = {handleCloseShowDeleteModal}
                data = {dataToBeDeleted}
                submitDeleteMethod={_deleteOneRole}
            />
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
