
import './App.css';
import './assets/css/main.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Component/Main';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Main/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
