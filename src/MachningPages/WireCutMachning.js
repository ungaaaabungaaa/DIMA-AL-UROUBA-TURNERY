import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/CNCGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function WireCutMachning() {
    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div id='wire_Machine'>
          <h1 className='margin_bottom_zero'>WireCutting</h1>
      </div>
      <div className='cnc_grid_layout'>
          <div className='grid-image-layout'>
            <img src={GridImage} className='grid-image'></img>
          </div>
          <div id='wirecutting-grid-context-layout' className='grid-context-layout'>
            <h1>Wire Cutting | قسم القطع بالسلك</h1>
            <p>At DIMA AL UROUBA TURNERY, our Wire Cutting department is equipped with high-precision wire-cutting machines that allow us to deliver intricate and accurate cuts on a variety of materials. Utilizing advanced Electrical Discharge Machining (EDM) technology, we specialize in producing complex shapes and fine details with minimal material waste. This precision cutting process is ideal for producing components that require tight tolerances and exceptional surface finishes.
            <br></br>
            <br></br>
            Our wire cutting capabilities enable us to meet the demanding needs of various industries, delivering components that are both reliable and cost-effective. Our skilled technicians ensure that each job is performed with meticulous attention to detail, resulting in products that meet the highest quality standards.
            </p>
            <br></br>
            <p className='arabic-text'>
            في شركة ديمة العروبة للخراطة، يضم قسم القطع بالسلك ماكينات قطع عالية الدقة تمكننا من تنفيذ قصات معقدة ودقيقة على مجموعة متنوعة من المواد. باستخدام تقنية القطع بالتفريغ الكهربائي (EDM) المتقدمة، نتخصص في إنتاج أشكال معقدة وتفاصيل دقيقة مع الحد الأدنى من الهدر في المواد. هذه العملية الدقيقة مثالية لإنتاج مكونات تتطلب أبعادًا ضيقة وتشطيبات سطحية ممتازة.
            <br></br>
            <br></br>
            تمكننا قدراتنا في القطع بالسلك من تلبية الاحتياجات الصارمة لمختلف الصناعات، مع تقديم مكونات موثوقة وفعالة من حيث التكلفة. يضمن فنينا المهرة أن يتم تنفيذ كل عملية بعناية فائقة، مما ينتج عنه منتجات تلبي أعلى معايير الجودة.
            </p>
          </div>

      </div>
      

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default WireCutMachning;