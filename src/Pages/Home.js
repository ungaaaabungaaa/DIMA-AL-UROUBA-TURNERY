import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/home.css';
import Marquee from "react-fast-marquee";
import Cards from '../Components/cards';
import { objectives } from '../Data/objectivesData';
import { departments } from '../Data/departmentsData';
import DepartmentCards from '../Components/departmentCards';
import SomethingImage from '../Resources/AboutUs4.jpg'
import HeroImage from '../Resources/heroimage.png';

function Home() {



    const handleEmailClick = () => {
      window.location.href = 'mailto:sales@dimaalouroba.com';
    };
  
    const handlePhoneClick = () => {
      window.location.href = 'tel:+966582444166';
    };
  
    const handleWhatsAppClick = () => {
      const phoneNumber = '+9665099096620';
      const message = ''; // You can prefill a message if needed
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

   <div className='hero_contact'>
    
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
    </div>

    <Footer></Footer>
    </>
  );
}

export default Home;