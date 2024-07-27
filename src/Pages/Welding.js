import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Welding.css';
import { useNavigate } from 'react-router-dom';


function Welding() {
   const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Weilding_hero'>
          <h1 className='margin_bottom_zero'>Weilding</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Welding;