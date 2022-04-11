import React, {useState, useEffect} from 'react'
// import package/s
import Helmet from 'react-helmet';
import QRCode from 'qrcode';
// component/s
import HomeContainer from '../../components/HomeContainer/index.js';
import BasicTable from '../../components/BasicTable'
// import table data
import { LocationsCOLUMN } from '../../components/BasicTable/columns';
import ToastNotification from '../../components/Toast/index.js';
// apis
import { getAllLocations } from '../../services/locations/get.js';
import { postOneLocation } from '../../services/locations/post.js';
import { putOneLocation } from "../../services/locations/put"
import { deleteOneLocations } from '../../services/locations/delete.js';
// modals
import QRCodeGeneratorModal from './utilities/QRCodeGenerator.js';
import AddLocationModal from './utilities/AddLocationModal.js';
import EditLocationModal from './utilities/EditLocationModal.js';
import DeleteLocationModal from './utilities/DeleteLocationModal.js';



const Locations = () => {
    // location default state
    const [locations, setLocations] = useState([]);
    const [hasErrors, setHasErrors] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [editId, setEditId] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const [dataToBeEdit, setDataToBeEdit] = useState({ name: "", address: "", officerInCharge: "" });
    const [dataToBeDeleted, setDataToBeDeleted] = useState('');
    const [toastStatue, setToastStatus] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [isFetching, setIsFetching] = useState(true);


    // Edit Modal Declarations
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseShowEditModal = () => setShowEditModal(false);

    //Delete Modal Declarations
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseShowDeleteModal = () => setShowDeleteModal(false);

    //Delete Modal Declarations
    const [showQRModal, setShowQRModal] = useState(false);
    const [QRCodelocationName, setQRCodeLocationName] = useState('');
    const handleCloseShowQRModal = () => setShowQRModal(false);

    const handleShowDeleteModal = (id) => {
        setShowDeleteModal(true)
        setDeleteId(id)
        // filter the data requested for deleting
        const filterdData = locations.filter((location) => { return location._id === id })  
        setDataToBeDeleted(filterdData[0]?.name)
    }

    // Edit Modal Functions
    const handleShowEditModal = (id) => {
        setShowEditModal(true);
        setEditId(id);

        // filter the data requested for editing
        const filterdData = locations.filter((location) => { return location._id === id })  
        setDataToBeEdit(filterdData[0])
    }
    // modify the selected item
    const handleDataEdit = (value, field) => {
        setDataToBeEdit({...dataToBeEdit, [field]: value })
    }
    // qr code Modal Functions
    const handleShowQRCodeModal = (id) => {
        setShowQRModal(true);

        // filter the data requested for editing
        const filterdData = locations.filter((location) => { return location._id === id }) 
        QRCode.toDataURL(filterdData[0].name).then((data) => {
            setQRCodeLocationName(data);
        })

        setDataToBeEdit(filterdData[0])
    }

    const _getAllLocation = async () => {
        try {
            const locations = await getAllLocations();
            setLocations(locations.data?.data);
            setIsFetching(false);
        } catch (error) {
            setHasErrors(true);
            setLocations([]);
        }
    }
    // send the data to the backend to be created
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

    const _putOneLocation = async () => {
        try {
            const newLocation = {
                name: dataToBeEdit.name,
                address: dataToBeEdit.address,
                officerInCharge: dataToBeEdit.officerInCharge
            }
            const result = await putOneLocation(newLocation, editId);
            if(result.data.success) {
                // removed the edited data from the set
                const filterdData = locations.filter((location) => { return location._id !== editId })
                setLocations([...filterdData, result.data.data]);
                setShowToast(!showToast);
                setShowEditModal(!showEditModal);
                setToastMessage("Location has been updated successfully.");
                setToastStatus('Success');
            }
        } catch (error) {
            setShowToast(!showToast);
            setToastMessage("Something went wrong.");
            setToastStatus('Danger');
        }
    }

    const _deleteOneLocation = async () => {
        try {
            const result = await deleteOneLocations(deleteId);
            if(result.data.success){
                // filter the data requested for editing
                const filterdData = locations.filter((location) => { return location._id !== deleteId })  
                setLocations([...filterdData]);
                setShowToast(!showToast);
                setShowDeleteModal(!showDeleteModal)
                setToastMessage("Location has been deleted successfully.");
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
                    qrModalFunction={handleShowQRCodeModal}
                    editModalFunction={handleShowEditModal}
                    deleteModalFunction={handleShowDeleteModal}
                    isFetching={isFetching}
                />
                
                {/* error cather ui */}
                {
                    hasErrors && <div>Something went wrong</div>
                }
            </div>
            <EditLocationModal 
                showFunction = {showEditModal}
                onHideFunction = {handleCloseShowEditModal}
                data={dataToBeEdit}
                dataEditMethod = {handleDataEdit}
                submitEditMethod={_putOneLocation}
            />
            <QRCodeGeneratorModal
                showFunction = {showQRModal}
                onHideFunction = {handleCloseShowQRModal}
                data={dataToBeEdit}
                qrCodelocationName={QRCodelocationName}
                dataEditMethod = {handleDataEdit}
                submitEditMethod={_putOneLocation}
            />
            <DeleteLocationModal
                showFunction = {showDeleteModal}
                onHideFunction = {handleCloseShowDeleteModal}
                data = {dataToBeDeleted}
                submitDeleteMethod={_deleteOneLocation}
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