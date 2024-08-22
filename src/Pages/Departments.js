import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Departments.css';
import '../Styles/Header.css';
import CNC from '../Resources/Logo/cnc.svg'
import Conventional from '../Resources/Logo/Conventional.svg';
import Electrical from '../Resources/Logo/electrical.svg';
import Mold from '../Resources/Logo/mold.svg';
import Sheet from '../Resources/Logo/Sheet Metal.svg';
import Welding from '../Resources/Logo/weild.svg';
import GearBox from '../Resources/Logo/Gear.svg';
import '../Styles/Aboutus.css';
import Image2 from '../Resources/Department1.webp';
import Image3 from '../Resources/Department2.webp';
import Image4 from '../Resources/Department3.webp';
import Image5 from '../Resources/Department4.webp';
import MetalForming from '../Resources/manufacturinggrid.webp';
import GearManufacturing from '../Resources/Gear Manufacturing.webp';
import Mould from '../Resources/moldgrid.webp';
import Maintenance from '../Resources/Maintaince.webp';
import { useNavigate } from 'react-router-dom';




function Departments() {
  const navigate = useNavigate();
  return (
    <>
    <Header></Header>
    <div className='departments'>
      <h1 className='margin_zero'>Our Departments | قسمنا </h1>
      <h3>Explore the specialized capabilities of our Departments | اكتشف القدرات المتخصصة لأقسامنا</h3>
      <br></br>
      <div className='department_grid'>
          <div onClick={() => navigate('/cnc')} class="Cnc">
            <img className='logo_grid' src={CNC}></img>
            <h2 className='logo_title'>CNC</h2>
            <p className='logo_desc'>
            High-precision CNC machining solutions for all your manufacturing needs
            </p>
          </div>
          <div onClick={() => navigate('/conventional')} class="Conventional">
            <img className='logo_grid' src={Conventional}></img>
            <h2 className='logo_title'>Conventional</h2>
            <p className='logo_desc'>
            Reliable conventional machining for precise and durable components
            </p>
          </div>
          <div onClick={() => navigate('/electrical')} class="Electrical">
            <img className='logo_grid' src={Electrical}></img>
            <h2 className='logo_title'>Electrical</h2>
            <p className='logo_desc'>
            Advanced electrical machining for intricate and accurate parts
            </p>
          </div>
          <div onClick={() => navigate('/mold')} class="Mold">
            <img className='logo_grid' src={Mold}></img>
            <h2 className='logo_title'>Mold & Die</h2>
            <p className='logo_desc'>
            Expert Mold & Die solutions for high-quality, custom manufacturing.
            </p>
          </div>
          <div onClick={() => navigate('/sheetmetal')} class="Sheet-Metal">
            <img className='logo_grid' src={Sheet}></img>
            <h2 className='logo_title'>Sheet Metal</h2>
            <p className='logo_desc'>
            Precision sheet metal fabrication for versatile and durable products
            </p>
          </div>
          <div onClick={() => navigate('/welding')} class="Welding">
            <img className='logo_grid' src={Welding}></img>
            <h2 className='logo_title'>Welding</h2>
            <p className='logo_desc'>
            Expert welding services for strong and reliable joints
            </p>
          </div>
          <div onClick={() => navigate('/gearbox')} class="GearBox">
              <img className='logo_grid' src={GearBox}></img>
              <h2 className='logo_title'>GearBox</h2>
              <p className='logo_desc'>
              High-performance gearbox manufacturing for efficient and reliable power transmission
              </p>
          </div>
      </div>
      <br></br>
      <div class="container">
      <div class="Aboutus3_image">
        <img className='image2' src={Image2}></img>
      </div>
      <div class="Aboutus3_titel">
        <h1> Manufacturing , Metal Forming & Production Line Cutting Departments, Which Includes | أقسام التصنيع وتشكيل المعادن وتقطيع خطوط الإنتاج والتي تشمل </h1>
          <p>
           Manufacturing Spare Parts From Raw Materials From All Kinds of Iron
          </p>
          <p>
          "تصنيع قطع الغيار من المواد الخام من الحديد بجميع أنواعه"
          </p>
          <ul>
              <li>Stainless Steel</li>
              <li>Cast Iron Copper</li>
              <li>Bronze</li>
              <li>Aluminum</li>
              <li>Teflon Plastic</li>
          </ul>
          <ul>
          <li>الفولاذ المقاوم للصدأ</li>
          <li>الحديد الزهر والنحاس</li>
          <li>البرونز</li>
          <li>الألومنيوم</li>
          <li>البلاستيك التفلون</li>
          </ul>
          <br></br>
      </div>
      </div>  
    
      <img className='metalforming' src={MetalForming}></img>
      
      <div class="container3">
        <div class="Aboutus4_image">
          <img className='image3' src={Image3}></img>
        </div>
        <div class="Aboutus4_titel">
          <h1>Gears Manufacturing & Sorting Section Which Includes | قسم تصنيع وفرز التروس والذي يشمل </h1>
          <ul>
              <li>Manufacturing & Sorting of Helical Gears</li>
              <li>Mechnical Movement Systems in all Materials</li>
              
            </ul>
            <br></br>
            <ul>
            <li>تصنيع وفرز التروس الحلزونية</li>
            <li>أنظمة الحركة الميكانيكية بجميع المواد</li>
            </ul>
            <br></br>
        </div>
      </div> 
      <img className='metalforming' src={GearManufacturing}></img>
      <div class="container">
      <div class="Aboutus3_image">
        <img className='image2' src={Image5}></img>
      </div>
      <div class="Aboutus3_titel">
        <h1> Mold Manufacturing & Maintenance Departments Which Includes | أقسام تصنيع وصيانة القوالب والتي تشمل </h1>
          <ul>
              <li>Manufacturing of plastic Mold Factories</li>
              <li>Iron Molds</li>
          </ul>
          <ul>
            <li>تصنيع قوالب البلاستيك</li>
            <li>قوالب الحديد</li>
          </ul>
          <br></br>
      </div>
      </div>  
     
      <div class="container3">
        <div class="Aboutus4_image">
          <img className='image3' src={Image4}></img>
        </div>
        <div class="Aboutus4_titel">
          <h1>Maintenance Department Which Includes | قسم الصيانة والذي يضم </h1>
          <ul>
              <li>Heavy Machinery & Equipment</li>
              <li>Electric Motor Winding</li>
              <li>Genrator</li>
              <li>Mechnical Maintenance & Pumps</li>

            </ul>
            <br></br>
            <ul>
            <li>الآلات والمعدات الثقيلة</li>
            <li>لف المحركات الكهربائية</li>
            <li>مولد</li>
            <li>الصيانة الميكانيكية والمضخات</li>
            </ul>
            <br></br>
        </div>
      </div> 
      <img className='metalforming' src={Maintenance}></img>
      <br></br>

    </div>
    

    
    
    <Footer></Footer>
    </>
  );
}

export default Departments;