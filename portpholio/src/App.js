import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './UI/Componant/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './UI/Pages/Home';
import About from './UI/Pages/About';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
