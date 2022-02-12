import React from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap'


const EditAdminModal = ({showFunction, onHideFunction, data}) => {
    console.log(data)
    return (
        <>
            <Modal show={showFunction} size="lg" onHide={onHideFunction}>
                <Modal.Header className='modal-header-bg' closeButton >
                    <Modal.Title className='editModalTitle wide-modal-title'>Update Administrator's Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-center-modal'>
                        <Row className='mt-4'>
                            <Col>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>First Name <b className='text-danger'>*</b></Form.Label>
                                <Form.Control 
                                type="text" 
                                required
                                />
                            </Form.Group></Col>
                            <Col>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                />
                            </Form.Group></Col>
                            <Col>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Last Name <b className='text-danger'>*</b></Form.Label>
                                <Form.Control 
                                type="text"
                                required
                                />
                            </Form.Group></Col>
                            <Col lg={'auto'}>
                            <Form.Group className="mb-2 small-input" controlId="formBasicEmail">
                                <Form.Label>Suffix</Form.Label>
                                <Form.Control 
                                type="text"
                                />
                            </Form.Group></Col>
                        </Row>
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
                        <div className='full-page-modal-save-button'>
                            <button className='primaryBlockBtn'>Update Account Changes</button>
                        </div>
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default EditAdminModal;
