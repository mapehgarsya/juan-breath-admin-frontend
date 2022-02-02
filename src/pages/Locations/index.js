import React, {useState, useEffect} from 'react'
import AddLoc from './utilities/AddLoc.js';
// import package/s
import Helmet from 'react-helmet';
// import icon/s
import { FaPen, FaTrash, FaQrcode } from "react-icons/fa";
// component/s
import HomeContainer from '../../components/HomeContainer/index.js';
import ToastNotification from '../../components/Toast/index.js';
// apis
import { getAllLocations } from '../../services/locations/get.js';
import { postOneLocation } from '../../services/locations/post.js';

const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [hasErrors, setHasErrors] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastStatue, setToastStatus] = useState('');
    const [toastMessage, setToastMessage] = useState('');

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

    return (
        <HomeContainer>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Locations</title>
            </Helmet>
            <div className='titleAndButtonDiv'>
                <h1 className='contentTitle'>Locations</h1>
                <AddLoc 
                    method={_postOneLocation}
                />
            </div>
            <div className='contentDiv'>
                {/* Tutorial Link Continuation: https://youtu.be/dYjdzpZv5yc?t=463 */}
                <p>This table shows the list of locations stored in the system.</p>
                {
                    
                    !hasErrors && <div className='customTableDiv'>
                    <table className='tableStyle'>
                        
                        <thead>
                            <tr>
                                <th className='pr-5'>No.</th>
                                <th>Name</th>
                                <th>Location Address</th>
                                <th>Officer in Charge</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // this section renders the data inside an array
                                locations.length > 0 && locations.map((location, i)=>(
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{location.name}</td>
                                        <td>{location.address}</td>
                                        <td>{location.officerInCharge}</td>
                                        <td className='iconBtnWrapper'>
                                            <button className='iconBtn mr-10' title="QR Code">
                                                <FaQrcode />
                                            </button>
                                            <button className='iconBtn mr-10' title="Edit">
                                                <FaPen />
                                            </button>
                                            <button className='iconBtn' title="Delete">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            {
                                locations.length === 0 && <tr><td>No Locations to be displared at the moment</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
                }
                {/* error cather ui */}
                {
                    hasErrors && <div>Something went wrong</div>
                }
            </div>
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