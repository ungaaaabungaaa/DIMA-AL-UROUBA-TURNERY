import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../Resources/Logo.webp'
import '../Styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const handleContactClick = () => {
    const url = 'https://maps.app.goo.gl/UxwJvBMQUqZTuicx6';
    window.open(url, '_blank');
  };
  return (
    <>
    <div className='header'>
       <div className='header_title'>
         <img className='logo' onClick={() => navigate('/')} src={icon}></img>
       </div>
      
        <div className='header_nav'>
          <h3 className='header_h3' onClick={() => navigate('/shop')}>Shop</h3>
          <h3 className='header_h3' onClick={() => navigate('/departments')}>Departments</h3>
          <h3 className='header_h3' onClick={() => navigate('/about')}>About</h3>
          <h3 className='header_h3' onClick={() => navigate('/terms')}>Terms</h3>
        </div>


        <div className='contact'>
          <button onClick={handleContactClick} className='contact_button'>Locate Us</button>
        </div>


    </div>
    </>
  );
}

export default Header;