import React, {useState} from 'react'
import Sidebar from '../../components/SideBar'
import HomeNav from '../../components/HomeNav'
// import package/s
import Helmet from 'react-helmet';
// import icon/s
import { FaPen, FaTrash } from "react-icons/fa";
// mock data 
import data from '../../json/location-mock-data.json'

const Locations = () => {

    const [locations, setLocations] = useState(data)

    return (
        <div className='container'>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Locations</title>
            </Helmet>
            <div className='homeWrapper'>
                <Sidebar />
                <div className='navAndContentDiv'>
                    <HomeNav />
                    <div className='contentWrapper'>
                        <div className='titleAndButtonDiv'>
                            <h1 className='contentTitle'>Locations</h1>
                            <button className='primaryBtn'>Add Location</button>
                        </div>
                        <div className='contentDiv'>
                            {/* Tutorial Link Continuation: https://youtu.be/dYjdzpZv5yc?t=463 */}
                            <table className='tableStyle'>
                                <caption>This table shows the list of locations stored in the system.</caption>
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
                                                <button className='iconBtn mr-10'>
                                                    <FaPen />
                                                </button>
                                                <button className='iconBtn'>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Locations