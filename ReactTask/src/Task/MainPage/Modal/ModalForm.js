import React from 'react';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import UserForm from './UserForm';


export default function ModalForm({toggle,modal,user,setUser,submitHandeler,validated,updateHandler,buttonFlag}) {
    
 
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add User</ModalHeader>
        <ModalBody>
          <UserForm user={user} setUser={setUser} submitHandeler={submitHandeler} validated={validated} updateHandler={updateHandler} buttonFlag={buttonFlag}/>
        </ModalBody>
      </Modal>
    </div>
  );
}
