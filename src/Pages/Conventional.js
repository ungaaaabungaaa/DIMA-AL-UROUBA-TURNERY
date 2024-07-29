import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Conventional.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/ConventionalMachineryGrid .png';

function Conventional() {
  const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='conventional_hero'>
          <h1 className='margin_bottom_zero'>Conventional</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>



      <div className='conventional_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div className='grid-context-layout'>
          <h1>Conventional Machinery | آلات تقليدية</h1>
          <p>
            At DIMA AL UROUBA TURNERY, our conventional machinery department plays a crucial role in our manufacturing process. With a variety of traditional machining equipment, we are able to handle a wide range of manufacturing tasks with precision and efficiency. Our experienced machinists are adept at operating these machines to produce high-quality parts that meet our clients' specifications.
            <br />
            <br />
            The combination of conventional machinery with our advanced CNC and lathe machines allows us to offer a comprehensive suite of manufacturing services. This integration ensures that we can tackle complex projects while maintaining the flexibility to accommodate various production needs.
          </p>
          <br />
          <p>
            في شركة ديمة العروبة للخراطة، يلعب قسم الآلات التقليدية دورًا حيويًا في عملية التصنيع لدينا. مع مجموعة متنوعة من معدات التشغيل التقليدية، نحن قادرون على التعامل مع مجموعة واسعة من مهام التصنيع بدقة وكفاءة. يتقن فنيو التشغيل لدينا تشغيل هذه الآلات لإنتاج قطع عالية الجودة تلبي مواصفات عملائنا.
            <br />
            <br />
            إن دمج الآلات التقليدية مع ماكينات التحكم الرقمي CNC وماكينات الخراطة المتقدمة لدينا يتيح لنا تقديم مجموعة شاملة من خدمات التصنيع. يضمن هذا التكامل قدرتنا على التعامل مع المشاريع المعقدة مع الحفاظ على المرونة لتلبية احتياجات الإنتاج المختلفة.
          </p>
        </div>

      </div>

      <Footer></Footer>
      </>
    );
  }
  
  export default Conventional;