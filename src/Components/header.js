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
        <nav aria-label="Main Navigation">
          {/* Logo Section */}
          <div className="logo">
            <img 
              className="logo" 
              onClick={() => navigate('/')} 
              src={icon} 
              alt="DIMA AL UROUBA TURNERY Logo" 
            />
          </div>
          {/* Responsive Menu Toggle */}
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon" aria-label="Toggle Menu">&#9776;</label>
          {/* Navigation Menu */}
          <ul className="menu">
            {/* Menu Items */}
            <li>
              <a href="#" onClick={() => navigate('/departments')}>
                <h3 className="header_h3">Departments</h3>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => navigate('/about')}>
                <h3 className="header_h3">About</h3>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => navigate('/terms')}>
                <h3 className="header_h3">Terms</h3>
              </a>
            </li>
            <li>
              <a href="#" onClick={handleContactClick}>
                <h3 className="header_h3">Locate Us</h3>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
