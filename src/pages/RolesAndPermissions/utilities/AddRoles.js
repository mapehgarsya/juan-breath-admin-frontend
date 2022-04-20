import React, { useState } from 'react'
// import css
import './CustomModals.css'
// import package/s
import { Modal, Form } from 'react-bootstrap'

const AddRoleModal = ({ method, permissions, modules }) => {
    
    const [name, setLocationName] = useState('');
    const [description, setLocationAddress] = useState('');
    const [customPermissions, setCustomPermissions] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const onSubmit = () => {
    // create new instance of location for sending

        const locationSchema = {
            name: name,
            description: description,
            permissions: customPermissions
        }
        // pass the data to the method provided
        method(locationSchema);

        // close the modal
        setShow(false);
    }

    return (
        <>
            <button className='primaryBtn' onClick={handleShow}>Add Role</button>
            <Modal Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Header className='modal-header-bg' closeButton >
                    <Modal.Title className='wide-modal-title'>Create Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-center-modal'>
                        <Form.Text>
                            This form will let you add a new role to the system.
                        </Form.Text>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Role Name <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter name of role" 
                                onChange={e => setLocationName(e.target.value)} 
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Role Description <b className='text-danger'>*</b></Form.Label>
                            <Form.Control 
                                type="text"
                                as="textarea" 
                                rows={3}
                                placeholder="Type something" 
                                onChange={e => setLocationAddress(e.target.value)} 
                                required
                            />
                        </Form.Group>

                        {
                            modules.map((module, i) => {
                                return(
                                    <div>
                                        {/* renders the module name */}
                                        <h4>
                                            <Form.Check 
                                                type="checkbox"
                                                label={module} 
                                                onClick={() => alert('test')} 
                                            />
                                        </h4>
                                        <hr/>
                                        {/* segregate the permissions */}
                                        <div>
                                            {
                                                permissions?.map((permission) => { 
                                                    if(permission.name.split(':')[0] === module) {
                                                        return <div>
                                                            <Form.Check 
                                                                type="checkbox"
                                                                label={permission.name} 
                                                                onClick={() => alert('test')} 
                                                            />
                                                        </div>
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className='full-page-modal-save-button'>
                            <button className='primaryBlockBtn' onClick={() => onSubmit()}>Create Location</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AddRoleModal;