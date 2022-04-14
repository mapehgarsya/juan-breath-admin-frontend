import React from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap'
import { FormError } from '../../../components/ErrorDisplay/FormError';
import Spinner from 'react-bootstrap/Spinner'

const ResetPassword = ({ 
    showFunction, 
    onHideFunction, 
    errorMsg, 
    currentPassword, 
    newPassword, 
    confirmNewPassword, 
    setCurrentPassword, 
    setNewPassword, 
    setConfirmNewPassword,
    showNextStep,
    handleConfirmCurrentPassword,
    isSubmitting,
    resetPasswordFunction 
}) => {
    return (
        <>
            <Modal show={showFunction} size="md" onHide={onHideFunction}>
                <Modal.Header className='modal-header-bg' closeButton >
                    <Modal.Title className='editModalTitle wide-modal-title'>Reset Password Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-center-modal'>
                        {
                            !showNextStep && 
                            <Row className='mt-4'>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>Enter Current Password <b className='text-danger'>*</b></Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            value={currentPassword}
                                            onChange={e => setCurrentPassword(e.target.value)}
                                            required
                                        />
                                        <FormError
                                            errorMessages={errorMsg}
                                            field="password"
                                            replaceControl="Password"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        }
                        {
                            showNextStep &&  <Row className='mt-4'>
                            <Col>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Enter New Password <b className='text-danger'>*</b></Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        value={newPassword}
                                        onChange={e => setNewPassword(e.target.value)}
                                        required
                                    />
                                    <FormError
                                        errorMessages={errorMsg}
                                        field="newPassword"
                                        replaceControl="New Password"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Confirm New Password <b className='text-danger'>*</b></Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        value={confirmNewPassword}
                                        onChange={e => setConfirmNewPassword(e.target.value)}
                                        required
                                    />
                                    <FormError
                                        errorMessages={errorMsg}
                                        field="confirmNewPassword"
                                        replaceControl="Confirmation Password"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        }
                        <div className='full-page-modal-save-button'>
                            {
                                !showNextStep && <button className='primaryBlockBtn' onClick={() => handleConfirmCurrentPassword()}>{
                                isSubmitting ? 
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                :   "Proceed"
                            }</button>
                            }
                            {
                                showNextStep && <button  className='primaryBlockBtn' onClick={() => resetPasswordFunction()} >{
                                isSubmitting ? 
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                :   "Update Password"
                            }</button>
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ResetPassword;
