import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function PostModal({ modal, toggle, setPostInput, postInput, addPostHandler }) {

  console.log("---post--", postInput);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Post</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="exampleFormControlInput1" className='mb-2'>Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Content Title" onChange={(e) => setPostInput({ ...postInput, title: e?.target?.value })} />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="exampleFormControlTextarea1" className='mb-2'>Body</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Write Your Story...!' rows="3" onChange={(e) => setPostInput({ ...postInput, body: e?.target?.value })}></textarea>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='border py-1 px-4 rounded fw-semibold' onClick={addPostHandler}>Add Post</button>
          </div>
        </form>
       </ModalBody>
     </Modal>
  );
}

