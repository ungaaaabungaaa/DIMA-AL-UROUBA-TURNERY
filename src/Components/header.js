import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  const navigate = useNavigate();
  return (
    <>
    <div className='header'>
       <div className='header_title'>
          <h2  onClick={() => navigate('/')} className='header_h1'>DIMA AL UROUBA</h2>
       </div>
      
        <div className='header_nav'>
          <h3 className='header_h3' onClick={() => navigate('/shop')}>Shop</h3>
          <h3 className='header_h3' onClick={() => navigate('/departments')}>Departments</h3>
          <h3 className='header_h3' onClick={() => navigate('/about')}>About</h3>
          <h3 className='header_h3' onClick={() => navigate('/terms')}>Terms</h3>
        </div>


        <div className='contact'>
          <button className='contact_button'>Contact</button>
        </div>


    </div>
    </>
  );
}

export default Header;