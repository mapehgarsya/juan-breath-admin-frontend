import React from 'react';
import { Modal, Form } from 'react-bootstrap'


const EditAdminModal = ({showFunction, onHideFunction, data}) => {
    return (
        <>
            <Modal show={showFunction} onHide={onHideFunction}>
                <Modal.Header closeButton >
                    <Modal.Title className='editModalTitle'>Edit an Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
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
                        <button className='primaryBlockBtn'>Save Changes</button>
                    </>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default EditAdminModal;
