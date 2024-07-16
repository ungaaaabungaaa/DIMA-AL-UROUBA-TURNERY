import './Styles/index.css';
import React from 'react';
import usePreventActions from './Hooks/usePreventActions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Departments from './Pages/Departments';
import About from './Pages/About';
import Terms from './Pages/Terms';

function App() {
  // usePreventActions();
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
