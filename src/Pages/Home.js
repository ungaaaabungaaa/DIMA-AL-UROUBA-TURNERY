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

function Home() {


  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      const phoneNumber = '+9665099096620'; // Replace with your WhatsApp number
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
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

   <div className='hero_contact'>
    <div className='hero_contact_section'>
      <div onClick={handleEmailClick} class="Email">
        <p>sales@dimaalouroba.com </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
          <path fill="#695346" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
        </svg>
      </div>
      <div onClick={handlePhoneClick} class="Contact">
        <p>+966 582444166</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
          <path fill="#695346" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
        </svg>
      </div>
      <div onClick={handleWhatsAppClick} class="whats-app">
        <p>+966 5099096620</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
          <path fill="#695346" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
        </svg>
      </div>
      <div onClick={handleLocationClick} class="Location">
        <p>Location</p>
      </div>
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
         <h3 className='margin_bottom_zero'>CNC Milling | Turning Tools</h3>
         <p>Precision-engineered CNC milling and turning tools for unparalleled accuracy and efficiency</p>
        </div>
        <div className='salesCard2'>
         <img src={sale1} className='salesimage'></img>
         <h3 className='margin_bottom_zero'>CNC Holder</h3>
         <p>Reliable CNC holders for secure and precise tool mounting.</p>
        </div>
        <div className='salesCard3'>
          <img src={sale3} className='salesimage'></img>
          <h3 className='margin_bottom_zero'>Carbide End Mill</h3>
          <p>High-performance carbide end mills for superior cutting and durability.</p>
        </div>
      </div>
    </div>


    {/* 
    
     1.Add in Homepage
     2.Responsiveness
     3.Add in all the 7 pages Departments
     4.Imporve Department Page
     5.Add in Store Section 
    
    */}

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
          <input className='contact_message' type="text" placeholder="Enter your Message" value={message}  onChange={(e) => setMessage(e.target.value)}/>
          <button className='contact_button'>Send</button>
       </div>
    </div>


    <Footer></Footer>
    </>
  );
}

export default Home;