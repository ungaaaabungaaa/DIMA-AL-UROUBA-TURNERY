import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';

function CNC() {
    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='cnc_hero'>
          <h1 className='margin_bottom_zero'>CNC</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default CNC;