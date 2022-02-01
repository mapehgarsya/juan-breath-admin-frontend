import React, {useState} from 'react'
// import package/s
import { useForm } from 'react-hook-form'
import { Button, Modal, Form } from 'react-bootstrap'

const AddLoc = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log(data)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button className='primaryBtn' onClick={handleShow}>Add Location</button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton >
                <Modal.Title>Add a Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Text>
                        This form will let you add a new location to the system.
                        Please fill in the details for the new location.
                    </Form.Text>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name of location" required/>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>Location Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter location's address" required/>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>Officer in Charge</Form.Label>
                      <Form.Control type="text" placeholder="Name of officer in charge" required/>
                    </Form.Group>
                    <button type='submit' className='primaryBlockBtn'>Add Location</button>
                </Form>
            </Modal.Body>
            
        </Modal>
      </>
    );
  }
  
export default AddLoc;