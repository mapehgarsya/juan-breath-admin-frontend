import React, {useState} from 'react'
// import package/s
import Helmet from 'react-helmet';
// import icon/s
import { FaPen, FaTrash } from "react-icons/fa";
// mock data 
import data from '../../json/admin-mock-data.json'
// component/s
import HomeContainer from '../../components/HomeContainer';

const AdminManagement = () => {

    const [admins, setAdmins] = useState(data)

    return (
        <HomeContainer >
            {/* Helmet for page's title*/}
            <Helmet>
                <title>JuanBreath | Admin Management</title>
            </Helmet>

            <div className='titleAndButtonDiv'>
                <h1 className='contentTitle'>Admin Management</h1>
                <button className='primaryBtn'>Add Admin</button>
            </div>
            <div className='contentDiv'>
            <p>This table shows the list of other admins assigned in the system.</p>
                <div className='customTableDiv'>
                    <table className='tableStyle'>
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
                        
        </HomeContainer>
        
    )
}

export default AdminManagement