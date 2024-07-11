
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SinglePage from './Task/SinglePage/SinglePage';
import MainPage from './Task/MainPage/MainPage';
import Componant1 from './HOC/Componant1';
import Componant2 from './HOC/Componant2';

// import HeeloForm from './HeeloForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/user-details/:id' element={<SinglePage />} />
        </Routes>
      </BrowserRouter>


      {/* -----------------------HOC------------------------------- */}
{/* 
      <Componant1 name="pjhdf"/>
      <Componant2 /> */}

      <ToastContainer />
    </>
  );
}

export default App;
