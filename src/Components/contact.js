import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../Styles/Contact.css';

function CONTACT() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const whatsappNumber = '+966509909620';
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      setMessage('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get Help From Our Team</title>
        <meta name="description" content="Have questions? Contact our team via WhatsApp for instant assistance. Send us your queries in English or Arabic." />
        <meta name="keywords" content="Contact, WhatsApp Support, Customer Service, Help, Arabic, English" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | Get Help From Our Team" />
        <meta property="og:description" content="Reach out to our team via WhatsApp. We are here to assist you in English and Arabic." />
        <meta property="og:url" content="https://www.dimaalouroba.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className='Contact_us'>
        <h1 className='h1_Contact'>
          Do You Have Any Questions? <br />
          Get Help From Our Team
        </h1>
        <h1 className='h1_Contact'>
          هل لديك أي أسئلة؟ <br />
          احصل على المساعدة من فريقنا
        </h1>

        <div className='message_box'>
          <input
            className='contact_message'
            type="text"
            placeholder="Enter Your WhatsApp Message | أدخل رسالة الواتساب الخاصة بك"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Enter your WhatsApp message"
          />
          <button
            className='contact_button'
            onClick={handleSendMessage}
            aria-label="Send your WhatsApp message"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default CONTACT;
