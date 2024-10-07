import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/CNCGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function GenralMachning() {
    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='cnc_hero'>
          <h1 className='margin_bottom_zero'>Genral Machning</h1>
      </div>
      <div className='cnc_grid_layout'>
          <div className='grid-image-layout'>
            <img src={GridImage} className='grid-image'></img>
          </div>
          <div id='general-machining-grid-context-layout' className='grid-context-layout'>
                <h1>General Machining | قسم التشغيل العام</h1>
                <p>At DIMA AL UROUBA TURNERY, our General Machining department is dedicated to delivering a wide array of machining services with precision and efficiency. With a variety of conventional and advanced machines, we can handle all kinds of general machining tasks, from drilling and milling to cutting and shaping. Our team of skilled machinists ensures that every component is crafted to meet exact specifications and deliver optimal performance.
                <br></br>
                <br></br>
                Our general machining capabilities allow us to handle both small-scale and large-scale projects, catering to the diverse needs of our clients. Whether it's a custom part or a high-volume production run, we are committed to maintaining high standards of quality and precision.
                </p>
                <br></br>
                <p>
                في شركة ديمة العروبة للخراطة، يختص قسم التشغيل العام بتقديم مجموعة واسعة من خدمات التشغيل الدقيقة والفعالة. بفضل مجموعة متنوعة من الماكينات التقليدية والمتقدمة، يمكننا التعامل مع جميع أنواع مهام التشغيل العام، بدءًا من الحفر والقطع إلى التشكيل والتدوير. يضمن فريقنا من الفنيين المهرة أن يتم تصنيع كل مكون بدقة عالية ليتوافق مع المواصفات المطلوبة ويؤدي بكفاءة.
                <br></br>
                <br></br>
                تمكننا قدراتنا في التشغيل العام من التعامل مع مشاريع صغيرة وكبيرة على حد سواء، لتلبية احتياجات عملائنا المتنوعة. سواء كانت قطعة مخصصة أو عملية إنتاج كبيرة الحجم، نلتزم بالحفاظ على أعلى معايير الجودة والدقة.
                </p>
            </div>
      </div>
      

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default GenralMachning;