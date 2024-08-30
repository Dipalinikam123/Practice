
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SinglePage from './Task/SinglePage/SinglePage';
import MainPage from './Task/MainPage/MainPage';

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

      <ToastContainer />
    </>
  );
}

export default App;
