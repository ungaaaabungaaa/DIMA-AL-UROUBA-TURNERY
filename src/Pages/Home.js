import React, { useState, useEffect } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/home.css';
import Marquee from "react-fast-marquee";
import Cards from '../Components/cards';
import { objectives } from '../Data/objectivesData';
import { departments } from '../Data/departmentsData';
import DepartmentCards from '../Components/departmentCards';
import SomethingImage from '../Resources/AboutUs4.webp'
import { useNavigate } from 'react-router-dom';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import heroImage1 from '../Resources/Hero/Hero1.webp';
import heroImage2 from '../Resources/Hero/Hero2.webp';
import heroImage3 from '../Resources/Hero/Hero3.webp';
import heroImage4 from '../Resources/Hero/Hero4.webp';
import heroImage5 from '../Resources/Hero/Hero5.webp';


import M1 from '../Resources/machining/cnc.webp';
import M2 from '../Resources/machining/wirecutting.webp';
import M3 from '../Resources/machining/bending.webp';
import M4 from '../Resources/machining/lasercutting.webp';
import M5 from '../Resources/machining/motors.webp';
import M6 from '../Resources/machining/machining.webp';



function Home() {

 
  
  const handleContactClick = () => {
    const whatsappNumber = '+966509909620';
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank');
  };


  const navigate = useNavigate();

  const images = [heroImage1,heroImage2,heroImage3,heroImage4,heroImage5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);
  

  return (
    <>
    <Header></Header>
   
    <div className='hero'>
      <div className='hero_text'>
        <h1 className='hero_title'>DIMA AL UROUBA</h1>
        <h3 className='hero_title_h3 arabic-text'>Precision Crafting for a Brighter Tomorrow <br></br> صناعة  دقيقة لمستقبل أكثر إشراقًا</h3>
        <br></br>
        <button onClick={handleContactClick} className='contact_button'>Contact</button>

      </div>
      <div
        className='hero_image'
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
    </div>


    <div id='somethingelse' className="container">
      <div class="Something-Else-Image">
        <img className='something_Image' src={SomethingImage}></img>
      </div>
      <div id='Something-else-Text' class="Something-else-Text">
        <h1 className='something-else-h1'>Something Else | شيء آخر </h1>
        <p className='something_p'>Reaching the world in the field of industry, turning, and maintenance is not easy, but with patience and diligence we have reached what we aspire to, and for this reason we are trying to preserve the place we have reached, to always maintain our first ranking in our field, and thus we gain the trust of our customers</p>
        <br></br>
        <p className='something_p arabic-text'>الوصول إلى العالمية في مجال الصناعة والخراطة والصيانة ليس بالأمر السهل، ولكن بالصبر والاجتهاد وصلنا إلى ما نطمح إليه، ولهذا السبب نحاول الحفاظ على المكانة التي وصلنا إليها، لنحافظ دائمًا على مكانتنا الأولى التصنيف في مجالنا، وبالتالي نكتسب ثقة عملائنا</p>
        <div className='highlights'>
          <div className='highlights_text text_center'>
            <h1>8K+</h1>
            <p>Products Shipped</p>
          </div>
          <div className='highlights_text text_center'>
            <h1>6K+</h1>
            <p>Happy Customer</p>
          </div>
          <div className='highlights_text text_center'>
            <h1>2K+</h1>
            <p>Staff Support</p>
          </div>
        </div>
      </div>
    </div>

    <div className='departments_layout'>
      <h2 className='departments_h2'>Departments | الأقسام</h2>
      <h3>Precision-engineered components crafted with expertise and <br></br> efficiency in our advanced  Department’s <br></br> مكونات مصممة بدقة ومصممة بخبرة وكفاءة في قسمنا المتقدم</h3>
      <br></br>
      <Marquee pauseOnHover pauseOnClick >
            {departments.map((department, index) => (
              <DepartmentCards 
                key={index} 
                name={department.name} 
                desc={department.description} 
                icon={department.icon} 
                path={department.path} 
              />
            ))}
      </Marquee>
     
    </div>


    <div className='sales'>
      <h2>Machining | التصنيع بالآلات</h2>
      <br></br>
      <div className='sales_grid'>
      <div onClick={() => navigate('/cncmachine')} className='salesCard1'>
        <img src={M1} className='salesimage'></img>
        <br></br>
        <h3 className='margin_bottom_zero'>CNC Machine <br></br> ماكينة CNC </h3>
        <p>Combines precision turning and milling for complex part production. <br></br> تجمع بين الدقة في الخراطة والتفريز لإنتاج أجزاء معقدة.</p>
      </div>

  <div  className='salesCard2'>
    <img src={M2} className='salesimage'></img>
    <br></br>
    <h3 className='margin_bottom_zero'>Wire Cut <br></br> ماكينة قص بالسلك</h3>
    <p>For precise and intricate cutting of hard metals and alloys. <br></br> تستخدم للقطع الدقيق والمعقد للمعادن الصلبة والسبائك.</p>
  </div>

  <div  className='salesCard3'>
    <img src={M3} className='salesimage'></img>
    <br></br>
    <h3 className='margin_bottom_zero'>Bending Machine <br></br> طعّاجة</h3>
    <p>Efficiently bends metal sheets into various shapes for industrial use. <br></br> تقوم بثني الصفائح المعدنية بشكل فعال للاستخدام الصناعي.</p>
  </div>
</div>
<br></br>

<div className='sales_grid'>
  <div  className='salesCard1'>
    <img src={M4} className='salesimage'></img>
    <br></br>
    <h3 className='margin_bottom_zero'>Laser Cutting Machine <br></br> ماكينة قص بالليزر</h3>
    <p>Offers precision laser cutting for various materials with minimal waste. <br></br> تقدم قص الليزر بدقة عالية للعديد من المواد مع الحد الأدنى من الهدر.</p>
  </div>

  <div className='salesCard2'>
    <img src={M5} className='salesimage'></img>
    <br></br>
    <h3 className='margin_bottom_zero'>Motors <br></br> دينموات</h3>
    <p>High-performance motors designed for heavy-duty machining operations. <br></br> دينموات عالية الأداء مصممة لعمليات التصنيع الثقيلة.</p>
  </div>

  <div className='salesCard3'>
    <img src={M6} className='salesimage'></img>
    <br></br>
    <h3 className='margin_bottom_zero'>General Machining <br></br> خراطة عامة</h3>
    <p>Comprehensive machining services including gears, shafts, welding, and custom modifications. <br></br> خدمات خراطة شاملة تشمل التروس والعمدان واللحام والتعديلات المخصصة.</p>
  </div>
</div>


    </div>


    <div className='objectives'>
    <h2 className='objectives_h1'>Objectives | أهداف</h2>
    <h3 className='objectives_h3'>Crafting precision-engineered components with expertise and <br></br> efficiency in our advanced department <br></br> تصنيع مكونات مصممة بدقة مع الخبرة والكفاءة في قسمنا المتقدم</h3>
    <br></br>
      <Marquee pauseOnHover pauseOnClick autoFill>
          <Cards objective={objectives[0]} />
          <Cards objective={objectives[1]} />
          <Cards objective={objectives[2]} />
          <Cards objective={objectives[3]} />
          <Cards objective={objectives[4]} />
          <Cards objective={objectives[5]} />
      </Marquee>
    <br></br>
    <br></br>
    <br></br>
    </div>


    <FAQ></FAQ>

    <br></br>

    <CONTACT></CONTACT>

    

    <Footer></Footer>
    </>
  );
}

export default Home;