import React from 'react';
import { Modal, Form } from 'react-bootstrap'


const EditAdminModal = ({showFunction, onHideFunction, data}) => {
    return (
        <>
            <Modal show={showFunction} onHide={onHideFunction}>
                <Modal.Header closeButton >
                    <Modal.Title>Edit an Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type="text"
                            required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Location Address</Form.Label>
                            <Form.Control 
                            type="text"
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Officer in Charge</Form.Label>
                            <Form.Control 
                            type="text"
                            required
                            />
                        </Form.Group>
                        <button className='primaryBlockBtn'>Save Changes</button>
                    </>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default EditAdminModal;
