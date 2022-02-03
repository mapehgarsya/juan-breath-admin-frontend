import React, { useState, useEffect } from 'react'
// import package/s
import Helmet from 'react-helmet';
// mock table data 
import { AdminsCOLUMN } from '../../components/BasicTable/columns';
// component/s
import HomeContainer from '../../components/HomeContainer';
import BasicTable from '../../components/BasicTable';
// utilitiess
import EditAdminModal from './utilities/EditAdminModal';
// apis
import { getAllAdmins } from "../../services/admins/get";
import AddAdminModal from './utilities/AddAdminModal';

const AdminManagement = () => {

    const [admins, setAdmins] = useState([])
    const [hasErrors, setHasErrors] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastStatue, setToastStatus] = useState('');
    const [toastMessage, setToastMessage] = useState('');

    // Edit modal declarations
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseShowEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    // get all admin accounts
    const _getAllLocation = async () => {
        try {
            const admins = await getAllAdmins();
            setAdmins(admins.data?.data);
        } catch (error) {
            setHasErrors(true);
            setAdmins([]);
        }
    }

    // this function will auto run on mount
    useEffect(() => {
        _getAllLocation();
    }, []);

    return (
        <HomeContainer >
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Admin Management</title>
            </Helmet>
            <div className='titleAndButtonDiv'>
                <h1 className='contentTitle'>Admin Management</h1>
                <AddAdminModal />
            </div>
            <div className='contentDiv'>
                <p className='tableCaption'>This table shows the list of other admins assigned in the system.</p>
                <BasicTable 
                    columnHeads = {AdminsCOLUMN}
                    tableData = {admins}
                    hasDelete={true}
                    hasEdit={true}
                    hasQR={false}
                    editModalFunction={handleShowEditModal}
                />
            </div>
            <EditAdminModal 
                showFunction = {showEditModal}
                onHideFunction = {handleCloseShowEditModal}
                data = {admins}
            />
                        
        </HomeContainer>
        
    )
}

export default AdminManagement