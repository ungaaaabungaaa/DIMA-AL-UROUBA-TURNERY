import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/home.css';
import Marquee from "react-fast-marquee";
import Cards from '../Components/cards';
import { objectives } from '../Data/objectivesData';
import { departments } from '../Data/departmentsData';
import DepartmentCards from '../Components/departmentCards';
import SomethingImage from '../Resources/AboutUs4.jpg'
import sale1 from '../Resources/Sale1.png';
import sale2 from '../Resources/Sale2.png';
import sale3 from '../Resources/Sale3.png';
import { useNavigate } from 'react-router-dom';
import Faq from 'react-faq-component';

function Home() {

  const navigate = useNavigate();
  const [message, setMessage] = useState('');




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
    const handleEmailClick = () => {
      window.location.href = 'mailto:sales@dimaalouroba.com';
    };
  
    const handlePhoneClick = () => {
      window.location.href = 'tel:+966582444166';
    };
  
    const handleWhatsAppClick = () => {
      const phoneNumber = '+9665099096620';
      const message = 'Hello'; // You can prefill a message if needed
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
    const handleLocationClick = () => {
      const ShopLocation = 'https://maps.app.goo.gl/UxwJvBMQUqZTuicx6';
      window.open(ShopLocation, '_blank');
    };


  return (
    <>
    <Header></Header>
   
   <div className='hero'>
    <div className='hero_text'>
      <h1 className='hero_title'>DIMA AL <br></br> UROUBA</h1>
      <h3>Precision Crafting for a Brighter Tomorrow | صناعة  <br></br>دقيقة لمستقبل أكثر إشراقًا</h3>
      <br></br>
      <button className='contact_button'>Contact</button>
    </div>
    <div className='hero_image'>
    </div>
   </div>

  

    <div className="container">
      <div class="Something-Else-Image">
        <img className='something_Image' src={SomethingImage}></img>
      </div>
      <div class="Something-else-Text">
        <h1>Something Else | شيء آخر </h1>
        <p className='something_p'>Reaching the world in the field of industry, turning, and maintenance is not easy, but with patience and diligence we have reached what we aspire to, and for this reason we are trying to preserve the place we have reached, to always maintain our first ranking in our field, and thus we gain the trust of our customers</p>
        <br></br>
        <p className='something_p'>الوصول إلى العالمية في مجال الصناعة والخراطة والصيانة ليس بالأمر السهل، ولكن بالصبر والاجتهاد وصلنا إلى ما نطمح إليه، ولهذا السبب نحاول الحفاظ على المكانة التي وصلنا إليها، لنحافظ دائمًا على مكانتنا الأولى التصنيف في مجالنا، وبالتالي نكتسب ثقة عملائنا</p>
        <div className='highlights'>
          <div className='highlights_text'>
            <h1>8K+</h1>
            <p>Products Shipped</p>
          </div>
          <div className='highlights_text'>
            <h1>6K+</h1>
            <p>Happy Customer</p>
          </div>
          <div className='highlights_text'>
            <h1>2K+</h1>
            <p>Staff Support</p>
          </div>
        </div>
      </div>
    </div>

    <div className='departments_layout'>
      <h2>Departments</h2>
      <h3>Precision-engineered components crafted with expertise and <br></br> efficiency in our advanced  Department’s</h3>
      <br></br>
      <Marquee pauseOnHover pauseOnClick >
            {departments.map((department, index) => (
              <DepartmentCards 
                key={index} 
                name={department.name} 
                desc={department.description} 
                icon={department.icon} 
              />
            ))}
      </Marquee>
     
    </div>

    <div className='objectives'>
    <h2>Objectives</h2>
    <h3>Crafting precision-engineered components with expertise and <br></br> efficiency in our advanced department</h3>
    <br></br>
      <Marquee autoFill>
          <Cards objective={objectives[0]} />
          <Cards objective={objectives[1]} />
          <Cards objective={objectives[2]} />
          <Cards objective={objectives[3]} />
          <Cards objective={objectives[4]} />
          <Cards objective={objectives[5]} />
      </Marquee>
    <br></br>
    <br></br>
    <br></br>
    </div>

    <div className='sales'>
      <h2>Machine Tools <br></br>For Sales</h2>
      <br></br>
      <div className='sales_grid'>
        <div className='salesCard1'>
         <img src={sale2} className='salesimage'></img>
         <br></br>
         <h3 className='margin_bottom_zero'>CNC Milling | Turning Tools</h3>
         <p>Precision-engineered CNC milling and turning tools for unparalleled accuracy and efficiency</p>
        </div>
        <div className='salesCard2'>
         <img src={sale1} className='salesimage'></img>
         <br></br>
         <h3 className='margin_bottom_zero'>CNC Holder</h3>
         <p>Reliable CNC holders for secure and precise tool mounting.</p>
        </div>
        <div className='salesCard3'>
          <img src={sale3} className='salesimage'></img>
          <br></br>
          <h3 className='margin_bottom_zero'>Carbide End Mill</h3>
          <p>High-performance carbide end mills for superior cutting and durability.</p>
        </div>
      </div>
    </div>


    {/* 
    
     1.Change Grid Photos
     3. Responsiveness
    
    */}

    <div className='faq'>
      <div className='faq_context'>
        <Faq data={data}/>
      </div>
    </div>

    <br></br>

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

export default Home;