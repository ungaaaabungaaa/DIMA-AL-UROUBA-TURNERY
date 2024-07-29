import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Electrical.css'
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/ElectricalGrid.png';

function Electrical() {
  const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Electrical_hero'>
          <h1 className='margin_bottom_zero'>Electrical</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <div className='electrical_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div className='grid-context-layout'>
        <h1>Electrical Department | قسم الكهرباء</h1>
        <p>
          At DIMA AL UROUBA TURNERY, our electrical department is dedicated to ensuring the highest standards of electrical engineering and installation services. We specialize in designing and implementing electrical systems that are both efficient and reliable. Our team of skilled electricians and engineers work diligently to meet the specific needs of our clients, providing solutions that are tailored to their unique requirements.
          <br />
          <br />
          Our electrical department is equipped with the latest tools and technology to handle a wide range of projects, from small-scale installations to large industrial systems. We are committed to delivering top-notch services that enhance the safety and performance of our clients' operations.
        </p>
        <br />
        <p>
          في شركة ديمة العروبة للخراطة، يكرس قسم الكهرباء لضمان أعلى معايير خدمات الهندسة والتركيب الكهربائي. نتخصص في تصميم وتنفيذ الأنظمة الكهربائية التي تتميز بالكفاءة والاعتمادية. يعمل فريقنا من الكهربائيين والمهندسين المهرة بجد لتلبية احتياجات عملائنا الخاصة، وتقديم حلول مصممة خصيصًا لتلبية متطلباتهم الفريدة.
          <br />
          <br />
          يتوفر لقسم الكهرباء لدينا أحدث الأدوات والتقنيات للتعامل مع مجموعة واسعة من المشاريع، من التركيبات الصغيرة إلى الأنظمة الصناعية الكبيرة. نحن ملتزمون بتقديم خدمات عالية الجودة تعزز من سلامة وأداء عمليات عملائنا.
        </p>
        </div>

      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Electrical;