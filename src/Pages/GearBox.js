import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/GearBox.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/GearboxGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function GearBox() {
  const navigate = useNavigate();
  

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
       
        <div id='gear-grid-context-layout' className='grid-context-layout'>
        <h1>Gearbox Department | قسم علب التروس</h1>
        <p>
          At DIMA AL UROUBA TURNERY, our gearbox department is dedicated to the design, manufacturing, and maintenance of high-performance gearboxes. We utilize advanced engineering techniques and precision machinery to produce gearboxes that deliver exceptional reliability and efficiency. Our team of experienced engineers and technicians ensures that every gearbox meets the specific requirements of our clients.
          <br />
          <br />
          Our gearbox department integrates closely with other departments to ensure a seamless manufacturing process, from initial design to final assembly. This collaboration enables us to provide comprehensive solutions that enhance the performance and longevity of our clients' machinery.
        </p>
        <br />
        <p className='arabic-text' >
          في شركة ديمة العروبة للخراطة، يُكرس قسم علب التروس لتصميم وتصنيع وصيانة علب التروس عالية الأداء. نستخدم تقنيات هندسية متقدمة وآلات دقيقة لإنتاج علب التروس التي توفر موثوقية وكفاءة استثنائية. يضمن فريقنا من المهندسين والفنيين ذوي الخبرة أن كل علبة تروس تلبي المتطلبات المحددة لعملائنا.
          <br />
          <br />
          يتكامل قسم علب التروس لدينا بشكل وثيق مع الأقسام الأخرى لضمان عملية تصنيع سلسة، بدءًا من التصميم الأولي حتى التجميع النهائي. يتيح لنا هذا التعاون تقديم حلول شاملة تعزز من أداء وطول عمر آلات عملائنا.
        </p>
        </div>
      </div>

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default GearBox;