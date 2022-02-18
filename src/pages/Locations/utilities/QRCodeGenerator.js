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
                            <div className='d-flex justify-content-center pt-4'>
                                <img src={logo} alt='logo' height={50}/>
                                <div className='qr-code-title'>
                                    <h3>JuanBreath</h3> 
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-1'>
                                <div className='line'></div>
                            </div>
                             <div className='qr-code-title'>
                                <h5>QR Code Location</h5> 
                                <h1>{data?.name.toUpperCase()}</h1>
                            </div>
                            <div className='qr-code-content-contianer pb-5'>
                                <div className='qr-content'>
                                    <img src={qrCodelocationName} className="mb-3 mt-3" height={350} alt="QR Code Holder" />
                                </div>
                            </div>
                        </div>
                        <div className='full-page-modal-save-button'>
                            <button className='primaryBlockBtn'>Save QR Code as Image</button>
                        </div>
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default QRCodeGeneratorModal;
