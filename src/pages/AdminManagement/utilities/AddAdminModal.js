import React, {useState} from 'react'
// import package/s
import { Modal, Form } from 'react-bootstrap'

const AddAdminModal = ({ method, roles, locations, handleClose, handleShow, show }) => {
    
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [suffix, setSuffix] = useState('');
    const [username, setAdminUsername] = useState('');
    const [email, setEmail] = useState('');
    const [locationAssigned, setlocationAssigned] = useState('');
    const [role, setRole] = useState('');

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
                                onChange={e => setFirstName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => setMiddleName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Last Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => setLastName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Suffix</Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => setSuffix(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Username <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => setAdminUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Location Assigned <b className='text-danger'>*</b></Form.Label>
                            <Form.Select aria-label="Location List" onChange={e => setlocationAssigned(e.target.value)}>
                                <option selected disabled>Choose a location</option>
                                {
                                    locations?.map((location, i) => {
                                        return (<option key={i} value={location.name}>{location.name}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Role <b className='text-danger'>*</b></Form.Label>
                            <Form.Select aria-label="Roles List" onChange={e => setRole(e.target.value)}>
                                <option selected disabled>Choose a Role</option>
                                {
                                    roles?.map((role, i) => {
                                        return (<option key={i} value={role.name}>{role.name}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <button className='primaryBlockBtn' onClick={() => onSubmit()}>Add Admin</button>
                    </>
                </Modal.Body>
                
            </Modal>
        </>
        );
    }
    
export default AddAdminModal;