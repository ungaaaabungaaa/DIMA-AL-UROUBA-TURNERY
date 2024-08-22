import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/GearBox.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/GearboxGrid.webp';
import Faq from 'react-faq-component';

function GearBox() {
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
  const data = {
    title: "FAQ",
    rows: 
    [
      {
        title: "What products do you manufacture?",
        content: "We manufacture a wide range of metal parts and components. Our seven departments specialize in various aspects of manufacturing, including CNC machining and lathe work. Additionally, we sell a selection of high-quality tools."
      },
      {
        title: "How can I place an order ?",
        content: "You can place an order by contacting our sales team via email or phone"
      },
      {
        title: "Do you offer custom manufacturing services?",
        content: "Yes, we offer custom manufacturing services to meet your specific needs. Please reach out to us with your requirements, and our team will work with you to develop a tailored solution"
      },
      {
        title: "How can I get in touch with customer support?",
        content: "You can contact our customer support team through the contact form on our website, by email, or by calling our support hotline. We are here to assist you with any questions or concerns you may have."
      },
      {
        title: "What is your lead time for manufacturing and delivery?",
        content: "Our lead time for manufacturing varies depending on the complexity of your order and our current production schedule. Typically, it ranges from 1 to 4 weeks. Once your order is processed, we will provide an estimated delivery date"
      }
    
    ]
  }

    return (
      <>
      <Header></Header>
      <div className='GearBox_hero'>
          <h1 className='margin_bottom_zero'>GearBox</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <div className='gear_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div className='grid-context-layout'>
        <h1>Gearbox Department | قسم علب التروس</h1>
        <p>
          At DIMA AL UROUBA TURNERY, our gearbox department is dedicated to the design, manufacturing, and maintenance of high-performance gearboxes. We utilize advanced engineering techniques and precision machinery to produce gearboxes that deliver exceptional reliability and efficiency. Our team of experienced engineers and technicians ensures that every gearbox meets the specific requirements of our clients.
          <br />
          <br />
          Our gearbox department integrates closely with other departments to ensure a seamless manufacturing process, from initial design to final assembly. This collaboration enables us to provide comprehensive solutions that enhance the performance and longevity of our clients' machinery.
        </p>
        <br />
        <p>
          في شركة ديمة العروبة للخراطة، يُكرس قسم علب التروس لتصميم وتصنيع وصيانة علب التروس عالية الأداء. نستخدم تقنيات هندسية متقدمة وآلات دقيقة لإنتاج علب التروس التي توفر موثوقية وكفاءة استثنائية. يضمن فريقنا من المهندسين والفنيين ذوي الخبرة أن كل علبة تروس تلبي المتطلبات المحددة لعملائنا.
          <br />
          <br />
          يتكامل قسم علب التروس لدينا بشكل وثيق مع الأقسام الأخرى لضمان عملية تصنيع سلسة، بدءًا من التصميم الأولي حتى التجميع النهائي. يتيح لنا هذا التعاون تقديم حلول شاملة تعزز من أداء وطول عمر آلات عملائنا.
        </p>
        </div>
      </div>

      <div className='faq'>
        <div className='faq_context'>
          <Faq data={data}/>
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
  
  export default GearBox;