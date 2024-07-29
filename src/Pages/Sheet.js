import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Sheet.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/SheetMetalGrid.png';

function Sheet() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const whatsappNumber = '9665099096620';
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
      <Header></Header>
      <div className='Sheets_hero'>
          <h1 className='margin_bottom_zero'>Sheet Metal</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <div className='sheet_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div className='grid-context-layout'>
          <h1>Sheet Metal Department | قسم تشكيل الصفائح المعدنية</h1>
          <p>
            At DIMA AL UROUBA TURNERY, our sheet metal department excels in fabricating high-quality sheet metal components for a variety of applications. We employ advanced techniques and state-of-the-art equipment to cut, bend, and shape metal sheets with precision and efficiency. Our team of skilled craftsmen is dedicated to producing parts that meet the highest standards of quality and accuracy.
            <br />
            <br />
            Our sheet metal department works closely with other departments to ensure seamless integration and coordination throughout the manufacturing process. This collaboration enables us to deliver comprehensive solutions that fulfill the unique requirements of our clients.
          </p>
          <br />
          <p>
            في شركة ديمة العروبة للخراطة، يتميز قسم تشكيل الصفائح المعدنية لدينا في تصنيع مكونات الصفائح المعدنية عالية الجودة لمجموعة متنوعة من التطبيقات. نستخدم تقنيات متقدمة ومعدات حديثة لقص وثني وتشكيل الصفائح المعدنية بدقة وكفاءة. يكرس فريقنا من الحرفيين المهرة لإنتاج أجزاء تلبي أعلى معايير الجودة والدقة.
            <br />
            <br />
            يعمل قسم تشكيل الصفائح المعدنية لدينا بشكل وثيق مع الأقسام الأخرى لضمان التكامل والتنسيق السلس طوال عملية التصنيع. يمكننا هذا التعاون من تقديم حلول شاملة تلبي المتطلبات الفريدة لعملائنا.
          </p>
        </div>
      </div>

      <div className='Contact_us'>
        <h1>Do You Have Any Questions? <br></br>
        Get Help From Us</h1>
        <div className='contact_us_highlight'>
            <div className='highlight'>
            <svg className='margin_right' xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
              <path fill="#695346" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" />
            </svg>
              <p>Chat live On Whats App</p>
            </div>
            <br></br>
            <div className='highlight'>
              <svg className='margin_right' xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                <path fill="#695346" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" />
              </svg>
              <p>Browse our FAQ</p>
            </div>
        </div>
        <div className='message_box'>
        <input 
            className='contact_message' 
            type="text" 
            placeholder="Enter your Message" 
            value={message}  
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='contact_button' onClick={handleSendMessage}>Send</button>
       </div>
       </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Sheet;