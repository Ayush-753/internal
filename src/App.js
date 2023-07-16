import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Course from './Components/Course';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
