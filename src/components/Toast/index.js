import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const  ToastNotification = ({ message, status, showToast, setShowToast })  => {

  return (
    <ToastContainer className='toast-custom-spacing' position='bottom-end'>
        <Toast show={showToast} bg={status.toLowerCase()} onClose={() => setShowToast(!showToast)} delay={2500} autohide>
            <Toast.Header>
                <strong className="me-auto">{status ? status === "Danger" ? "Oops" : status : 'Something went wrong'}</strong>
                <small>A few seconds ago</small>
            </Toast.Header>
            <Toast.Body className={'text-white'}>{ message ? message : '' }</Toast.Body>
        </Toast>
    </ToastContainer>
  );
}

export default ToastNotification;