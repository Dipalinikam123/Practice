import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GetAllUser from './pages/GetAllUser';
import UserProfile from './pages/UserProfile';
import NavBar from './components/NavBar';

export default function UserRoute() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Use 'element' instead of 'Component' */}
          <Route path='/' element={<Home />} />
          <Route path='/get-all-user' element={<GetAllUser />} />
          <Route path='/user-profile' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
