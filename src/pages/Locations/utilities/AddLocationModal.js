import React, {useState} from 'react'
// import css
import './CustomModals.css'
// import package/s
import { Modal, Form } from 'react-bootstrap'

const AddLocationModal = ({ method }) => {
    
  const [name, setLocationName] = useState('');
  const [address, setLocationAddress] = useState('');
  const [officerInCharge, setOfficerInCharge] = useState('');
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = () => {
    // create new instance of location for sending

    const locationSchema = {
        name: name,
        address: address,
        officerInCharge: officerInCharge
      };
      // pass the data to the method provided
      method(locationSchema);

      // close the modal
      setShow(false);
  }
  return (
    <>
      <button className='primaryBtn' onClick={handleShow}>Add Location</button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header className='modal-header-bg' closeButton >
              <Modal.Title className='addModalTitle wide-modal-title'>Create Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className='content-center-modal'>
                  <Form.Text>
                      This form will let you add a new location to the system.
                      Please fill in the details for the new location.
                  </Form.Text>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Name <b className='text-danger'>*</b></Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter name of location" 
                      onChange={e => setLocationName(e.target.value)} 
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Location Address <b className='text-danger'>*</b></Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter location's address" 
                      onChange={e => setLocationAddress(e.target.value)} 
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Officer in Charge <b className='text-danger'>*</b></Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Name of officer in charge" 
                      onChange={e => setOfficerInCharge(e.target.value)} 
                      required
                    />
                  </Form.Group>
                  <div className='full-page-modal-save-button'>
                    <button className='primaryBlockBtn' onClick={() => onSubmit()}>Create Location</button>
                  </div>
              </div>
          </Modal.Body>
          
      </Modal>
    </>
    );
  }
  
export default AddLocationModal;