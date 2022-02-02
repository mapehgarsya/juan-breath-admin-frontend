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
                    <Modal.Title>Add an Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form.Text>
                            This form will let you add a new admin to the system.
                            Please fill in the details for the new admin.
                        </Form.Text>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter name of location"
                            required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Faculty in Charge</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter location's address" 
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Location Assigned</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Name of officer in charge"
                            required
                            />
                        </Form.Group>
                        <button className='primaryBlockBtn'>Add Location</button>
                    </>
                </Modal.Body>
                
            </Modal>
        </>
        );
    }
    
export default AddAdminModal;