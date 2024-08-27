import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegForm from '../Forms/RegForm';

function Register({modal,toggle,user,handleSubmit,handleChange}) {
  

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
         <RegForm user={user} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Register;