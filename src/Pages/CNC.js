import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/CNCGrid.webp';

function CNC() {

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



    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='cnc_hero'>
          <h1 className='margin_bottom_zero'>CNC</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <div className='cnc_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div className='grid-context-layout'>
          <h1>CNC | قسم التحكم الرقمي</h1>
          <p>At DIMA AL UROUBA TURNERY, our CNC (Computer Numerical Control) department is at the heart of our precision manufacturing capabilities. Equipped with state-of-the-art CNC machines, we specialize in producing high-precision components that meet the exact specifications of our clients. Our skilled technicians utilize advanced software and machinery to ensure that every product meets the highest standards of quality and accuracy.
          <br></br>
          <br></br>
          Our CNC department is complemented by our range of lathe machines, which allow us to perform various turning operations with exceptional precision. This combination of CNC and lathe machines enables us to handle complex manufacturing tasks and deliver products that exceed our clients' expectations.
          </p>
          <br></br>
          <p>
          في شركة ديمة العروبة للخراطة، يُعتبر قسم التحكم الرقمي CNC قلب قدراتنا التصنيعية الدقيقة. مجهز بأحدث ماكينات التحكم الرقمي، نتخصص في إنتاج المكونات عالية الدقة التي تلبي المواصفات الدقيقة لعملائنا. يستخدم فنينا المهرة البرمجيات المتقدمة والآلات لضمان أن كل منتج يلبي أعلى معايير الجودة والدقة.
          <br></br>
          <br></br>
يُكمل قسم التحكم الرقمي CNC لدينا مجموعة ماكينات الخراطة لدينا، مما يتيح لنا تنفيذ عمليات الدوران المختلفة بدقة استثنائية. هذا الجمع بين ماكينات التحكم الرقمي CNC وماكينات الخراطة يمكننا من التعامل مع المهام التصنيعية المعقدة وتقديم منتجات تتجاوز توقعات عملائنا.
          </p>
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

      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default CNC;