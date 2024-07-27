import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Mold.css';
import { useNavigate } from 'react-router-dom';

function Mold() {
  const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Mold_hero'>
          <h1 className='margin_bottom_zero'>Mold & Die</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Mold;