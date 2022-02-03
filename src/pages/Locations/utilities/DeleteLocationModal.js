import React from 'react';
// import css
import './CustomModals.css'
// import package/s
import { Modal, Form } from 'react-bootstrap'

const DeleteLocationModal = ({showFunction, onHideFunction, data}) => {
    return (
        <>
            <Modal show={showFunction} onHide={onHideFunction}>
                <Modal.Header closeButton >
                    <Modal.Title className='deleteModalTitle'>Confirm to Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <p>
                            If you confirm the deletion of <b className='deleteLocationName'>insert location name</b>,
                            all logs and data will be deleted from the system and can no longer be retrieved.
                        </p>
                        <div className='flex-end'>
                            <button className='secondaryBtn mr-10'>Cancel</button>
                            <button className='warningBtn'>Delete</button>
                        </div>
                        
                    </>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default DeleteLocationModal;
