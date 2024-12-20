import React from 'react';
import '../Styles/Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleContactClick2 = () => {
    const url = 'https://majlisdev.com';
    window.open(url, '_blank');
  };

  const handleLocationClick = () => {
    const url = 'https://maps.app.goo.gl/UxwJvBMQUqZTuicx6';
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:966509909620';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sales@dimaalouroba.com';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+966509909620";
    const message = "Hello, I would like to get in touch.";
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <footer className="footer">
        <div className="footer_titles">
          <h1 className="footer_h1">
            <span lang="en">DIMA AL UROUBA TURNERY</span>
          </h1>
          <h3 className="footer_h3">Precision Crafting for a Brighter Tomorrow</h3>
          <div className="footer_titles_2">
            <h1 className="footer_h1" lang="ar">مخرطة ديما العروبة</h1>
            <h3 className="footer_h3">صناعة دقيقة لمستقبل أكثر إشراقا</h3>
          </div>
        </div>

        <nav className="Pages" aria-label="Footer Navigation">
          <h3 className="footer_h3">Pages</h3>
          <br />
          <ul>
            <li>
              <h5 className="footer_h5" onClick={() => navigate('/')}>
                Home
              </h5>
            </li>
            <li>
              <h5 className="footer_h5" onClick={() => navigate('/departments')}>
                Departments
              </h5>
            </li>
            <li>
              <h5 className="footer_h5" onClick={() => navigate('/about')}>
                About
              </h5>
            </li>
            <li>
              <h5 className="footer_h5" onClick={() => navigate('/terms')}>
                Terms
              </h5>
            </li>
          </ul>
        </nav>

        <div className="Our_Social">
          <h3 className="footer_h3">Our Social</h3>
          <br />
          <ul>
            <li>
              <h5 className="footer_h5" onClick={handleWhatsAppClick}>
                WhatsApp
              </h5>
            </li>
            <li>
              <h5 className="footer_h5" onClick={handlePhoneClick}>
                Phone Number
              </h5>
            </li>
            <li>
              <h5 className="footer_h5" onClick={handleEmailClick}>
                Email
              </h5>
            </li>
            <li>
              <h5 className="footer_h5" onClick={handleLocationClick}>
                Locate Us
              </h5>
            </li>
          </ul>
        </div>
      </footer>

      <div onClick={handleContactClick2} className="copyrights">
        <p>
          <a
            href="https://majlisdev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Majlisdev © 2024 تم التطوير بواسطة
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
