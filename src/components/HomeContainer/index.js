import React, { useState } from 'react';
import HomeNav from '../HomeNav';
import Sidebar from '../SideBar';
import ResetPassword from '../../pages/Login/utils/ResetPassword';

export default function HomeContainer (props) {
  // set up password and new password variables
  const [showResetModal, setShowResetModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState([])
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // modal show and hide
  const handleCloseShowResetModal = () => setShowResetModal(false);

  // add reset method
  // add toast notif
  return (
    <div className='customContainer '>
        <div className='homeWrapper'>
            <Sidebar />
            <div className='navAndContentDiv'>
                <HomeNav 
                  showResetPasswordModal={e => setShowResetModal(!showResetModal)}
                />
                <div className='contentWrapper'>
                    {props.children}
                </div>
            </div>
        </div>
        <ResetPassword
          showFunction = {showResetModal}
          errorMsg={errorMsg}
          onHideFunction = {handleCloseShowResetModal}
          currentPassword={currentPassword}
          newPassword={newPassword}
          confirmNewPassword={confirmNewPassword}
          setCurrentPassword={setCurrentPassword}
          setNewPassword={setNewPassword}
          setConfirmNewPassword={setConfirmNewPassword}
        />
    </div>
  )
}

