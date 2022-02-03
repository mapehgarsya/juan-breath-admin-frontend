import React from 'react'
// import package/s
import { Modal, Form } from 'react-bootstrap'


const EditLocationModal = ({ showFunction, onHideFunction, data, dataEditMethod, submitEditMethod }) => {

    return (
        <>
            <Modal show={showFunction} onHide={onHideFunction}>
                <Modal.Header closeButton >
                    <Modal.Title>Edit a Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                value={data?.name}
                                onChange={e => dataEditMethod(e.target.value, 'name')}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Location Address</Form.Label>
                            <Form.Control 
                                type="text"
                                value={data?.address}
                                onChange={e => dataEditMethod(e.target.value, 'address')}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Officer in Charge</Form.Label>
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
