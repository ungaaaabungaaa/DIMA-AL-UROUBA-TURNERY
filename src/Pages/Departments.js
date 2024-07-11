import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Departments.css';
import '../Styles/Header.css';
import CNC from '../Resources/Logo/cnc.svg'
import Conventional from '../Resources/Logo/Conventional.svg';
import Electrical from '../Resources/Logo/electrical.svg';
import Mold from '../Resources/Logo/mold.svg';
import Sheet from '../Resources/Logo/Sheet Metal.svg';
import Welding from '../Resources/Logo/weild.svg';
import GearBox from '../Resources/Logo/Gear.svg';

function Departments() {
  return (
    <>
    <Header></Header>
    <div className='departments'>
      <h1 className='margin_zero'>Our Departments | قسمنا </h1>
      <h3>Explore the specialized capabilities of our Departments | اكتشف القدرات المتخصصة لأقسامنا</h3>
      <br></br>
      <div className='department_grid'>
          <div class="Cnc">
            <img className='logo_grid' src={CNC}></img>
            <h2 className='logo_title'>CNC</h2>
            <p className='logo_desc'>
            High-precision CNC machining solutions for all your manufacturing needs
            </p>
          </div>
          <div class="Conventional">
            <img className='logo_grid' src={Conventional}></img>
            <h2 className='logo_title'>Conventional</h2>
            <p className='logo_desc'>
            Reliable conventional machining for precise and durable components
            </p>
          </div>
          <div class="Electrical">
            <img className='logo_grid' src={Electrical}></img>
            <h2 className='logo_title'>Electrical</h2>
            <p className='logo_desc'>
            Advanced electrical machining for intricate and accurate parts
            </p>
          </div>
          <div class="Mold">
            <img className='logo_grid' src={Mold}></img>
            <h2 className='logo_title'>Mold & Die</h2>
            <p className='logo_desc'>
            Expert Mold & Die solutions for high-quality, custom manufacturing.
            </p>
          </div>
          <div class="Sheet-Metal">
            <img className='logo_grid' src={Sheet}></img>
            <h2 className='logo_title'>Sheet Metal</h2>
            <p className='logo_desc'>
            Precision sheet metal fabrication for versatile and durable products
            </p>
          </div>
          <div class="Welding">
            <img className='logo_grid' src={Welding}></img>
            <h2 className='logo_title'>Welding</h2>
            <p className='logo_desc'>
            Expert welding services for strong and reliable joints
            </p>
          </div>
          <div class="GearBox">
              <img className='logo_grid' src={GearBox}></img>
              <h2 className='logo_title'>GearBox</h2>
              <p className='logo_desc'>
              High-performance gearbox manufacturing for efficient and reliable power transmission
              </p>
          </div>
      </div>
    </div>
    

    
    
    <Footer></Footer>
    </>
  );
}

export default Departments;