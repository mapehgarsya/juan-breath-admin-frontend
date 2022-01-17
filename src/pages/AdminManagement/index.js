import React, {useState} from 'react'
import Sidebar from '../../components/SideBar'
import HomeNav from '../../components/HomeNav'
// import package/s
import Helmet from 'react-helmet';
// import icon/s
import { FaPen, FaTrash } from "react-icons/fa";
// mock data 
import data from '../../json/admin-mock-data.json'

const AdminManagement = () => {

    const [admins, setAdmins] = useState(data)

    return (
        <div className='container'>
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Admin Management</title>
            </Helmet>
            <div className='homeWrapper'>
                <Sidebar />
                <div className='navAndContentDiv'>
                    <HomeNav />
                    <div className='contentWrapper'>
                        <div className='titleAndButtonDiv'>
                            <h1 className='contentTitle'>Admin Management</h1>
                            <button className='primaryBtn'>Add Admin</button>
                        </div>
                        <div className='contentDiv'>
                            {/* Tutorial Link Continuation: https://youtu.be/dYjdzpZv5yc?t=463 */}
                            <table className='tableStyle'>
                                <caption>This table shows the list of other admins assigned in the system.</caption>
                                <thead>
                                    <tr>
                                        <th className='pr-5'>No.</th>
                                        <th>Name</th>
                                        <th>Location Assigned</th>
                                        <th>Faculty in Charge</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.map((admin)=>(
                                        <tr>
                                            <td>{admin.no}</td>
                                            <td>{admin.name}</td>
                                            <td>{admin.locationAssigned}</td>
                                            <td>{admin.faculty}</td>
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

export default AdminManagement