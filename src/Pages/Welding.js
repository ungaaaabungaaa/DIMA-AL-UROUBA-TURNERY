import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Welding.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/lasergrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';


function Welding() {
   const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Weilding_hero'>
          <h1 className='margin_bottom_zero'>Laser Cutting Department</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>

      <div className='welding_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div id='Weilding-grid-context-layout' className='grid-context-layout'>
        <h1>Laser Cutting  Department | قسم القطع بالليزر   </h1>
        <p>
          At DIMA AL UROUBA TURNERY, our Laser Cutting Department utilizes state-of-the-art laser technology to achieve high precision in every cut. Our advanced laser systems ensure minimal distortion and exceptional accuracy, making them ideal for detailed and complex components. Our laser cutting solutions are designed to meet the unique specifications of our clients, delivering outstanding quality and consistency for every project.
          <br />
          <br />
          Our skilled laser technicians work closely with engineering and design teams to meticulously process each component, contributing to the overall strength and reliability of our products. From small prototypes to large-scale industrial applications, our laser cutting department provides unmatched precision and performance.
        </p>
        <br />
        <p className='arabic-text'>
          في شركة ديما العروبة للخراطة، يستخدم قسم القطع بالليزر تكنولوجيا الليزر المتقدمة لتحقيق الدقة العالية في كل عملية قطع. تضمن أنظمة الليزر المتطورة لدينا تشوهًا قليلًا ودقة استثنائية، مما يجعلها مثالية للمكونات المعقدة والدقيقة. تم تصميم حلول القطع بالليزر لدينا لتلبية المواصفات الفريدة لعملائنا، مما يوفر جودة وتناسقًا ممتازين في كل مشروع.
          <br />
          <br />
          يعمل فنيونا المهرة في القطع بالليزر عن كثب مع فرق الهندسة والتصميم لمعالجة كل مكون بدقة، مما يساهم في تعزيز القوة والموثوقية لمنتجاتنا. بدءًا من النماذج الأولية الصغيرة إلى التطبيقات الصناعية الكبيرة، يقدم قسم القطع بالليزر لدينا دقة وأداءً لا مثيل لهما.
        </p>


        </div>
      </div>


      <FAQ></FAQ>


     <CONTACT></CONTACT>


      <Footer></Footer>
      </>
    );
  }
  
  export default Welding;