import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Departments.css';
import CNC from '../Resources/Logo/cnc.svg'
import Conventional from '../Resources/Logo/Conventional.svg';
import Electrical from '../Resources/Logo/electrical.svg';
import Mold from '../Resources/Logo/mold.svg';
import Sheet from '../Resources/Logo/Sheet Metal.svg';
import Welding from '../Resources/Logo/weild.svg';
import GearBox from '../Resources/Logo/Gear.svg';
import Location from '../Resources/Logo/Location.svg';
import Contact from '../Resources/Logo/Contact.svg';
import '../Styles/Aboutus.css';
import Image2 from '../Resources/Department1.webp';
import Image3 from '../Resources/Department2.webp';
import Image4 from '../Resources/Department3.webp';
import Image5 from '../Resources/Department4.webp';
import MetalForming from '../Resources/manufacturinggrid.webp';
import GearManufacturing from '../Resources/Gear Manufacturing.webp';
import Maintenance from '../Resources/Maintaince.webp';
import { useNavigate } from 'react-router-dom';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';




function Departments() {
  const navigate = useNavigate();
  return (
    <>
    <Header></Header>
    <div className='departments'>
      <h1 className='margin_zero'>Our Departments | أقسامنا </h1>
      <h3 className='text_center'>Explore the specialized capabilities of our Departments <br></br> <span className='text_right'> اكتشف القدرات المتخصصة لأقسامنا </span> </h3>
      <br></br>
      <div className='department_grid'>
          <div onClick={() => navigate('/cnc')} class="Cnc">
            <img className='logo_grid' src={CNC}></img>
            <h2 className='logo_title'>CNC | التحكم الرقمي بالحاسوب </h2>
            <p className='logo_desc'>
            High-precision CNC machining solutions for all your manufacturing needs <br></br>
            حلول التشغيل الرقمي بالحاسوب عالية الدقة لجميع احتياجاتك التصنيعية
            </p>

          </div>
          <div onClick={() => navigate('/conventional')} class="Conventional">
            <img className='logo_grid' src={Conventional}></img>
            <h2 className='logo_title'>Conventional | تقليدي </h2>
            <p className='logo_desc'>
            Reliable conventional machining for precise and durable components <br></br>
            تشغيل تقليدي موثوق للحصول على مكونات دقيقة ومتينة
            </p>
          </div>
          <div onClick={() => navigate('/electrical')} class="Electrical">
            <img className='logo_grid' src={Electrical}></img>
            <h2 className='logo_title'>Electrical | الكهربائي </h2>
            <p className='logo_desc'>
            Advanced electrical machining for intricate and accurate parts <br></br>
            تشغيل كهربائي متقدم لقطع معقدة ودقيقة
            </p>
          </div>
          <div onClick={() => navigate('/mold')} class="Mold">
            <img className='logo_grid' src={Mold}></img>
            <h2 className='logo_title'>Mold & Pressese | القوالب والمكابس </h2>
            <p className='logo_desc'>
            Expert Mold & Die solutions for high-quality, custom manufacturing. <br></br>
            حلول قوالب ومكابس متخصصة لتصنيع مخصص وعالي الجودة
            </p>
          </div>
          <div onClick={() => navigate('/sheetmetal')} class="Sheet-Metal">
            <img className='logo_grid' src={Sheet}></img>
            <h2 className='logo_title'>Sheet Metal | الصفائح المعدنية </h2>
            <p className='logo_desc'>
            Precision sheet metal fabrication for versatile & durable products  <br></br>
            تصنيع مكونات الصفائح المعدنية عالية الجودة لمجموعة متنوعة من التطبيقات       
            </p>
          </div>
          <div onClick={() => navigate('/welding')} class="Welding">
            <img className='logo_grid' src={Welding}></img>
            <h2 className='logo_title'>Laser Cutting  | القطع بالليزر </h2>
            <p className='logo_desc'>
            Expert welding services for strong and reliable joints <br></br>
            خدمات لحام متخصصة لوصلات قوية وموثوقة
            </p>
          </div>
          <div onClick={() => navigate('/gearbox')} class="GearBox">
              <img className='logo_grid' src={GearBox}></img>
              <h2 className='logo_title'>GearBox  |  صندوق التروس  </h2>
              <p className='logo_desc'>
              High-performance gearbox manufacturing for efficient and reliable power transmission <br></br>
              تصنيع صندوق تروس عالية الأداء لنقل الطاقة بكفاءة وموثوقية
              </p>
          </div>
          <div onClick={() => window.open('tel:966582444166')}  class="Contact">
              <img className='logo_grid' src={Contact}></img>
              <h2 className='logo_title'>Contact | اتصال </h2>
              <p className='logo_desc'>
              Phone: +966582444166 <br></br> الهاتف: +966582444166
              </p>
          </div>

          <div onClick={() => window.open('https://maps.app.goo.gl/UxwJvBMQUqZTuicx6')} class="Location">
              <img className='logo_grid' src={Location}></img>
              <h2 className='logo_title'>Location | موقع </h2>
              <p className='logo_desc'>
              GVVF+G96, Al Kharj Rd, New Industrial Area, Riyadh 14331, Saudi Arabia <br></br>
              GVVF+G96، طريق الخرج، المنطقة الصناعية الجديدة، الرياض 14331، المملكة العربية السعودية
              </p>
          </div>
      </div>
      <br></br>
      <div class="container">
      <div class="Aboutus3_image">
        <img className='image2' src={Image2}></img>
      </div>
      <div class="Aboutus3_titel">
        <h1 id='about_us_h1' className='aboutus_h1'> Manufacturing, metal forming & cutting departments, which include production lines</h1>
        <h1 className='arabic-text'>أقسام التصنيع و تشكيل و قطع المعادن و اللي تشمل خطوط الإنتاج</h1>  
          <p className='aboutus_p_english'>
            Manufacture of Spare Parts Of All Types Of Iron Or Other Raw Materials
          </p>
          <p className='arabic-text'>
          تصنيع قطع الغيار من الحديد بجميع أنواعه أو غيرها من المواد الخام
          </p>

          <div className='spilt_layout'>
              <div className='spilt_layout_1'>
                <ul className='aboutus_p'>
                  <li>Stainless Steel</li>
                  <li>Cast Iron Copper</li>
                  <li>Bronze</li>
                  <li>Aluminum</li>
                  <li>Teflon Plastic</li>
                </ul>
              </div>

              <div className='spilt_layout_2'>
                <ul className='aboutus_p'>
                  <li>الفولاذ المقاوم للصدأ</li>
                  <li>الحديد الزهر والنحاس</li>
                  <li>البرونز</li>
                  <li>الألومنيوم</li>
                  <li>البلاستيك التفلون</li>
                </ul>
              </div>

            </div>
          
          <br></br>
      </div>
      </div>  
    
      <img className='metalforming' src={MetalForming}></img>
      
      <div class="container3">
        <div class="Aboutus4_image">
          <img className='image3' src={Image3}></img>
        </div>
        <div class="Aboutus4_titel">
          <h1>Gears Manufacturing & Sorting Section Which Includes</h1>
          <h1 className='arabic-text'> قسم تصنيع وفرز التروس والذي يشمل</h1>  
          
           <div className='spilt_layout'>
              <div className='spilt_layout_1'>
                <ul>
                  <li>Manufacturing & Sorting of Helical Gears</li>
                  <li>Mechnical Movement Systems in all Materials</li>  
                </ul>
              </div>

              <div className='spilt_layout_2'>
                <ul>
                  <li>تصنيع وفرز التروس الحلزونية</li>
                  <li>أنظمة الحركة الميكانيكية بجميع المواد</li>
                </ul>
              </div>

           </div>

            <br></br>
        </div>
      </div> 
      <img className='metalforming' src={GearManufacturing}></img>
      <div class="container">
      <div class="Aboutus3_image">
        <img className='image2' src={Image5}></img>
      </div>
      <div class="Aboutus3_titel">
        <h1 id='about_us_h1'>Mold Manufacturing & Maintenance Departments Which Includes</h1>
        <h1 className='arabic-text'>أقسام تصنيع وصيانة القوالب والتي تشمل </h1>  
          
          <div className='spilt_layout'>
              <div className='spilt_layout_1'>
                <ul>
                  <li>We manufacture plastic molds Iron mold manufacturing Manufacture <br></br> of molds from various materials As per customer's request</li>
                </ul>
              </div>

              <div className='spilt_layout_2'>
                <ul>
                  <li>نصنيع قوالب البلاستيك</li>
                  <li>تصنيع قوالب الحديد</li>
                  <li>و تصنيع القوالب من مختلف المواد
                  حسب طلب العميل</li>

                </ul>
              </div>
           </div>

          <br></br>
      </div>
      </div>  
     
      <div class="container3">
        <div class="Aboutus4_image">
          <img className='image3' src={Image4}></img>
        </div>
        <div class="Aboutus4_titel">
          <h1>Maintenance Department Which Includes</h1>
          <h1 className='arabic-text'>قسم الصيانة والذي يضم </h1> 
            <br></br>
            <div className='spilt_layout'>
              <div className='spilt_layout_1'>
                <ul>
                  <li>Heavy Machinery & Equipment</li>
                  <li>Winding generators & electric motors</li>
                  <li>Mechnical Maintenance & Pumps</li>
                </ul>
              </div>

              <div className='spilt_layout_2'>
                <ul>
                  <li>الآلات والمعدات الثقيلة</li>
                  <li>لف المولدات و المحركات الكهربائية</li>
                  <li>الصيانة الميكانيكية والمضخات</li>
                </ul>
              </div>
           </div>
           <br></br>
        </div>
      </div> 
      <img className='metalforming' src={Maintenance}></img>
      <br></br>

    </div>

    <FAQ></FAQ>
    <CONTACT></CONTACT>
    

    
    
    <Footer></Footer>
    </>
  );
}

export default Departments;