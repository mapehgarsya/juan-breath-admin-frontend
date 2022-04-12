import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
// component/s
import HomeContainer from '../../components/HomeContainer';
// import package/s
import Helmet from 'react-helmet';
import { Form, Col, Row } from 'react-bootstrap'
import { FormError } from '../../components/ErrorDisplay/FormError';
import { getOneAdmin } from '../../services/admins/get';
import { getAllLocations } from '../../services/locations/get';
import { getAllRoles } from '../../services/roles/get';
import { putOneAdmin } from '../../services/admins/put';
import ToastNotification from '../../components/Toast';

const ProfilePage = () => {

    const [data, setDataToBeEdit] = useState({ firstName: "", middleName: "", lastName: "", suffix: "", username: "", email: "", locationAssigned: "", role: "" });
    const [errorMsg, setErrorMsg] = useState([])
    const [locations, setLocations] = useState([])
    const [roles, setRoles] = useState([])
    const [editId, setEditId] = useState('');
    // toast configuration
    const [showToast, setShowToast] = useState(false);
    const [toastStatue, setToastStatus] = useState('');
    const [toastMessage, setToastMessage] = useState('');

    // fetch methods
    // get all locations
    const _getAllLocation = async () => {
        try {
            const locations = await getAllLocations();
            setLocations(locations.data?.data);
        } catch (error) {
            setLocations([]);
        }
    }
    // get all roles
    const _getAllRoles = async () => {
        try {
            const roles = await getAllRoles();
            setRoles(roles.data?.data);
        } catch (error) {
            setRoles([]);
        }
    }
    // get all roles
    const _getOneAdmin = async (id) => {
        try {
            const admin = await getOneAdmin(id);
            setDataToBeEdit(admin.data?.data);
        } catch (error) {
            setDataToBeEdit(data);
        }
    }

    // modify the selected item
    const dataEditMethod = (value, field) => {
        setDataToBeEdit({...data, [field]: value })
        handleClearError(field)
    }

    // this function will remove the error messages displayed on the form
    const handleClearError = (field) => {
        for(let i=0; i< errorMsg.length; i++) {
            if(errorMsg[i].includes(field)) {
                errorMsg.splice(i, 1);
            }
        }
        setErrorMsg([...errorMsg])
    }

    // this will handle the editing section of the admin
    const _putOneAdmin = async () => {
        try {
            const newLocation = {
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                suffix: data.suffix,
                username: data.username,
                email: data.email,
                locationAssigned: data.locationAssigned,
                role: data.role
            }
            const result = await putOneAdmin(newLocation, editId);
            if(result.data.success) {
                setShowToast(!showToast);
                setToastMessage("Admin account has been updated successfully.");
                setToastStatus('Success');
            }
        } catch (error) {
            setShowToast(!showToast);
            if(error.response?.status === 400) {
                setErrorMsg(error.response?.data.message.split('.'))
            }
            setToastMessage("Something went wrong.");
            setToastStatus('Danger');
        }
    }

    useEffect(() => {
        // execute fetch method
        _getAllLocation();
        _getAllRoles();
        try {
            // get the local token, decode and reuse the users user name as navbar header
            const token = localStorage.getItem('accessToken');
            const decodedToken = token ? jwtDecode(token) : null
            
            if(decodedToken) {
                _getOneAdmin(decodedToken.id);
                setEditId(decodedToken.id);
            }

        } catch (error) {
            setDataToBeEdit(data)   
        }
    }, []);

    return (
        <HomeContainer>
            <Helmet>
            <title>JuanBreath | Admin Profile</title>
            </Helmet>
            <h1 className='contentTitle'>My Profile</h1>
            <div className='content-center-modal'>
                <Row className='mt-4'>
                    <Col>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>First Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                value={data?.firstName}
                                onChange={e => dataEditMethod(e.target.value, 'firstName')}
                                required
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="lastName"
                                replaceControl="Last name"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={data?.middleName}
                                onChange={e => dataEditMethod(e.target.value, 'middleName')}
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="middleName"
                                replaceControl="Middle name"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Last Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text"
                                value={data?.lastName}
                                onChange={e => dataEditMethod(e.target.value, 'lastName')}
                                required
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="lastName"
                                replaceControl="Last name"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={'auto'}>
                        <Form.Group className="mb-2 small-input" controlId="formBasicEmail">
                            <Form.Label>Suffix</Form.Label>
                            <Form.Control 
                                type="text"
                                value={data?.suffix}
                                onChange={e => dataEditMethod(e.target.value, 'suffix')}
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="suffix"
                                replaceControl="Suffix"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Username <b className='text-danger'>*</b></Form.Label>
                    <Form.Control 
                        type="text"
                        value={data?.username}
                        onChange={e => dataEditMethod(e.target.value, 'username')}
                        required
                    />
                    <FormError
                        errorMessages={errorMsg}
                        field="username"
                        replaceControl="Username"
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email <b className='text-danger'>*</b></Form.Label>
                    <Form.Control 
                        type="email"
                        value={data?.email}
                        onChange={e => dataEditMethod(e.target.value, 'email')}
                        required
                    />
                    <FormError
                        errorMessages={errorMsg}
                        field="email"
                        replaceControl="Email"
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Location Assigned <b className='text-danger'>*</b></Form.Label>
                    <Form.Select aria-label="Default select example" onChange={e => dataEditMethod(e.target.value, 'locationAssigned')}>
                        <option selected disabled>{data?.locationAssigned}</option>
                        {
                            locations?.map((location, i) => {
                                return (<option key={i} value={location.name}>{location.name}</option>)
                            })
                        }
                    </Form.Select>
                    <FormError
                        errorMessages={errorMsg}
                        field="locationASsigned"
                        replaceControl="Location Assigned"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Role <b className='text-danger'>*</b></Form.Label>
                    <Form.Select aria-label="Default select example" onChange={e => dataEditMethod(e.target.value, 'role')}>
                        <option selected disabled>{data?.role}</option>
                        {
                            roles?.map((role, i) => {
                                return (<option key={i} value={role.name}>{role.name}</option>)
                            })
                        }
                    </Form.Select>
                    <FormError
                        errorMessages={errorMsg}
                        field="role"
                        replaceControl="Role"
                    />
                </Form.Group>
                <div className='full-page-modal-save-button'>
                    <button className='primaryBlockBtn' onClick={() => _putOneAdmin()}>Update Changes</button>
                </div>
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

export default ProfilePage