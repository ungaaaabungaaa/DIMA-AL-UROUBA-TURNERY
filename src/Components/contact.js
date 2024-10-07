import React, { useState } from 'react';
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
      // Clear the input field after sending
      setMessage('');
    }
  };

    return (
      <>
      <div className='Contact_us'>
      <h1 className='h1_Contact'>Do You Have Any Questions? <br></br>
        Get Help From Us</h1>
        <h1 className='h1_Contact'>هل لديك أي أسئلة؟ <br></br>
        احصل على المساعدة مننا</h1>


        <div className='message_box'>
        <input 
            className='contact_message' 
            type="text" 
            placeholder="Enter Your WhatsApp Message | أدخل رسالة الواتساب الخاصة بك" 
            value={message}  
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='contact_button' onClick={handleSendMessage}>Send</button>
       </div>
      </div>
      </>
    );
  }
  
  export default CONTACT;