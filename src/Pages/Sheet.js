import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Sheet.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/SheetMetalGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function Sheet() {
  const navigate = useNavigate();

 

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

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default Sheet;