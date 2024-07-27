import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Sheet.css';
import { useNavigate } from 'react-router-dom';

function Sheet() {
  const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Sheets_hero'>
          <h1 className='margin_bottom_zero'>Sheet Metal</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Sheet;