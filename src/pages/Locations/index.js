import React, {useState, useEffect} from 'react'
import AddLocationModal from './utilities/AddLocationModal.js';
// import package/s
import Helmet from 'react-helmet';
// component/s
import HomeContainer from '../../components/HomeContainer/index.js';
import BasicTable from '../../components/BasicTable'
// import table data
import { LocationsCOLUMN } from '../../components/BasicTable/columns';
import ToastNotification from '../../components/Toast/index.js';
// apis
import { getAllLocations } from '../../services/locations/get.js';
import { postOneLocation } from '../../services/locations/post.js';
// modals
import EditLocationModal from './utilities/EditLocationModal.js';



const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [hasErrors, setHasErrors] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastStatue, setToastStatus] = useState('');
    const [toastMessage, setToastMessage] = useState('');

    // Edit Modal Declarations
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseShowEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    

    const _getAllLocation = async () => {
        try {
            const locations = await getAllLocations();
            setLocations(locations.data?.data);
        } catch (error) {
            setHasErrors(true);
            setLocations([]);
        }
    }

    const _postOneLocation = async (data) => {
        try {
            const result = await postOneLocation(data);
            if(result.data.success) {
                setLocations([...locations, result.data.data]);
                setShowToast(!showToast);
                setToastMessage("Location has been created successfully.");
                setToastStatus('Success');
            }
        } catch (error) {
            setShowToast(!showToast);
            setToastMessage("Something went wrong.");
            setToastStatus('Danger');
        }
    }

    useEffect(() => {
        _getAllLocation();
    }, []);

    // Edit Modal Functions ---- not working
    const EditLocation = (_id, editedLocation) => {
        setLocations(locations.map((location) => location._id === _id ? editedLocation : location))
    }

    return (
        <HomeContainer>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Locations</title>
            </Helmet>
            <div className='titleAndButtonDiv'>
                <h1 className='contentTitle'>Locations</h1>
                <AddLocationModal 
                    method={_postOneLocation}
                />
            </div>
            <div className='contentDiv'>
                <p className='tableCaption'>This table shows the list of locations stored in the system.</p>
                
                <BasicTable
                    columnHeads = {LocationsCOLUMN}
                    tableData = {locations}
                    hasDelete={true}
                    hasEdit={true}
                    hasQR={true}
                    editModalFunction={handleShowEditModal}
                />
                
                {/* error cather ui */}
                {
                    hasErrors && <div>Something went wrong</div>
                }
            </div>
            <EditLocationModal 
                    showFunction = {showEditModal}
                    onHideFunction = {handleCloseShowEditModal}
                    data = {locations}
            />
            <ToastNotification
                showToast={showToast}
                setShowToast={setShowToast}
                message={toastMessage}
                status={toastStatue}
            />
        </HomeContainer>
        
    )
}

export default Locations