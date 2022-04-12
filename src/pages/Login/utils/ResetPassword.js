import React from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap'
import { FormError } from '../../../components/ErrorDisplay/FormError';

const ResetPassword = ({ 
    showFunction, 
    onHideFunction, 
    errorMsg, 
    currentPassword, 
    newPassword, 
    confirmNewPassword, 
    setCurrentPassword, 
    setNewPassword, 
    setConfirmNewPassword 
}) => {
    return (
        <>
            <Modal show={showFunction} size="md" onHide={onHideFunction}>
                <Modal.Header className='modal-header-bg' closeButton >
                    <Modal.Title className='editModalTitle wide-modal-title'>Reset Password Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-center-modal'>
                        <Row className='mt-4'>
                            <Col>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Please Confirm Current Password <b className='text-danger'>*</b></Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        value={currentPassword}
                                        onChange={e => setCurrentPassword(e.target.value)}
                                        required
                                    />
                                    <FormError
                                        errorMessages={errorMsg}
                                        field="lastName"
                                        replaceControl="Last name"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className='full-page-modal-save-button'>
                            <button className='primaryBlockBtn' onClick={() => {}}>Proceed</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ResetPassword;
