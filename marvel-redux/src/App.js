import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy } from "react";
import Header from './UI/Componant/Header';
import NavBar from './UI/Componant/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './UI/Pages/Home';
import About from './UI/Pages/About';
import Contact from './UI/Pages/Contact';
import SinglePage from './UI/Pages/SinglePage';

// Lazy load the MarvelCommic component
const MarvelCommic = lazy(() => import('./UI/Pages/MarvelCommic'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* Route for MarvelCommic */}
          <Route 
            path='/comic' 
            element={
              <Suspense fallback={<div className='text-center'>Loading...</div>}>
                <MarvelCommic />
              </Suspense>
            }
          />
          <Route path='/singlecomic/:id' element={<SinglePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
