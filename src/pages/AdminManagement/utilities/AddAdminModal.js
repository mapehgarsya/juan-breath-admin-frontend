import React, {useState} from 'react'
// import package/s
import { Modal, Form } from 'react-bootstrap'

const AddAdminModal = () => {
    
    const [username, setAdminUsername] = useState('');
    const [facultyInCharge, setAdminfacultyInCharge] = useState('');
    const [locationAssigned, setlocationAssigned] = useState('');
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Last Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                            type="text"
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Suffix</Form.Label>
                            <Form.Control 
                            type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Username <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                            type="text"
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                            type="email"
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Location Assigned <b className='text-danger'>*</b></Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Choose a location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                                <option value="3">Location 3</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Role <b className='text-danger'>*</b></Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Choose a Role</option>
                                <option value="1">Role 1</option>
                                <option value="2">Role 2</option>
                                <option value="3">Role 3</option>
                            </Form.Select>
                        </Form.Group>
                        <button className='primaryBlockBtn'>Add Admin</button>
                    </>
                </Modal.Body>
                
            </Modal>
        </>
        );
    }
    
export default AddAdminModal;