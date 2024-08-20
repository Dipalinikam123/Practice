import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import MarvelCommic from './UI/MarvelCommic';
import React, { Suspense,lazy } from "react";
import Header from './UI/Navs/Header';
import NavBar from './UI/Navs/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './UI/Pages/Home';
import About from './UI/Pages/About';
import Contact from './UI/Pages/Contact';
// import { lazy } from 'react';

function App() {
  const MarvelCommic = lazy(() => import('./UI/MarvelCommic'));

  // const timestamp = new Date().getTime();
  // console.log(timestamp);

  return (
    <div >
     
      {/* <Suspense fallback={<div className='text-center'>Loading...</div>}>
        <MarvelCommic />
      </Suspense> */}

      <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
