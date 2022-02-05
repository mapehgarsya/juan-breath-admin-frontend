import React, {useState} from 'react'
// import package/s
import { Modal, Form } from 'react-bootstrap'
import { FormError } from '../../../components/ErrorDisplay/FormError';

const AddAdminModal = ({ method, roles, locations, handleClose, handleShow, show, errorMsg, handleClearError }) => {
    
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [suffix, setSuffix] = useState('');
    const [username, setAdminUsername] = useState('');
    const [email, setEmail] = useState('');
    const [locationAssigned, setlocationAssigned] = useState('');
    const [role, setRole] = useState('');

    const handleinput = (field, value) => {
        switch(field) {
            case 'firstName': 
                setFirstName(value)
                handleClearError(field)
                break;
            case 'middleName': 
                setMiddleName(value)
                handleClearError(field)
                break;
            case 'lastName': 
                setLastName(value)
                handleClearError(field)
                break;
            case 'suffix': 
                setSuffix(value)
                handleClearError(field)
                break;
            case 'username': 
                setAdminUsername(value)
                handleClearError(field)
                break;
            case 'email': 
                setEmail(value)
                handleClearError(field)
                break;
            case 'assignedLocation': 
                setlocationAssigned(value)
                handleClearError(field)
                break;
            case 'role': 
                setRole(value)
                handleClearError(field)
                break;
            default: 
                setFirstName('')
        }
    }

    const onSubmit = () => {
        // create new instance of location for sending
        const newAdminSchema = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            suffix: suffix,
            username: username,
            email: email,
            locationAssigned: locationAssigned,
            role: role
        };
        // pass the data to the method provided
        method(newAdminSchema);
    }

    return (
        <>
            <button className='primaryBtn' onClick={handleShow}>Add Admin</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className='addModalTitle'>Add an Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form.Text>
                            This form will let you add a new admin to the system.
                            Please fill in the details for the new admin.
                        </Form.Text>
                        <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                            <Form.Label>First Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => handleinput('firstName', e.target.value)}
                                required
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="firstName"
                                replaceControl="First name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => handleinput('middleName',e.target.value)}
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="middleName"
                                replaceControl="Middle name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Last Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => handleinput('lastName',e.target.value)}
                                required
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="lastName"
                                replaceControl="Last name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Suffix</Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => handleinput('suffix',e.target.value)}
                            />
                            <FormError
                                errorMessages={errorMsg}
                                field="suffix"
                                replaceControl="Suffix"
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Username <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => handleinput('username',e.target.value)}
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
                                type="text" 
                                onChange={e => handleinput('email',e.target.value)}
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
                            <Form.Select 
                                aria-label="Location List" 
                                onChange={e => handleinput('assignedLocation',e.target.value)}
                            >
                                <option selected disabled>Choose a location</option>
                                {
                                    locations?.map((location, i) => {
                                        return (<option key={i} value={location.name}>{location.name}</option>)
                                    })
                                }
                            </Form.Select>
                            <FormError
                                errorMessages={errorMsg}
                                field="location"
                                replaceControl="Location"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Role <b className='text-danger'>*</b></Form.Label>
                            <Form.Select 
                                aria-label="Roles List" 
                                onChange={e => handleinput('role',e.target.value)}
                            >
                                <option selected disabled>Choose a Role</option>
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
                        <button className='primaryBlockBtn' onClick={() => onSubmit()}>Add Admin</button>
                    </>
                </Modal.Body>
                
            </Modal>
        </>
        );
    }
    
export default AddAdminModal;