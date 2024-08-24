import React from 'react';
import '../Styles/Footer.css';
import { useNavigate } from 'react-router-dom';
import WhatsApp from 'react-whatsapp';


function Footer() {
  const navigate = useNavigate();


  const handleLocationClick = () =>{
    const url = 'https://maps.app.goo.gl/UxwJvBMQUqZTuicx6';
    window.open(url, '_blank');
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+0582444166';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sales@dimaalouroba.com';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+0509909620";
    const message = "Hello, I would like to get in touch.";
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  return (
    <>
    <div className='footer'>
      <div className='footer_titles'>
          <h1 className='footer_h1'>DIMA AL UROUBA</h1>
          <h3 className='footer_h3'>Precision Crafting for a Brighter Tomorrow | صناعة دقيقة لمستقبل أكثر إشراقًا</h3>
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
          <h5 className='footer_h5' onClick={handleWhatsAppClick}>WhatsApp</h5>
          <h5 className='footer_h5' onClick={handlePhoneClick}>Phone Number</h5>
          <h5 className='footer_h5' onClick={handleEmailClick}>Email</h5>
          <h5 className='footer_h5' onClick={handleLocationClick}>Locate Us</h5>
      </div>

    </div>
    </>
  );
}

export default Footer;