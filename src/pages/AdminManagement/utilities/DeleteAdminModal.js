import React from 'react';
// import css
import './CustomModals.css'
// import package/s
import { Modal, Form } from 'react-bootstrap'

const DeleteAdminModal = ({showFunction, onHideFunction, data}) => {
    return (
        <>
            <Modal show={showFunction} onHide={onHideFunction}>
                <Modal.Header closeButton >
                    <Modal.Title className='deleteModalTitle'>Confirm to Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <p>
                            If you proceed to delete <b className='deleteLocationName'>insert admin name</b>,
                            their account will no longer exist in the system and this can not be undone.
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

export default DeleteAdminModal;
