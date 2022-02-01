import React, {useState} from 'react'
import AddLoc from './utilities/AddLoc.js';
// import package/s
import Helmet from 'react-helmet';
// import icon/s
import { FaPen, FaTrash, FaQrcode } from "react-icons/fa";
// mock data 
import data from '../../json/location-mock-data.json'
// component/s
import HomeContainer from '../../components/HomeContainer/index.js';

const Locations = () => {

    const [locations, setLocations] = useState(data)

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
                {/* Tutorial Link Continuation: https://youtu.be/dYjdzpZv5yc?t=463 */}
                <p>This table shows the list of locations stored in the system.</p>
                <div className='customTableDiv'>
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
                            {locations.map((location)=>(
                                <tr>
                                    <td>{location.no}</td>
                                    <td>{location.name}</td>
                                    <td>{location.address}</td>
                                    <td>{location.officer}</td>
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
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </HomeContainer>
        
    )
}

export default Locations