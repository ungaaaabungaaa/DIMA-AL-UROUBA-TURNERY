import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Mold.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/MoldGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function Mold() {
  const navigate = useNavigate();
  
    return (
      <>
      <Header></Header>
      <div className='Mold_hero'>
          <h1 className='margin_bottom_zero'>Mold & Presses</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <div className='mold_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>

       
        <div id='mold-grid-context-layout' className='grid-context-layout'>
        <h1>Mold & Presses Department | قسم القوالب والمكابس</h1>
        <p>
          At DIMA AL UROUBA TURNERY, our mold and presses department is essential to our manufacturing process, providing high-quality molds and presses for various industries. We specialize in designing, manufacturing, and maintaining precision molds and dies that are critical for producing consistent, high-quality parts. Our team of skilled engineers and technicians use advanced CAD/CAM software and state-of-the-art machinery to ensure that every mold and press meets the exact specifications of our clients.
          <br />
          <br />
          Our mold & presses department works closely with other departments to integrate seamlessly into the overall production process. This collaboration ensures that our clients receive comprehensive manufacturing solutions that meet their specific needs and requirements.
        </p>
        <br />
        <p className='arabic-text'>
          في شركة ديما العروبة للخراطة، يُعتبر قسم القوالب والمكابس جزءًا أساسيًا من عملية التصنيع لدينا، حيث يوفر قوالب و مكابس عالية الجودة لمختلف الصناعات البلاستيكية و الحديدية و غيرهم من الصناعات المختلفة. نتخصص في تصميم وتصنيع وصيانة القوالب والمكابس الدقيقة التي تعتبر حيوية لإنتاج قطع متسقة وعالية الجودة. يستخدم فريقنا من المهندسين والفنيين المهرة برمجيات CAD/CAM المتقدمة وآلات حديثة لضمان أن كل قالب و مكبس يلبى المواصفات الدقيقة لعملائنا.
          <br />
          <br />
          يعمل قسم القوالب والمكابس لدينا بشكل وثيق مع الأقسام الأخرى للاندماج بسلاسة في عملية الإنتاج الشاملة. يضمن هذا التعاون أن يحصل عملاؤنا على حلول تصنيعية شاملة تلبي احتياجاتهم و متطلباتهم الخاصة.
        </p>
        </div>
      </div>

      <FAQ></FAQ>

      <CONTACT></CONTACT>

      <Footer></Footer>
      </>
    );
  }
  
  export default Mold;