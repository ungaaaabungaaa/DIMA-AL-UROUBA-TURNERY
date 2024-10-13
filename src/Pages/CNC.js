import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/CNCGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function CNC() {
    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='cnc_hero'>
          <h1 className='margin_bottom_zero'>CNC</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <div className='cnc_grid_layout'>
          <div className='grid-image-layout'>
            <img src={GridImage} className='grid-image'></img>
          </div>
          <div id='cnc-grid-context-layout' className='grid-context-layout'>
            <h1>CNC | قسم التحكم الرقمي</h1>
            <p>At DIMA AL UROUBA TURNERY, our CNC (Computer Numerical Control) department is at the heart of our precision manufacturing capabilities. Equipped with state-of-the-art CNC machines, we specialize in producing high-precision components that meet the exact specifications of our clients. Our skilled technicians utilize advanced software and machinery to ensure that every product meets the highest standards of quality and accuracy.
            <br></br>
            <br></br>
            Our CNC department is complemented by our range of lathe machines, which allow us to perform various turning operations with exceptional precision. This combination of CNC and lathe machines enables us to handle complex manufacturing tasks and deliver products that exceed our clients' expectations.
            </p>
            <br></br>
            <p className='arabic-text'>
            في شركة ديما العروبة للخراطة، يُعتبر قسم التحكم الرقمي CNC قلب قدراتنا التصنيعية الدقيقة. مجهز بأحدث ماكينات التحكم الرقمي، نتخصص في إنتاج المكونات عالية الدقة التي تلبي المواصفات الدقيقة لعملائنا. يستخدم فنينا المهرة البرمجيات المتقدمة والآلات لضمان أن كل منتج يلبي أعلى معايير الجودة والدقة.
            <br></br>
            <br></br>
  يُكمل قسم التحكم الرقمي CNC لدينا مجموعة ماكينات الخراطة لدينا، مما يتيح لنا تنفيذ عمليات الدوران المختلفة بدقة استثنائية. هذا الجمع بين ماكينات التحكم الرقمي CNC وماكينات الخراطة يمكننا من التعامل مع المهام التصنيعية المعقدة وتقديم منتجات تتجاوز توقعات عملائنا.
            </p>
          </div>
      </div>
      

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default CNC;