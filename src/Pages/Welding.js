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
        <h1>Welding Department | قسم اللحام</h1>
        <p>
          At DIMA AL UROUBA TURNERY, our welding department is pivotal in ensuring the structural integrity and strength of our manufactured products. We specialize in various welding techniques, including MIG, TIG, and arc welding, to join metal components with precision and durability. Our team of certified welders is committed to delivering high-quality welds that meet the stringent standards of our clients.
          <br />
          <br />
          Our welding department collaborates closely with other departments to ensure that all welded components fit seamlessly into the overall manufacturing process. This coordination allows us to provide comprehensive solutions that enhance the performance and reliability of our clients' products.
        </p>
        <br />
        <p>
          في شركة ديمة العروبة للخراطة، يُعتبر قسم اللحام جزءًا أساسيًا في ضمان السلامة الهيكلية وقوة المنتجات التي نصنعها. نتخصص في تقنيات اللحام المختلفة، بما في ذلك لحام MIG و TIG ولحام القوس الكهربائي، لربط المكونات المعدنية بدقة ومتانة. يلتزم فريقنا من اللحامين المعتمدين بتقديم لحامات عالية الجودة تلبي المعايير الصارمة لعملائنا.
          <br />
          <br />
          يتعاون قسم اللحام لدينا بشكل وثيق مع الأقسام الأخرى لضمان أن تتكامل جميع المكونات الملحومة بسلاسة في عملية التصنيع الشاملة. يتيح لنا هذا التنسيق تقديم حلول شاملة تعزز من أداء وموثوقية منتجات عملائنا.
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