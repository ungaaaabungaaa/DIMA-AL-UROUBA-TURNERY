import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Welding.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/WeildingGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';


function Welding() {
   const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Weilding_hero'>
          <h1 className='margin_bottom_zero'>Weilding</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>

      <div className='welding_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div id='Weilding-grid-context-layout' className='grid-context-layout'>
        <h1>Laser Cutting Department | قسم القطع بالليزر  </h1>
        <p>
          At DIMA AL UROUBA TURNERY, our Laser Welding Department provides cutting-edge technology for precision welding. Utilizing advanced laser systems, we ensure minimal distortion and superior weld quality, making it ideal for intricate or delicate components. Our laser welding solutions are designed to meet the exact specifications of our clients, providing high strength and accuracy in every weld.
          <br />
          <br />
          Our team of skilled laser welders works closely with engineering and design teams to ensure that each component is meticulously welded, contributing to the overall durability and efficiency of our manufactured products. Whether for small-scale projects or large industrial applications, our laser welding department delivers unmatched precision and reliability.
        </p>
        <br />
        <p className='arabic-text'>
          في شركة ديما العروبة للخراطة، يوفر قسم اللحام بالليزر تكنولوجيا متقدمة للحام الدقيق. باستخدام أنظمة الليزر المتطورة، نضمن أقل قدر من التشوه وجودة عالية للحام، مما يجعله مثاليًا للمكونات المعقدة أو الحساسة. تم تصميم حلول اللحام بالليزر لدينا لتلبية المواصفات الدقيقة لعملائنا، مما يوفر قوة ودقة عالية في كل لحام.
          <br />
          <br />
          يعمل فريقنا الماهر في اللحام بالليزر عن كثب مع فرق الهندسة والتصميم لضمان أن يتم لحام كل مكون بدقة، مما يساهم في تعزيز المتانة والكفاءة لمنتجاتنا المصنعة. سواء للمشاريع الصغيرة أو التطبيقات الصناعية الكبيرة، يقدم قسم اللحام بالليزر لدينا دقة وموثوقية لا مثيل لهما.
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