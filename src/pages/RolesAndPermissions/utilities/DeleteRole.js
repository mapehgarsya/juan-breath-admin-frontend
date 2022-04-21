import React from 'react';
// import css
import './CustomModals.css'
// import package/s
import { Modal } from 'react-bootstrap'

const DeleteRoleModal = ({ showFunction, onHideFunction, data, submitDeleteMethod }) => {
    return (
        <>
            <Modal show={showFunction} onHide={onHideFunction}>
                <Modal.Header>
                    <Modal.Title className='deleteModalTitle'>Confirm to Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <p>
                            If you confirm the deletion of <b className='deleteLocationName'>{data}</b>,
                            all logs and data will be deleted from the system and can no longer be retrieved.
                        </p>
                        <div className='flex-end'>
                            <button className='secondaryBtn mr-10' onClick={() => onHideFunction()}>Cancel</button>
                            <button className='warningBtn' onClick={() => submitDeleteMethod()}>Delete</button>
                        </div>
                        
                    </>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default DeleteRoleModal;
