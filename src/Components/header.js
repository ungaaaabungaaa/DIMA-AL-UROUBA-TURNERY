import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../Resources/Logo.webp';
import '../Styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const handleContactClick = () => {
    const url = 'https://maps.app.goo.gl/UxwJvBMQUqZTuicx6';
    window.open(url, '_blank');
  };

  return (
    <>
      <header className="header">
        <nav>
          <div className="logo">
            <img className="logo" onClick={() => navigate('/')} src={icon} alt="Logo" />
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="menu">
            <li><a href="#"><h3 className='header_h3' onClick={() => navigate('/shop')}>Tools</h3></a></li>
            <li><a href="#"><h3 className='header_h3' onClick={() => navigate('/departments')}>Departments</h3></a></li>
            <li><a href="#"><h3 className='header_h3' onClick={() => navigate('/about')}>About</h3></a></li>
            <li><a href="#"><h3 className='header_h3' onClick={() => navigate('/terms')}>Terms</h3></a></li>
            <li><a href="#"><h3 className='header_h3' onClick={handleContactClick}>Locate Us</h3></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
