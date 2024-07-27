import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Electrical.css'
import { useNavigate } from 'react-router-dom';

function Electrical() {
  const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Electrical_hero'>
          <h1 className='margin_bottom_zero'>Electrical</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Electrical;