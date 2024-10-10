import React from 'react';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import RegisterForm from '../form/RegisterForm';

function Register({ modal, toggle,logToggle,updateProfile,isEditing,updateUser }) {

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <RegisterForm updateProfile={updateProfile} isEditing={isEditing} updateUser={updateUser} toggle={toggle}/>
        <ModalFooter className='d-flex justify-content-center'>
          <p >Already Have Account..? <span role='button' className='text-primary text-decoration-underline' onClick={logToggle}>Login Here...</span></p>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register;