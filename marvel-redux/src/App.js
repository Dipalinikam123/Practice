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
import Footer from './UI/Componant/Footer';
import { Provider } from 'react-redux';
import { store } from './Store/configureStore';
import LoginForm from './UI/Forms/LoginForm';
// import MarvelCommics from './UI/Pages/MarvelComics';

// Lazy load the MarvelCommic component
const MarvelComics = lazy(() => import('./UI/Pages/MarvelComics'));





function App() {
  return (
    <div>
      <Provider store={store}>
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
                <MarvelComics />
              </Suspense>
            }
          />
          <Route path='/singlecomic/:id' element={<SinglePage/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
