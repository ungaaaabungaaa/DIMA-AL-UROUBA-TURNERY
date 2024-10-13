import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/machining/machining_grid/laser-grid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function LaserMachning() {
    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div id='laser_Machine'>
          <h1 className='margin_bottom_zero'>Laser Cutting</h1>
      </div>
      <div className='cnc_grid_layout'>
          <div className='grid-image-layout'>
            <img id='grid-machining-image' src={GridImage} className='grid-image'></img>
          </div>
          <div id='laser-cutting-grid-context-layout' className='grid-context-layout'>
              <h1>Laser Cutting | قسم القطع بالليزر</h1>
              <p>At DIMA AL UROUBA TURNERY, our Laser Cutting department is equipped with the latest laser technology, enabling us to perform precise and efficient cutting operations on a variety of materials. Whether working with metals, plastics, or other materials, our advanced laser machines ensure clean, accurate cuts that meet the most stringent specifications. 
              <br></br>
              <br></br>
              The precision of our laser cutting process allows us to create intricate shapes and patterns with minimal material waste, delivering high-quality products that are both functional and aesthetically pleasing. Our skilled operators ensure that every cut is performed to perfection, consistently exceeding our clients' expectations.
              </p>
              <br></br>
              <p className='arabic-text'> 
              في شركة ديما العروبة للخراطة، يضم قسم القطع بالليزر أحدث تقنيات الليزر التي تتيح لنا تنفيذ عمليات قطع دقيقة وفعالة على مجموعة متنوعة من المواد. سواء كان العمل مع المعادن أو البلاستيك أو غيرها من المواد، تضمن ماكينات الليزر المتقدمة لدينا تحقيق قصات نظيفة ودقيقة تلبي أدق المواصفات.
              <br></br>
              <br></br>
              تتيح لنا دقة عملية القطع بالليزر إنشاء أشكال وأنماط معقدة مع الحد الأدنى من الهدر في المواد، مما يضمن تسليم منتجات عالية الجودة تكون عملية وجميلة في آن واحد. يضمن مشغلونا المهرة أن يتم تنفيذ كل عملية قطع بدقة متناهية، متجاوزين باستمرار توقعات عملائنا.
              </p>
          </div>

          
      </div>
      

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default LaserMachning;