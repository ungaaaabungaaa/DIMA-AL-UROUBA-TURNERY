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

import ConcaveMilingCenter from '../src/ProductPages/ConcaveMilingCenter';
import FlyCutter from '../src/ProductPages/FlyCutter';
import BallNoseEndMill from '../src/ProductPages/BallNoseEndMill';
import FaceMillingCutter from '../src/ProductPages/FaceMillingCutter';
import EndMillCutter from '../src/ProductPages/EndMillCutter';
import ThreadMillCutter from '../src/ProductPages/ThreadMillCutter';
import RoughingEndMill from '../src/ProductPages/RoughingEndMill';
import WoodRuffCutter from '../src/ProductPages/WoodRuffCutter';



import CNCMachning from '../src/MachningPages/CNCMachning';
import BendingMachning from '../src/MachningPages/BendingMachning';
import GenralMachning from '../src/MachningPages/GenralMachning';
import LaserMachning from '../src/MachningPages/LaserMachning';
import MotorMachning from '../src/MachningPages/motorsMachning';
import WireCutMachning from '../src/MachningPages/WireCutMachning';






function App() {
  //usePreventActions();
  return (
    <>
     <Router>
      <ScrollToTop /> {/* need this for the  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dep" element={<Departments />} />
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

        <Route path="/concavemilingcenter" element={<ConcaveMilingCenter />} />
        <Route path="/flycutter" element={<FlyCutter />} />
        <Route path="/ballnoseendmill" element={<BallNoseEndMill />} />
        <Route path="/facemillingcutter" element={<FaceMillingCutter />} />
        <Route path="/endmillcutter" element={<EndMillCutter />} />
        <Route path="/threadmillcutter" element={<ThreadMillCutter />} />
        <Route path="/roughingendmill" element={<RoughingEndMill />} />
        <Route path="/woodruffcutter" element={<WoodRuffCutter />} />



        <Route path="/CNCMachning" element={<CNCMachning />} />
        <Route path="/BendingMachning" element={<BendingMachning />} />
        <Route path="/GenralMachning" element={<GenralMachning />} />
        <Route path="/LaserMachning" element={<LaserMachning />} />
        <Route path="/MotorMachning" element={<MotorMachning />} />
        <Route path="/WireCutMachning" element={<WireCutMachning />} />




      </Routes>
    </Router>
    </>
  );
}

export default App;
