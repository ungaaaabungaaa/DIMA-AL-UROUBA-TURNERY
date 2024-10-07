import React from 'react';

import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/shop.css';
import FAQ from '../Components/faq';
import Marquee from 'react-fast-marquee';
import product1 from '../Resources/Icons/cnc.svg';
import product2 from '../Resources/Icons/drill.svg';
import product3 from '../Resources/Icons/laser.svg';
import product4 from '../Resources/Icons/mill.svg';
import product5 from '../Resources/Icons/waves.svg';
import product6 from '../Resources/Icons/patjhsvg.svg';
import product7 from '../Resources/Icons/trim.svg';
import product8 from '../Resources/Icons/cutting.svg';
import { useNavigate } from 'react-router-dom';
import CONTACT from '../Components/contact';


function Shop() {
  
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <br></br>
      <Marquee className='sale_marquee_layout' autoFill>
        <h3 className='sale_marquee'>Tools | الأدوات </h3>
      </Marquee>
      <br></br>
      <br></br>
      
      <div  className='container_shop'>
        <div onClick={() => navigate('/concavemilingcenter')}  className='Product1'>
          <img className='logo_grid_2' src={product1} alt="Concave Milling Center" />
          <h3 className='product_title'>Concave Milling Center <br></br> مركز الطحن المقعّر </h3>
          <p className='product_des'>Concave Milling Center, designed for high-quality metalworking and accurate concave surface machining. <br></br>  <br></br> مركز الطحن المقعر، مصمم للعمل المعدني عالي الجودة والتشغيل الدقيق للأسطح المقعرة </p>
        </div>
        <div onClick={() => navigate('/flycutter')}  className='Product2'>
          <img className='logo_grid_2' src={product2} alt="Fly Cutter" />
          <h3 className='product_title'>Fly Cutter   <br></br> قاطع طيّار </h3>
          <p className='product_des'>High-quality finishes with our Fly Cutter, perfect for facing large flat surfaces in metalworking.<br></br> <br></br> تشطيبات عالية الجودة مع أداة القطع الذبابية الخاصة بنا، مثالية لمواجهة الأسطح المستوية الكبيرة في أعمال المعادن </p>
        </div>
        <div onClick={() => navigate('/ballnoseendmill')} className='Product3'>
          <img  className='logo_grid_2' src={product3} alt="Ball Nose End Mill" />
          <h3 className='product_title'>Ball Nose End Mill  <br></br> مطحنة ذات نهاية كروية </h3>
          <p className='product_des'>Perfect for 3D contouring and smooth finishes, our Ball Nose End Mill delivers precision in complex metalworking tasks. <br></br> <br></br> مثالية للتشكيل ثلاثي الأبعاد واللمسات النهائية الناعمة، توفر مطحنة نهاية الأنف الكروية الدقة في مهام تشغيل المعادن المعقدة </p>
        </div>
        <div onClick={() => navigate('/facemillingcutter')}  className='Product4'>
          <img className='logo_grid_2' src={product4} alt="Face Milling Cutter" />
          <h3 className='product_title'>Face Milling Cutter <br></br> قاطع الطحن الوجهي </h3>
          <p className='product_des'>Optimize surface finishing with our Face Milling Cutter, engineered for efficient and precise removal of material on large flat surfaces. <br></br> <br></br> قم بتحسين تشطيب السطح باستخدام قاطع الطحن الوجهي الخاص بنا، المصمم لإزالة المواد بكفاءة ودقة على الأسطح المستوية الكبيرة. </p>
        </div>
      </div>

      <div className='sale_highlight_layout'>
        <div className='sales_highligh_box'>
          <h3 className='sales_highligh_h3'>Industrial Machine Tools Available For Sale | أدوات الآلات الصناعية المتاحة للبيع</h3>
          <div className='highlight_points'>
            <p>CNC Milling | Turning Tools الطحن باستخدام الحاسب الآلي | أدوات تحول <br /> CNC Holder | CNC حامل <br /> Carbide End Mill (Flat & Round) | قاطعة نهاية من الكربيد (مسطحة ومستديرة)  <br /> Carbide Insert (For CNC Milling | Turning) | مطحنة نهاية الكربيد (مسطحة ومستديرة) <br /> Micro Meter | ميكرومتر <br /> Vernier Caliper (digitally & Manually) | الورنية الفرجار (رقميًا و يدويًا) <br /> Dial Indicator | اطلب مؤشر <br /> Drill Bit (Carbide & HSS) | لقمة الحفر ( HSS كربيد و )</p>
          </div>
        </div>
      </div>

      <div className='container_shop'>
        <div onClick={() => navigate('/endmillcutter')}  className='Product1'>
          <img className='logo_grid_2' src={product5} alt="End Mill Cutter" />
          <h3 className='product_title'>End Mill Cutter <br></br>  مخرطة نهايات </h3>
          <p className='product_des'>Enhance your machining versatility with our End Mill Cutter, ideal for precision cutting, slotting, and profiling in metalworking. <br></br> <br></br> قم بتعزيز تنوع الآلات لديك باستخدام قاطعة الطحن النهائية الخاصة بنا، المثالية للقطع الدقيق والتشكيل وتحديد الملفات الشخصية في تشغيل المعادن. </p>
        </div>
        <div onClick={() => navigate('/threadmillcutter')} className='Product2'>
          <img className='logo_grid_2' src={product6} alt="Thread Mill Cutter" />
          <h3 className='product_title'>Thread Mill Cutter <br></br> قاطعة الخيوط </h3>
          <p className='product_des'>Achieve precise and clean threads with our Thread Mill Cutter, designed for efficient and reliable threading operations in metalworking. <br></br> <br></br> احصل على خيوط دقيقة ونظيفة باستخدام قاطع الخيوط الخاص بنا، المصمم لعمليات الخيوط الفعالة والموثوقة في تشغيل المعادن </p>
        </div>
        <div onClick={() => navigate('/roughingendmill')} className='Product3'>
          <img className='logo_grid_2' src={product7} alt="Roughing End Mill" />
          <h3 className='product_title'>Roughing End Mill  <br></br> مطحنة النهايات الخشنة </h3>
          <p className='product_des'>Maximize material removal with our Roughing End Mill, perfect for heavy-duty cutting and rapid stock removal in tough materials. <br></br> <br></br> قم بزيادة إزالة المواد باستخدام مطحنة النهاية الخشنة لدينا، وهي مثالية للقطع الشاق والإزالة السريعة للمخزون في المواد الصلبة </p>
        </div>
        <div  onClick={() => navigate('/woodruffcutter')} className='Product4'>
          <img className='logo_grid_2' src={product8} alt="Woodruff Cutter" />
          <h3 className='product_title'>Woodruff Cutter  <br></br> أداة قطع الخشب (راف) </h3>
          <p className='product_des'>Create accurate keyways and slots with ease using our Woodruff Cutter, ideal for precise and efficient machining in metalworking. <br></br> <br></br> أنشئ فتحات ومفاتيح دقيقة بسهولة باستخدام قاطعة Woodruff الخاصة بنا، وهي مثالية للتصنيع الدقيق والفعال في تشغيل المعادن </p>
        </div>
      </div>

      <br></br>
      <br></br>

      <FAQ></FAQ>
      <CONTACT></CONTACT>

     

      <Footer />
    </>
  );
}

export default Shop;
