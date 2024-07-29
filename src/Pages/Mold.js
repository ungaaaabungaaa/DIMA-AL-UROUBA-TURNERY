import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Mold.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/MoldGrid.png';

function Mold() {
  const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div className='Mold_hero'>
          <h1 className='margin_bottom_zero'>Mold & Die</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>
      <div className='mold_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div className='grid-context-layout'>
        <h1>Mold and Die Department | قسم القوالب والموتات</h1>
        <p>
          At DIMA AL UROUBA TURNERY, our mold and die department is essential to our manufacturing process, providing high-quality molds and dies for various industries. We specialize in designing, manufacturing, and maintaining precision molds and dies that are critical for producing consistent, high-quality parts. Our team of skilled engineers and technicians use advanced CAD/CAM software and state-of-the-art machinery to ensure that every mold and die meets the exact specifications of our clients.
          <br />
          <br />
          Our mold and die department works closely with other departments to integrate seamlessly into the overall production process. This collaboration ensures that our clients receive comprehensive manufacturing solutions that meet their specific needs and requirements.
        </p>
        <br />
        <p>
          في شركة ديمة العروبة للخراطة، يُعتبر قسم القوالب والموتات جزءًا أساسيًا من عملية التصنيع لدينا، حيث يوفر قوالب وموتات عالية الجودة لمختلف الصناعات. نتخصص في تصميم وتصنيع وصيانة القوالب والموتات الدقيقة التي تعتبر حيوية لإنتاج قطع متسقة وعالية الجودة. يستخدم فريقنا من المهندسين والفنيين المهرة برمجيات CAD/CAM المتقدمة وآلات حديثة لضمان أن كل قالب وموت يلبى المواصفات الدقيقة لعملائنا.
          <br />
          <br />
          يعمل قسم القوالب والموتات لدينا بشكل وثيق مع الأقسام الأخرى للاندماج بسلاسة في عملية الإنتاج الشاملة. يضمن هذا التعاون أن يحصل عملاؤنا على حلول تصنيعية شاملة تلبي احتياجاتهم ومتطلباتهم الخاصة.
        </p>
        </div>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Mold;