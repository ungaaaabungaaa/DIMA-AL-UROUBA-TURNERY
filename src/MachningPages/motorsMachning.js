import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/CNCGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function MotorMachning() {
    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div id="motors_Machine">
          <h1 className='margin_bottom_zero'>Water Pumps & Motors</h1>
      </div>
      <div className='cnc_grid_layout'>
          <div className='grid-image-layout'>
            <img src={GridImage} className='grid-image'></img>
          </div>
          <div id='motors-grid-context-layout' className='grid-context-layout'>
          <h1>Water Pumps & Motors | قسم المضخات والمحركات</h1>
          <p>At DIMA AL UROUBA TURNERY, our Water Pumps and Motors department is dedicated to providing top-notch repair, maintenance, and customization services. From centrifugal and submersible pumps to industrial motors, we offer solutions that ensure your equipment operates with maximum efficiency and reliability. Our skilled technicians handle everything from pump overhauls to motor rewinding, using cutting-edge tools and advanced techniques to deliver superior performance.
          <br></br>
          <br></br>
          We understand that downtime can be costly, which is why we focus on quick turnaround times while maintaining the highest standards of service. Our expertise spans across various industries, ensuring that we can meet the specific needs of both commercial and industrial applications. Whether you're dealing with water flow issues or motor inefficiencies, our team is here to provide effective solutions that minimize disruptions and extend the lifespan of your equipment.
          </p>
          <br></br>
          <p className='arabic-text'>
          في شركة ديمة العروبة للخراطة، يركز قسم المضخات والمحركات لدينا على تقديم خدمات عالية الجودة في إصلاح وصيانة وتخصيص المعدات. من المضخات الطرد المركزي إلى المحركات الصناعية، نقدم حلولًا تضمن تشغيل معداتك بأقصى قدر من الكفاءة والموثوقية. يتعامل فنينا المهرة مع كل شيء من إعادة تأهيل المضخات إلى إعادة لف المحركات، باستخدام أدوات متقدمة وتقنيات حديثة لضمان أداء متميز.
          <br></br>
          <br></br>
          ندرك أن توقف المعدات عن العمل يمكن أن يكون مكلفًا، لذلك نركز على سرعة التنفيذ مع الحفاظ على أعلى معايير الجودة. تمتد خبرتنا عبر مختلف الصناعات، مما يضمن قدرتنا على تلبية الاحتياجات المحددة للتطبيقات الصناعية والتجارية. سواء كنت تواجه مشكلات في تدفق المياه أو كفاءة المحركات، فإن فريقنا موجود لتقديم حلول فعالة تقلل من الانقطاعات وتطيل عمر معداتك.
          </p>
          </div>

      </div>
      

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default MotorMachning;