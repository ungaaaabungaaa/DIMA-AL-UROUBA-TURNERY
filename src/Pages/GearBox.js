import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/GearBox.css';

function GearBox() {
    return (
      <>
      <Header></Header>
      <div className='GearBox_hero'>
          <h1 className='margin_bottom_zero'>GearBox</h1>
          <h3 className='margin_bottom_zero'>Departments</h3>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default GearBox;