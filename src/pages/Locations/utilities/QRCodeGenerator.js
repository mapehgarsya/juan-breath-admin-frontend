import React from 'react'
// import css
import './CustomModals.css'
import logo from '../../../media/logo-White.png'
// import package/s
import { Modal } from 'react-bootstrap'


const QRCodeGeneratorModal = ({ showFunction, onHideFunction, data, qrCodelocationName }) => {

    return (
        <>
            <Modal show={showFunction} fullscreen={true} onHide={onHideFunction}>
                <Modal.Header className='modal-header-bg' closeButton >
                    <Modal.Title className='editModalTitle wide-modal-title'>Generated QR Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='item-center-modal'>
                        <div className='qr-container'>
                            <div>
                                <div className='qr-code-title d-flex justify-content-center'>
                                    <img src={logo} alt='logo' height={40}/>
                                    <h2>JuanBreath</h2> 
                                </div>
                                <div className='d-flex justify-content-center mt-1'>
                                    <div className='line'></div>
                                </div>
                                <div className='qr-code-title'>
                                    <h4>QR Code Location</h4>
                                </div> 
                            </div>
                            <div className='qr-code-title'>
                                <h1>{data?.name.toUpperCase()}</h1>
                            </div>
                            <div className='qr-code-content-container'>
                                <div className='qr-content'>
                                    <img src={qrCodelocationName} className="QRImg" alt="QR Code Holder" />
                                </div>
                            </div>
                        </div>
                        <div className='full-page-modal-save-button'>
                            <button className='primaryBtn'>Save QR Code as Image</button>
                        </div>
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default QRCodeGeneratorModal;
