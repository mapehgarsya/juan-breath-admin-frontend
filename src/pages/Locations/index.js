import React, {useState, useEffect} from 'react'
import AddLoc from './utilities/AddLoc.js';
// import package/s
import Helmet from 'react-helmet';
// import icon/s
import { FaPen, FaTrash, FaQrcode } from "react-icons/fa";
// component/s
import HomeContainer from '../../components/HomeContainer/index.js';
import BasicTable from '../../components/BasicTable'
// import table data
import { LocationsCOLUMN } from '../../components/BasicTable/columns';
// apis
import { getAllLocations } from '../../services/locations/get.js';


const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [hasErrors, setHasErrors] = useState(false);

    const _getAllLocation = async () => {
        try {
            const locations = await getAllLocations();
            console.log(locations)
            setLocations(locations.data?.data);
        } catch (error) {
            setHasErrors(true);
            setLocations([]);
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
                <AddLoc />
            </div>
            <div className='contentDiv'>
                <p className='tableCaption'>This table shows the list of locations stored in the system.</p>
                {/* 
                    Frontend Dev Note: Adding the Date Created info on table if not yet added.
                */}
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

        </HomeContainer>
        
    )
}

export default Locations