import React from 'react'
// import package/s
import { Modal } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// components
import PositiveUserProfile from './UserProfile'
import CloseContactTable from './CloseContactTable'
import VisitationHistoryTable from './VisitationHistoryTable'

const CloseContactTracerModal = ({ showFunction, onHideFunction, data, closeContactData, visitationHistroyData }) => {

    return (
        <>
            <Modal show={showFunction} fullscreen={true} onHide={onHideFunction}>
                <Modal.Header className='modal-header-bg' closeButton >
                    <Modal.Title className='modal-title'>Positive Case Information Summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='report-container'>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="User Information">
                                <PositiveUserProfile
                                    data={data}
                                />
                            </Tab>
                            <Tab eventKey="visitation-history" title="Visitation History">
                                <VisitationHistoryTable
                                    data={visitationHistroyData}
                                />
                            </Tab>
                            <Tab eventKey="close-contact" title="Close Contacts">
                                <CloseContactTable
                                    data={closeContactData}
                                />
                            </Tab>
                        </Tabs>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CloseContactTracerModal;
