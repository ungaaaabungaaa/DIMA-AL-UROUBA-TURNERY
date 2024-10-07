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
      <div className='cnc_hero'>
          <h1 className='margin_bottom_zero'>Motors</h1>
      </div>
      <div className='cnc_grid_layout'>
          <div className='grid-image-layout'>
            <img src={GridImage} className='grid-image'></img>
          </div>
          <div id='motors-grid-context-layout' className='grid-context-layout'>
              <h1>Motors | قسم المحركات</h1>
              <p>At DIMA AL UROUBA TURNERY, our Motors department is equipped with specialized tools and machinery designed for the repair, maintenance, and customization of electric motors. Whether it's motor rewinding, troubleshooting, or complete overhauls, our expert technicians ensure that every motor is serviced to meet the highest standards of performance and reliability. We handle motors of various sizes and applications, providing solutions that enhance durability and efficiency.
              <br></br>
              <br></br>
              Our comprehensive motor services are tailored to meet the unique requirements of our clients, from industrial to commercial applications. We take pride in delivering results that help keep machinery running smoothly, minimizing downtime and maximizing productivity.
              </p>
              <br></br>
              <p className='arabic-text'>
              في شركة ديمة العروبة للخراطة، يختص قسم المحركات لدينا بتقديم خدمات إصلاح وصيانة وتخصيص المحركات الكهربائية باستخدام معدات وآلات متخصصة. سواء كانت إعادة لف المحركات، أو اكتشاف الأعطال، أو إعادة التأهيل الكاملة، يضمن فنينا الخبراء أن يتم تقديم كل خدمة بما يحقق أعلى معايير الأداء والموثوقية. نتعامل مع محركات بمختلف الأحجام والاستخدامات، مما يوفر حلولًا تعزز المتانة والكفاءة.
              <br></br>
              <br></br>
              خدماتنا الشاملة للمحركات مصممة لتلبية المتطلبات الفريدة لعملائنا، سواء في التطبيقات الصناعية أو التجارية. نحن نفخر بتقديم نتائج تساعد في الحفاظ على الآلات تعمل بسلاسة، وتقليل وقت التوقف إلى الحد الأدنى وزيادة الإنتاجية إلى أقصى حد.
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