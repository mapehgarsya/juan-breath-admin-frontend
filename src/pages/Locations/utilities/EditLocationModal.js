import React from 'react'
// import css
import './CustomModals.css'
// import package/s
import { Modal, Form } from 'react-bootstrap'


const EditLocationModal = ({ showFunction, onHideFunction, data, dataEditMethod, submitEditMethod }) => {

    return (
        <>
            <Modal show={showFunction} onHide={onHideFunction}>
                <Modal.Header closeButton >
                    <Modal.Title className='editModalTitle'>Edit a Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text"
                                value={data?.name}
                                onChange={e => dataEditMethod(e.target.value, 'name')}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Location Address <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text"
                                value={data?.address}
                                onChange={e => dataEditMethod(e.target.value, 'address')}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Officer in Charge <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text"
                                value={data?.officerInCharge} 
                                onChange={e => dataEditMethod(e.target.value, 'officerInCharge')}
                                required
                            />
                        </Form.Group>
                        <button className='primaryBlockBtn' onClick={() => submitEditMethod()}>Save Changes</button>
                    </>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default EditLocationModal;
