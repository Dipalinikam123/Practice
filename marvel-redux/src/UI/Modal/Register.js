import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegForm from '../Forms/RegForm';

function Register({modal,toggle,user,handleSubmit,handleChange,errors}) {
  

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register Form</ModalHeader>
        <ModalBody>
         <RegForm user={user} handleSubmit={handleSubmit} handleChange={handleChange} toggle={toggle} errors={errors}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Register;