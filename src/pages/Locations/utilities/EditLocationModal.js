import React, {useState,useContext} from 'react'
// import package/s
import { Modal, Form } from 'react-bootstrap'


const EditLocationModal = ({showFunction, onHideFunction, data}) => {

    const id = data._id

    const [name, setName] = useState(data.name)
    const [address, setAddress] = useState(data.name)
    const [officerInCharge, setOfficerInCharge] = useState(data.name)

    // functions not working

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
                            value={name}
                            required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Location Address</Form.Label>
                            <Form.Control 
                            type="text"
                            value={address}
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Officer in Charge</Form.Label>
                            <Form.Control 
                            type="text"
                            value={officerInCharge} 
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

export default EditLocationModal;
