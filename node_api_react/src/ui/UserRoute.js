import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GetAllUser from './pages/GetAllUser';
import UserProfile from './pages/UserProfile';
import NavBar from './components/NavBar';
import GetUser from './pages/GetUser';
import axios from 'axios';


const inputFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dob: '',
  gender: '',
  hobby: [], // Store hobbies as an array
}
export default function UserRoute() {
  const [logModal, setLogModal] = useState(false);
  const [regModal, setRegModal] = useState(false);
  const [updateProfile, setUpdateprofile] = useState(inputFields)
  const [isEditing, setIsEditing] = useState(false); // New state for edit mode


  const toggleLogModal = () => {
    setLogModal(!logModal);
    if (regModal) setRegModal(false); // Close register modal if it's open
  };

  const toggleRegModal = () => {
    setRegModal(!regModal);
    if (logModal) setLogModal(false); // Close login modal if it's open

  };
  const updateFormHandler = (data) => {
    console.log("----data--", data)
    toggleRegModal()
    setUpdateprofile(data)
    setIsEditing(true);
  }

  const updateUser = (e, newData) => {
    e.preventDefault();
    console.log("--newdata-----", newData)
    const token = JSON.parse(localStorage.getItem('token'));
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios({
            method: 'put',
            url: `https://backendproject-1ezp.onrender.com/users/${newData?._id}`,
            headers: header.headers,
            data:newData
        })
            .then((res) => {
                console.log("User profile Update successfully", res);
                setUpdateprofile(inputFields)
                toggleRegModal()
            })
            .catch((err) => {
                console.log("---err", err);
            });
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar logModal={logModal} regModal={regModal} toggleLogModal={toggleLogModal} toggleRegModal={toggleRegModal} updateProfile={updateProfile} isEditing={isEditing} updateUser={updateUser} />
        <Routes>
          {/* Use 'element' instead of 'Component' */}
          <Route path='/' element={<Home />} />
          <Route path='/get-all-user' element={<GetAllUser />} />
          <Route path='/get-user/:id' element={<GetUser />} />
          <Route path='/user-profile' element={<UserProfile toggleLogModal={toggleLogModal} updateFormHandler={updateFormHandler} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
