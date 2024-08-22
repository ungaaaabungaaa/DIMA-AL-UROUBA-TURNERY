import './Styles/index.css';
import React from 'react';
import usePreventActions from './Hooks/usePreventActions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Departments from './Pages/Departments';
import About from './Pages/About';
import Terms from './Pages/Terms';
import CNC from './Pages/CNC';
import Conventional from './Pages/Conventional';
import Electrical from './Pages/Electrical';
import Gearbox from './Pages/GearBox';
import Mold from './Pages/Mold';
import Sheet from './Pages/Sheet';
import Welding from './Pages/Welding';
import Shop from './Pages/Shop';
import ScrollToTop from './Hooks/ScrollToTop';


function App() {
  usePreventActions();
  return (
    <>
     <Router>
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cnc" element={<CNC />} />
        <Route path="/conventional" element={<Conventional />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/gearbox" element={<Gearbox />} />
        <Route path="/mold" element={<Mold />} />
        <Route path="/sheetmetal" element={<Sheet />} />
        <Route path="/welding" element={<Welding />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
