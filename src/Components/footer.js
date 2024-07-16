import React from 'react';
import '../Styles/Footer.css';
import { useNavigate } from 'react-router-dom';


function Footer() {
  const navigate = useNavigate();
  return (
    <>
    <div className='footer'>
      <div className='footer_titles'>
          <h1 className='footer_h1'>DIMA AL UROUBA</h1>
          <h3 className='footer_h3'>Precision Crafting for a Brighter Tomorrow | صناعة دقيقة لمستقبل أكثر إشراقًا</h3>
      </div>

      <div className='Support'>
          <h3 className='footer_h3'>Support</h3>
          <br></br>
          <h5 className='footer_h5'>FAQ</h5>
          <h5 className='footer_h5'>Contact Us</h5>
          <h5 className='footer_h5'>Help Center</h5>
          <h5 className='footer_h5'>Terms of Service</h5>
      </div>

      <div className='Pages'>
          <h3 className='footer_h3'>Pages</h3>
          <br></br>
          <h5 className='footer_h5' onClick={() => navigate('/')}>Home</h5>
          <h5 className='footer_h5' onClick={() => navigate('/departments')}>Departments</h5>
          <h5 className='footer_h5' onClick={() => navigate('/about')}>About</h5>
          <h5 className='footer_h5' onClick={() => navigate('/terms')}>Terms</h5>
      </div>

      <div className='Our_Social'>
          <h3 className='footer_h3'>Our Social</h3>
          <br></br>
          <h5 className='footer_h5' onClick={() => window.location.href = 'https://www.instagram.com'}>Instagram</h5>
          <h5 className='footer_h5' onClick={() => window.location.href = 'https://www.whatsapp.com'}>WhatsApp</h5>
          <h5 className='footer_h5' onClick={() => window.location.href = 'https://www.facebook.com'}>Facebook</h5>
          <h5 className='footer_h5' onClick={() => window.location.href = 'https://www.twitter.com'}>Twitter(X)</h5>
      </div>

    </div>
    </>
  );
}

export default Footer;